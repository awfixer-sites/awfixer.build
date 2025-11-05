import { Zap, Shield, Users, TrendingUp, Code, Heart } from "lucide-react";

const benefits = [
  {
    name: "Lightning Fast Development",
    description: "We leverage cutting-edge tools and frameworks to deliver your project faster without compromising quality.",
    icon: Zap,
  },
  {
    name: "Enterprise-Grade Security",
    description: "Security is baked into every line of code. We follow industry best practices and conduct thorough audits.",
    icon: Shield,
  },
  {
    name: "Dedicated Team",
    description: "Work with experienced developers who are passionate about creating exceptional software solutions.",
    icon: Users,
  },
  {
    name: "Scalable Architecture",
    description: "Build for today, scale for tomorrow. Our solutions grow with your business needs.",
    icon: TrendingUp,
  },
  {
    name: "Open Source First",
    description: "We contribute to and support the open source ecosystem, giving back to the community that powers innovation.",
    icon: Code,
  },
  {
    name: "Long-term Partnership",
    description: "We're not just contractors—we're partners invested in your success and long-term growth.",
    icon: Heart,
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24 sm:py-32 bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Why Build with AWFixer?
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            We combine technical excellence with a commitment to open source and sustainable development.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900 dark:text-white">
                  <benefit.icon className="h-5 w-5 flex-none text-blue-600 dark:text-blue-500" aria-hidden="true" />
                  {benefit.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600 dark:text-slate-400">
                  <p className="flex-auto">{benefit.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
