import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              AWFixer Build
            </h3>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 max-w-md">
              Premium development services that deliver exceptional results while supporting
              the open source community.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://github.com/awfixer"
                className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/awfixer"
                className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/company/awfixer"
                className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
              Services
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#services" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Cloud Infrastructure
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  AI Integration
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
              Company
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#benefits" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Why AWFixer
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Open Source
                </a>
              </li>
              <li>
                <a href="https://inv.wtf/awfixerandfriends" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Discord Community
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
            &copy; {new Date().getFullYear()} AWFixer Build. Building the future, one project at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
