"use client";

import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, FileText, Download, Save, Search, Building2, ChevronRight } from "lucide-react";
import { toast } from "sonner";

interface AppFile {
  name: string;
  content: string;
}

interface Application {
  company: string;
  files: AppFile[];
}

export default function CareerHub() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  const [selectedFile, setSelectedFile] = useState<AppFile | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [focusMode, setFocusMode] = useState(true);
  const [editedContent, setEditedContent] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleDownloadMd = () => {
    if (!selectedFile) return;
    const blob = new Blob([editedContent], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = selectedFile.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await fetch("/api/applications");
      const data = await res.json();
      setApplications(data.applications || []);
      if (data.applications?.length > 0 && !selectedApp) {
        setSelectedApp(data.applications[0]);
        setSelectedFile(data.applications[0].files[0]);
        setEditedContent(data.applications[0].files[0].content);
      }
    } catch {
      toast.error("Failed to load applications");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!selectedApp || !selectedFile) return;

    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company: selectedApp.company,
          fileName: selectedFile.name,
          content: editedContent
        })
      });

      if (res.ok) {
        toast.success("Saved successfully");
        setEditMode(false);
        // Update local state
        const updatedApps = applications.map(app => {
          if (app.company === selectedApp.company) {
            return {
              ...app,
              files: app.files.map(f => f.name === selectedFile.name ? { ...f, content: editedContent } : f)
            };
          }
          return app;
        });
        setApplications(updatedApps);
      }
    } catch {
      toast.error("Failed to save");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const filteredApps = applications.filter(app => 
    app.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-electric" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-24 min-h-screen max-w-7xl">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar: Applications List */}
        <div className="w-full md:w-80 space-y-6 print:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search companies..." 
              className="pl-10 glass-card"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-mono text-amber uppercase tracking-widest px-2 mb-4">Your Applications</h3>
            {filteredApps.map((app) => (
              <button
                key={app.company}
                onClick={() => {
                  setSelectedApp(app);
                  setSelectedFile(app.files[0]);
                  setEditedContent(app.files[0].content);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center justify-between transition-all ${
                  selectedApp?.company === app.company 
                    ? "bg-electric/10 border-electric/30 text-electric border" 
                    : "glass-card hover:bg-white/5 border-transparent border"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Building2 className="w-4 h-4" />
                  <span className="font-medium truncate">{app.company}</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${selectedApp?.company === app.company ? "rotate-90" : ""}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow space-y-6">
          {selectedApp ? (
            <>
              {/* Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 glass-card p-4 rounded-xl print:hidden">
                <div className="flex gap-2">
                  {selectedApp.files.map((file) => (
                    <Button
                      key={file.name}
                      variant={selectedFile?.name === file.name ? "default" : "outline"}
                      size="sm"
                      onClick={() => {
                        setSelectedFile(file);
                        setEditedContent(file.content);
                        setEditMode(false);
                      }}
                      className={selectedFile?.name === file.name ? "bg-electric hover:bg-electric-light" : "border-border/50"}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      {file.name.includes("CV") ? "Resume" : "Cover Letter"}
                    </Button>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => {
                      setFocusMode(!focusMode);
                      if (focusMode) setEditMode(true);
                    }} 
                    className="border-border/50"
                  >
                    {focusMode ? "Show Editor" : "Full Preview"}
                  </Button>
                  {!focusMode && (
                    <Button variant="outline" size="sm" onClick={() => setEditMode(!editMode)} className="border-border/50">
                      {editMode ? "Hide Editor" : "Edit Mode"}
                    </Button>
                  )}
                  {editMode && (
                    <Button size="sm" onClick={handleSave} className="bg-electric hover:bg-electric-light">
                      <Save className="w-4 h-4 mr-2" /> Save
                    </Button>
                  )}
                  <Button size="sm" variant="outline" onClick={handleDownloadMd} className="border-border/50 text-muted-foreground hover:text-white">
                    <Download className="w-4 h-4 mr-2" /> Download .md
                  </Button>
                  <Button size="sm" variant="outline" onClick={handlePrint} className="border-electric/30 text-electric hover:bg-electric/10">
                    <FileText className="w-4 h-4 mr-2" /> Print to PDF
                  </Button>
                </div>
              </div>

              {/* Editor / Preview Area */}
              <div className={`grid gap-6 h-full min-h-[800px] ${focusMode ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2"}`}>
                {/* Text Editor */}
                {!focusMode && (
                  <Card className={`glass-card border-border/50 overflow-hidden print:hidden ${!editMode && "opacity-50 pointer-events-none"}`}>
                    <CardContent className="p-0 h-full">
                      <Textarea 
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                        className="w-full h-full min-h-[600px] bg-transparent border-none focus:ring-0 p-8 font-mono text-sm leading-relaxed"
                        placeholder="Start typing your markdown..."
                      />
                    </CardContent>
                  </Card>
                )}

                {/* Rendered Preview (This is what gets printed) */}
                <div className={`transition-all duration-500 ${focusMode ? "max-w-4xl mx-auto w-full" : "w-full"}`}>
                  <Card className="bg-white text-slate-900 overflow-hidden shadow-2xl border-none">
                    <CardContent className="p-12 md:p-16 h-full print:p-8 print:shadow-none bg-white">
                      <div className="resume-document bg-white min-h-[1050px]">
                      {/* Professional Header for PDF */}
                      <div className="text-center border-b-2 border-slate-900 pb-6 mb-8">
                        <h1 className="text-3xl font-bold uppercase tracking-tight text-slate-900 mb-2">Tibamwenda Anthony</h1>
                        <p className="text-sm text-slate-600 font-medium">
                          Systems & DX Engineer • Kampala, Uganda • +256 767 790073
                        </p>
                        <p className="text-sm text-slate-500">
                          anthonyngisiro@gmail.com • github.com/AskTiba
                        </p>
                      </div>

                      <div className={`prose prose-slate max-w-none 
                        prose-headings:font-bold prose-headings:text-slate-900 prose-headings:uppercase prose-headings:text-lg prose-headings:border-b prose-headings:border-slate-200 prose-headings:pb-1 prose-headings:mt-6
                        prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-3
                        prose-li:text-slate-700 prose-li:my-0
                        prose-strong:text-slate-900
                        print:prose-sm`}>
                        <ReactMarkdown>{editedContent}</ReactMarkdown>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </>
          ) : (
            <div className="flex flex-col items-center justify-center h-[600px] glass-card rounded-2xl text-center p-8">
              <Building2 className="w-16 h-16 text-muted-foreground mb-4 opacity-20" />
              <h2 className="text-xl font-medium mb-2">No Application Selected</h2>
              <p className="text-muted-foreground">Select a company from the sidebar to view your tailored documents.</p>
            </div>
          )}
        </div>
      </div>

      {/* Custom Print Styles */}
      <style jsx global>{`
        @media print {
          @page {
            margin: 1.5cm;
            size: A4;
          }
          body {
            background: white !important;
            color: black !important;
          }
          nav, header, footer, .print-hidden, .Toolbar_toolbar__ {
            display: none !important;
          }
          .container {
            width: 100% !important;
            max-width: none !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .glass-card, .Card_card__ {
            border: none !important;
            box-shadow: none !important;
            background: white !important;
          }
          .resume-document {
            padding: 0 !important;
            margin: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
