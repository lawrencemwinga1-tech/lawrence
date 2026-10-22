import { ArrowRight, BrainCircuit } from 'lucide-react';
import { aiTopics } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function AISection() {
  const { ref, visible } = useReveal();

  return (
    <section id="ai-ml" className="relative py-20 lg:py-28 bg-navy-900 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-techblue-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-highlight/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} max-w-2xl`}>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-highlight uppercase tracking-wider">
            <BrainCircuit className="w-4 h-4" />
            AI &amp; Machine Learning
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            Explore Artificial Intelligence
          </h2>
          <p className="mt-4 text-lg text-navy-200">
            AI and Machine Learning are shaping the future of technology. Here's
            what they mean — explained simply for beginners.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {aiTopics.map((topic) => {
            const Icon = topic.icon;
            return (
              <article
                key={topic.id}
                className="group bg-navy-800/60 backdrop-blur rounded-2xl border border-white/10 p-7 hover:border-techblue-400/40 hover:bg-navy-800/90 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-techblue-500 to-techblue-600 text-white transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-7 h-7" strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-xl font-bold font-heading text-white">
                  {topic.title}
                </h3>
                <p className="mt-2.5 text-sm text-navy-300 leading-relaxed">
                  {topic.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-techblue-500 text-white font-semibold rounded-xl hover:bg-techblue-400 transition-all duration-200 shadow-lg shadow-techblue-900/40 hover:-translate-y-0.5"
          >
            Explore AI
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
