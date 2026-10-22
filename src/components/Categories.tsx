import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function Categories() {
  const { ref, visible } = useReveal();

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} max-w-2xl`}>
          <span className="text-sm font-semibold text-techblue-500 uppercase tracking-wider">
            Categories
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-heading text-navy-900 tracking-tight">
            What Can We Help You With?
          </h2>
          <p className="mt-4 text-lg text-navy-500">
            Browse six core technology areas and find practical solutions for the
            problems you run into every day.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            const accent =
              cat.color === 'techblue'
                ? 'bg-techblue-500 text-white'
                : 'bg-cyan-highlight text-navy-900';
            return (
              <article
                key={cat.id}
                className="group relative bg-white rounded-2xl border border-navy-100 p-7 hover:border-techblue-200 hover:shadow-xl hover:shadow-navy-950/8 transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span
                  className={`flex items-center justify-center w-14 h-14 rounded-xl ${accent} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="w-7 h-7" strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-xl font-bold font-heading text-navy-900">
                  {cat.title}
                </h3>
                <p className="mt-2.5 text-sm text-navy-500 leading-relaxed">
                  {cat.description}
                </p>
                <a
                  href="#articles"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-techblue-500 hover:gap-2.5 transition-all"
                >
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
