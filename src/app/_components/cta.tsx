import { ArrowRight, Mail } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-slate-900 dark:bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to build something amazing?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Let's discuss your project and how AWFixer Build can help bring your vision to life
            while supporting the open source community.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@awfixer.build"
              className="w-full sm:w-auto rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Mail className="h-4 w-4" />
              Get in Touch
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto rounded-md border border-slate-700 px-6 py-3 text-sm font-semibold text-white hover:border-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 flex items-center justify-center gap-2"
            >
              View Services
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <svg
        className="absolute left-1/2 top-0 -z-10 h-[48rem] w-[96rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] opacity-20"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width="200"
            height="200"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    </section>
  );
}
