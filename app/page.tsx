import React from 'react';
import Link from 'next/link';
import { Cloud, Server, Code2, Shield, ArrowRight, Mail } from 'lucide-react';

// Types for your services and projects
interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  tags: string[];
}

interface ProjectItem {
  id: string;
  title: string;
  client: string;
  description: string;
  metrics: string;
  techStack: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: 'software',
    title: 'Scalable Software Development',
    description: 'Custom web, mobile, and enterprise backend architectures designed for high performance and seamless scaling.',
    icon: Code2,
    tags: ['Next.js', 'Node.js/Express', 'React Native', 'PostgreSQL'],
  },
  {
    id: 'infrastructure',
    title: 'Robust IT Infrastructure',
    description: 'Enterprise-grade cloud deployment, server management, and automated DevOps pipelines to keep systems online 24/7.',
    icon: Server,
    tags: ['AWS / GCP', 'Docker & K8s', 'CI/CD Pipelines', 'Network Security'],
  },
];

const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Fintech Transaction Processing Engine',
    client: 'Enterprise Client',
    description: 'Architected a low-latency payment engine handling millions of daily API requests with zero downtime.',
    metrics: '99.99% Uptime | <50ms Latency',
    techStack: ['Node.js', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    id: 'proj-2',
    title: 'Cloud Management Dashboard',
    client: 'SaaS Platform',
    description: 'Built a real-time web portal for monitoring multi-cloud server metrics and infrastructure health.',
    metrics: '500k+ Active Metrics Monitored',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AWS'],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050810] text-slate-100 font-sans selection:bg-[#00E6CC] selection:text-black">
      
      {/* 1. Header / Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050810]/80 backdrop-blur-md border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo Mark */}
            <div className="w-10 h-10 rounded-lg bg-linear-to-tr from-[#00E6CC]/20 to-teal-500/10 border border-[#00E6CC]/40 flex items-center justify-center group-hover:border-[#00E6CC] transition-colors">
              <span className="text-[#00E6CC] font-bold text-xl">B</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-wider text-white leading-tight">BogiTech</span>
              <span className="text-xs text-[#00E6CC] tracking-widest uppercase font-mono">Solutions</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-[#00E6CC] transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-[#00E6CC] transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-[#00E6CC] transition-colors">Contact</a>
          </nav>

          <a 
            href="#contact" 
            className="px-5 py-2.5 rounded-md text-xs uppercase tracking-wider font-bold bg-[#00E6CC] text-[#050810] hover:bg-[#00c2ac] hover:shadow-[0_0_20px_rgba(0,230,204,0.4)] transition-all"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative min-h-screen pt-28 flex items-center justify-center px-6 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-[#00E6CC]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">
          
          {/* Left Column: Brand Statement */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E6CC]/10 border border-[#00E6CC]/30 text-[#00E6CC] text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-[#00E6CC] animate-pulse" />
              Software & Infrastructure Engineering
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Building <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00E6CC] to-teal-400">Scalable Software</span> & Robust IT Infrastructure.
            </h1>

            <p className="text-slate-400 text-lg max-w-xl">
              We design, develop, and deploy enterprise-grade digital systems. From high-throughput backends to cloud infrastructure engineered for zero downtime.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#00E6CC] text-[#050810] font-bold text-sm shadow-[0_0_15px_rgba(0,230,204,0.3)] hover:shadow-[0_0_25px_rgba(0,230,204,0.5)] transition-all"
              >
                Schedule Consultation <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#portfolio" 
                className="px-6 py-3.5 rounded-lg border border-slate-700 bg-slate-900/50 text-slate-300 font-bold text-sm hover:border-slate-500 hover:text-white transition-all"
              >
                View Case Studies
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Code & Architecture Visual */}
          <div className="relative">
            {/* Visual Decorative Box */}
            <div className="relative rounded-xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 font-mono text-xs text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </span>
                <span>app/server.ts</span>
              </div>

              {/* Code Snippet Block */}
              <pre className="mt-4 font-mono text-xs sm:text-sm text-slate-300 overflow-x-auto leading-relaxed">
                <code>
                  <span className="text-purple-400">import</span> &#123; Server, Cluster &#125; <span className="text-purple-400">from</span> <span className="text-teal-300">&apos;@bogitech/core&apos;</span>;<br /><br />
                  <span className="text-purple-400">const</span> app = <span className="text-blue-400">express</span>();<br />
                  <span className="text-purple-400">const</span> infrastructure = <span className="text-purple-400">new</span> <span className="text-yellow-300">Cluster</span>(&#123;<br />
                  &nbsp;&nbsp;scaling: <span className="text-teal-300">&apos;auto&apos;</span>,<br />
                  &nbsp;&nbsp;uptime: <span className="text-teal-300">&apos;99.99%&apos;</span>,<br />
                  &nbsp;&nbsp;status: <span className="text-[#00E6CC]">&apos;scalable&apos;</span><br />
                  &#125;);<br /><br />
                  app.<span className="text-blue-400">get</span>(<span className="text-teal-300">&apos;/api/v1/health&apos;</span>, (req, res) =&gt; &#123;<br />
                  &nbsp;&nbsp;res.<span className="text-blue-400">json</span>(&#123; status: <span className="text-[#00E6CC]">&apos;active&apos;</span> &#125;);<br />
                  &#125;);
                </code>
              </pre>

              {/* Floating Nodes matching banner aesthetic */}
              <div className="absolute -top-6 -right-6 p-3 rounded-xl bg-[#050810] border border-[#00E6CC]/40 text-[#00E6CC] shadow-[0_0_15px_rgba(0,230,204,0.2)]">
                <Cloud className="w-6 h-6 animate-pulse" />
              </div>
              <div className="absolute -bottom-6 -left-6 p-3 rounded-xl bg-[#050810] border border-teal-500/40 text-teal-400 shadow-[0_0_15px_rgba(0,230,204,0.2)]">
                <Server className="w-6 h-6" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Services Section */}
      <section id="services" className="py-24 px-6 border-t border-slate-800/80 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs uppercase tracking-widest font-mono text-[#00E6CC]">Capabilities</h2>
            <p className="text-3xl font-bold text-white sm:text-4xl">Engineered for Reliability</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.id} 
                  className="p-8 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-[#00E6CC]/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#00E6CC]/10 text-[#00E6CC] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-md bg-slate-800/60 text-slate-300 text-xs font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 space-y-3">
            <h2 className="text-xs uppercase tracking-widest font-mono text-[#00E6CC]">Proven Impact</h2>
            <p className="text-3xl font-bold text-white sm:text-4xl">Featured Deliverables</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <div key={project.id} className="p-8 rounded-xl bg-slate-900/30 border border-slate-800 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-slate-500 uppercase">{project.client}</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-3">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-6">{project.description}</p>
                </div>
                
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#00E6CC]">{project.metrics}</span>
                  <div className="flex gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-[10px] text-slate-400 font-mono">#{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Contact / CTA Section */}
      <section id="contact" className="py-24 px-6 border-t border-slate-800/80 bg-slate-950/50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to scale your technical infrastructure?</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Whether you are launching a new product or modernizing legacy backend systems, BogiTech delivers high-performance solutions.
          </p>
          
          <div className="inline-flex items-center gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-200">
            <Mail className="w-5 h-5 text-[#00E6CC]" />
            <span className="font-mono text-sm">contact@bogitech.com</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800/60 text-center text-xs text-slate-500 font-mono">
        © {new Date().getFullYear()} BogiTech Solutions. All rights reserved.
      </footer>

    </main>
  );
}