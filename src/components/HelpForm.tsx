import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, HelpCircle } from 'lucide-react';
import { categories } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function HelpForm() {
  const { ref, visible } = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    category: '',
    problem: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', category: '', problem: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const fieldClass =
    'w-full px-4 py-3 text-base text-navy-900 bg-white rounded-xl border border-navy-200 outline-none focus:ring-2 focus:ring-techblue-400 focus:border-techblue-400 transition-all placeholder:text-navy-300';

  return (
    <section id="contact" className="py-20 lg:py-28 bg-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'visible' : ''} bg-white rounded-3xl shadow-xl shadow-navy-950/8 border border-navy-100 overflow-hidden`}
        >
          <div className="grid lg:grid-cols-5">
            {/* Left panel */}
            <div className="lg:col-span-2 bg-navy-900 p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-highlight uppercase tracking-wider">
                  <HelpCircle className="w-4 h-4" />
                  Ask for Help
                </span>
                <h2 className="mt-3 text-2xl lg:text-3xl font-bold font-heading text-white tracking-tight">
                  Can't Find Your Solution?
                </h2>
                <p className="mt-4 text-navy-200 leading-relaxed">
                  Tell us about your technology problem and we'll help you
                  understand what might be causing it.
                </p>
              </div>

              <div className="mt-8 space-y-3 hidden lg:block">
                {['We respond within 24 hours', 'Completely free', 'No technical jargon'].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-2.5 text-navy-200 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-techblue-400 shrink-0" />
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 p-8 lg:p-10">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <span className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold font-heading text-navy-900">
                    Thank you!
                  </h3>
                  <p className="mt-2 text-navy-500">
                    Your request has been received. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-navy-700 mb-1.5"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-navy-700 mb-1.5"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@example.com"
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="category"
                      className="block text-sm font-semibold text-navy-700 mb-1.5"
                    >
                      Technology category
                    </label>
                    <select
                      id="category"
                      required
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e.target.value })}
                      className={fieldClass}
                    >
                      <option value="" disabled>
                        Select a category
                      </option>
                      {categories.map((c) => (
                        <option key={c.id} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="problem"
                      className="block text-sm font-semibold text-navy-700 mb-1.5"
                    >
                      Describe your problem
                    </label>
                    <textarea
                      id="problem"
                      required
                      rows={4}
                      value={form.problem}
                      onChange={(e) => setForm({ ...form, problem: e.target.value })}
                      placeholder="What's going wrong? Include any error messages or steps you've already tried."
                      className={`${fieldClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-techblue-500 text-white font-semibold rounded-xl hover:bg-techblue-400 transition-all duration-200 shadow-lg shadow-techblue-900/20 hover:-translate-y-0.5"
                  >
                    <Send className="w-5 h-5" />
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
