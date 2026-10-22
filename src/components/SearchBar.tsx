import { useState, useMemo } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { articles } from '@/data/content';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return articles
      .filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q)
      )
      .slice(0, 4);
  }, [query]);

  return (
    <section className="relative -mt-10 z-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl shadow-navy-950/10 p-2 border border-navy-100">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for a technology problem..."
              className="w-full pl-12 pr-12 py-4 text-base text-navy-900 bg-light rounded-xl border-0 outline-none placeholder:text-navy-300 focus:ring-2 focus:ring-techblue-400 transition-all"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-navy-400 hover:text-navy-700 transition-colors"
                aria-label="Clear search"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Results dropdown */}
          {query && (
            <div className="mt-2 rounded-xl overflow-hidden">
              {results.length > 0 ? (
                <ul className="divide-y divide-navy-100">
                  {results.map((a) => (
                    <li key={a.id}>
                      <a
                        href="#solutions"
                        className="flex items-center justify-between gap-4 p-3.5 hover:bg-light transition-colors group"
                      >
                        <div className="min-w-0">
                          <div className="text-xs font-medium text-techblue-500 uppercase tracking-wide">
                            {a.category}
                          </div>
                          <div className="text-sm font-semibold text-navy-900 truncate">
                            {a.title}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-navy-300 group-hover:text-techblue-500 group-hover:translate-x-1 transition-all shrink-0" />
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="p-4 text-sm text-navy-400 text-center">
                  No results for "<span className="font-semibold text-navy-600">{query}</span>". Try
                  asking in the help form below.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
