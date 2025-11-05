import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
            Build Something
            <span className="text-blue-600 dark:text-blue-500"> Extraordinary</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Partner with AWFixer Build for premium software development services.
            We create cutting-edge applications while championing the open source
            projects that power the future.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#contact"
              className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#projects"
              className="text-sm font-semibold leading-6 text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
            >
              View Projects <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-500 to-cyan-400 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
      </div>
    </section>
  );
}
