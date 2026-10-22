import { CheckCircle2 } from 'lucide-react';
import { techTips } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function TechTips() {
  const { ref, visible } = useReveal();

  return (
    <section id="tech-tips" className="py-20 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} text-center`}>
          <span className="text-sm font-semibold text-techblue-500 uppercase tracking-wider">
            Stay Safe
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-heading text-navy-900 tracking-tight">
            Quick Tech Tips
          </h2>
          <p className="mt-4 text-lg text-navy-500 max-w-2xl mx-auto">
            Small habits that make a big difference. Follow these tips to keep
            your devices running smoothly and your data secure.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {techTips.map((tip, i) => (
            <div
              key={tip.id}
              className="group flex items-center gap-3.5 bg-light rounded-xl p-4 border border-navy-100 hover:border-techblue-200 hover:bg-techblue-50/50 transition-all duration-300"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <CheckCircle2 className="w-6 h-6 text-techblue-500 shrink-0 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-sm font-medium text-navy-800 leading-snug">
                {tip.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
