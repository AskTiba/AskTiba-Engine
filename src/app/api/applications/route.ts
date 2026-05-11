import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const APPLICATIONS_DIR = path.join(process.cwd(), "Career Strategy", "Applications");

export async function GET() {
  try {
    if (!fs.existsSync(APPLICATIONS_DIR)) {
      return NextResponse.json({ applications: [] });
    }

    const apps = fs.readdirSync(APPLICATIONS_DIR, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => {
        const appPath = path.join(APPLICATIONS_DIR, dirent.name);
        const files = fs.readdirSync(appPath)
          .filter(file => file.endsWith(".md"))
          .map(file => ({
            name: file,
            content: fs.readFileSync(path.join(appPath, file), "utf8")
          }));
        
        return {
          company: dirent.name,
          files: files
        };
      });

    return NextResponse.json({ applications: apps });
  } catch (error) {
    console.error("Failed to read applications:", error);
    return NextResponse.json({ error: "Failed to load applications" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { company, fileName, content } = await req.json();
    const filePath = path.join(APPLICATIONS_DIR, company, fileName);

    if (!fs.existsSync(path.dirname(filePath))) {
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
    }

    fs.writeFileSync(filePath, content, "utf8");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to save application:", error);
    return NextResponse.json({ error: "Failed to save application" }, { status: 500 });
  }
}
