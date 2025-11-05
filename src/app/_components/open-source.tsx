import { ExternalLink, Github, DollarSign, Star } from "lucide-react";

const projects = [
  {
    name: "Project Alpha",
    description: "A revolutionary open source tool that powers modern development workflows.",
    category: "Developer Tools",
    support: "$2,000/mo",
    stars: "15.2k",
    link: "#",
  },
  {
    name: "CloudKit Framework",
    description: "Open source cloud infrastructure framework used by thousands of developers.",
    category: "Infrastructure",
    support: "$1,500/mo",
    stars: "8.7k",
    link: "#",
  },
  {
    name: "DataFlow",
    description: "Real-time data processing library that makes streaming data simple and powerful.",
    category: "Data Engineering",
    support: "$1,200/mo",
    stars: "12.3k",
    link: "#",
  },
  {
    name: "UIKit Pro",
    description: "Comprehensive component library for building beautiful, accessible user interfaces.",
    category: "UI/UX",
    support: "$1,000/mo",
    stars: "22.1k",
    link: "#",
  },
  {
    name: "SecureAuth",
    description: "Open source authentication and authorization framework with zero-trust security.",
    category: "Security",
    support: "$1,800/mo",
    stars: "9.4k",
    link: "#",
  },
  {
    name: "MobileFirst",
    description: "Cross-platform mobile development framework focused on performance and developer experience.",
    category: "Mobile",
    support: "$1,300/mo",
    stars: "18.5k",
    link: "#",
  },
];

export function OpenSourceProjects() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Open Source Support
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            We believe in giving back. Here are the open source projects we're proud to support financially.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-8 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-blue-600 dark:text-blue-500">
                    {project.category}
                  </p>
                </div>
                <a
                  href={project.link}
                  className="rounded-lg p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  aria-label="View project"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {project.description}
              </p>
              <div className="mt-6 flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400">
                  <DollarSign className="h-4 w-4 text-green-600 dark:text-green-500" />
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {project.support}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>{project.stars}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg font-semibold text-slate-900 dark:text-white">
            Total Monthly Support: <span className="text-blue-600 dark:text-blue-500">$8,800</span>
          </p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Every project we build contributes to the open source ecosystem
          </p>
        </div>
      </div>
    </section>
  );
}
