import Copyright from "./icons/Copyright";

const Footer = () => {
  return (
    <footer className="py-4 px-6 border-t">
      <div className="container flex items-center justify-center mx-auto text-center text-sm">
        <Copyright />
        <p>{new Date().getFullYear()} Tony. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
