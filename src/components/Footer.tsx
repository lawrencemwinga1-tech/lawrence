import { Cpu, Twitter, Github, Linkedin, Youtube, ArrowRight } from 'lucide-react';

const columns = [
  {
    title: 'Solutions',
    links: ['Computer Problems', 'Smartphone Problems', 'Internet & Networking', 'Windows Fixes'],
  },
  {
    title: 'Technology',
    links: ['Cybersecurity', 'Programming', 'Artificial Intelligence', 'Machine Learning'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Our Mission', 'Contributors', 'Careers'],
  },
  {
    title: 'Support',
    links: ['Ask for Help', 'FAQ', 'Contact', 'Community'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main */}
        <div className="grid gap-10 lg:grid-cols-12 py-14 lg:py-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-techblue-500">
                <Cpu className="w-5 h-5 text-white" strokeWidth={2.2} />
              </span>
              <span className="text-xl font-bold font-heading text-white">
                Tech<span className="text-techblue-400">Solve</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-navy-300 max-w-sm">
              Technology help for everyone. Simple explanations, practical
              solutions and useful tips for students, beginners and everyday
              technology users.
            </p>

            {/* Socials */}
            <div className="mt-6 flex gap-3">
              {[
                { icon: Twitter, label: 'Twitter' },
                { icon: Github, label: 'GitHub' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Youtube, label: 'YouTube' },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 hover:bg-techblue-500 text-navy-200 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="group inline-flex items-center gap-1 text-sm text-navy-300 hover:text-white transition-colors"
                      >
                        {link}
                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-navy-400">
            &copy; 2026 TechSolve. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-navy-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-navy-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
