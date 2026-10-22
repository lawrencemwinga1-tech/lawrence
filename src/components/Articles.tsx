import { ArrowRight, Clock } from 'lucide-react';
import { articles } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function Articles() {
  const { ref, visible } = useReveal();

  return (
    <section id="articles" className="py-20 lg:py-28 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} max-w-2xl`}>
          <span className="text-sm font-semibold text-techblue-500 uppercase tracking-wider">
            Featured
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-heading text-navy-900 tracking-tight">
            Common Tech Problems &amp; Solutions
          </h2>
          <p className="mt-4 text-lg text-navy-500">
            Real-world problems explained in plain language with step-by-step
            solutions you can follow right away.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col bg-white rounded-2xl border border-navy-100 overflow-hidden hover:shadow-xl hover:shadow-navy-950/8 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top accent bar */}
              <div
                className={`h-1.5 ${
                  article.categoryColor === 'techblue' ? 'bg-techblue-500' : 'bg-cyan-highlight'
                }`}
              />

              <div className="p-6 flex flex-col flex-1">
                {/* Category */}
                <span className="text-xs font-semibold uppercase tracking-wider text-techblue-500">
                  {article.category}
                </span>

                {/* Title */}
                <h3 className="mt-2.5 text-lg font-bold font-heading text-navy-900 leading-snug group-hover:text-techblue-600 transition-colors">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-sm text-navy-500 leading-relaxed flex-1">
                  {article.description}
                </p>

                {/* Footer */}
                <div className="mt-5 flex items-center justify-between pt-4 border-t border-navy-100">
                  <span className="flex items-center gap-1.5 text-xs text-navy-400">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-techblue-500 hover:gap-2.5 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
