import { Globe, Smartphone, Database, Cloud, Cog, Sparkles } from "lucide-react";

const services = [
  {
    name: "Web Applications",
    description: "Modern, responsive web applications built with React, Next.js, and the latest web technologies.",
    icon: Globe,
    features: ["Progressive Web Apps", "Real-time Features", "SEO Optimized"],
  },
  {
    name: "Mobile Development",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    icon: Smartphone,
    features: ["iOS & Android", "React Native", "Flutter"],
  },
  {
    name: "Backend & APIs",
    description: "Robust, scalable backend systems and RESTful/GraphQL APIs built for performance.",
    icon: Database,
    features: ["Microservices", "API Design", "Database Optimization"],
  },
  {
    name: "Cloud Infrastructure",
    description: "Deploy and manage your applications with modern cloud infrastructure and DevOps practices.",
    icon: Cloud,
    features: ["AWS/Azure/GCP", "CI/CD Pipelines", "Container Orchestration"],
  },
  {
    name: "System Integration",
    description: "Seamlessly integrate third-party services and legacy systems into your modern stack.",
    icon: Cog,
    features: ["API Integration", "Data Migration", "Legacy Modernization"],
  },
  {
    name: "AI & Automation",
    description: "Leverage AI and automation to enhance your applications and streamline workflows.",
    icon: Sparkles,
    features: ["LLM Integration", "Process Automation", "Intelligent Features"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Full-stack development services tailored to your unique needs
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-x-4">
                <div className="rounded-lg bg-blue-600/10 dark:bg-blue-500/10 p-3">
                  <service.icon className="h-6 w-6 text-blue-600 dark:text-blue-500" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold leading-8 text-slate-900 dark:text-white">
                  {service.name}
                </h3>
              </div>
              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
                {service.description}
              </p>
              <ul className="mt-6 space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-x-2 text-sm text-slate-600 dark:text-slate-400">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
