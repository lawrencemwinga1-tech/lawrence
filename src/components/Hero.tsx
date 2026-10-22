import { ArrowRight, BookOpen, Cpu, ShieldCheck, Wrench, Zap, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy-900 pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-techblue-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-40 -left-24 w-80 h-80 bg-cyan-highlight/10 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — text */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-techblue-500/15 border border-techblue-400/30 text-techblue-300 text-sm font-medium">
              <Zap className="w-4 h-4" />
              Technology help for everyone
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] font-extrabold font-heading text-white tracking-tight">
              Technology Problems?
              <br />
              <span className="text-techblue-400">Let's Solve Them.</span>
            </h1>

            <p className="mt-6 text-lg text-navy-200 leading-relaxed max-w-xl">
              Simple explanations, practical solutions and useful technology tips
              for everyone.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#solutions"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-techblue-500 text-white font-semibold rounded-xl hover:bg-techblue-400 transition-all duration-200 shadow-lg shadow-techblue-900/40 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-techblue-600/40"
              >
                Explore Solutions
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#ai-ml"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/15 transition-all duration-200 hover:-translate-y-0.5"
              >
                <BookOpen className="w-5 h-5" />
                Learn About Tech
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-8">
              {[
                { value: '120+', label: 'Solutions' },
                { value: '6', label: 'Categories' },
                { value: '100%', label: 'Free' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-white font-heading">{s.value}</div>
                  <div className="text-sm text-navy-300 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — illustration */}
          <div className="hidden lg:flex justify-center items-center animate-fade-in">
            <div className="relative w-full max-w-md">
              {/* Main card */}
              <div className="relative bg-navy-800/80 backdrop-blur rounded-2xl border border-white/10 p-8 shadow-2xl animate-float">
                {/* Terminal header */}
                <div className="flex items-center gap-2 pb-4 border-b border-white/10">
                  <span className="w-3 h-3 rounded-full bg-red-400/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <span className="w-3 h-3 rounded-full bg-green-400/80" />
                  <span className="ml-2 text-xs font-mono text-navy-300">techsolve — diagnostics</span>
                </div>

                {/* Terminal body */}
                <div className="pt-4 space-y-3 font-mono text-sm">
                  <div className="flex items-center gap-2 text-green-400">
                    <Terminal className="w-4 h-4" />
                    <span>Analyzing system...</span>
                  </div>
                  <div className="text-navy-200 pl-6">CPU usage: <span className="text-cyan-highlight">Normal</span></div>
                  <div className="text-navy-200 pl-6">Memory: <span className="text-cyan-highlight">Optimized</span></div>
                  <div className="text-navy-200 pl-6">Network: <span className="text-techblue-400">Connected</span></div>
                  <div className="text-navy-200 pl-6">Security: <span className="text-green-400">Protected</span></div>
                  <div className="flex items-center gap-2 text-green-400 pt-2">
                    <span className="animate-pulse">█</span>
                    <span>Ready.</span>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-xl p-3 flex items-center gap-2.5 animate-bounce-subtle">
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-techblue-100">
                  <Wrench className="w-5 h-5 text-techblue-600" />
                </span>
                <div>
                  <div className="text-xs font-semibold text-navy-900">Fix applied</div>
                  <div className="text-[11px] text-navy-400">2 min ago</div>
                </div>
              </div>

              <div
                className="absolute -bottom-6 -right-4 bg-white rounded-xl shadow-xl p-3 flex items-center gap-2.5 animate-bounce-subtle"
                style={{ animationDelay: '0.7s' }}
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-green-100">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                </span>
                <div>
                  <div className="text-xs font-semibold text-navy-900">Secure</div>
                  <div className="text-[11px] text-navy-400">All checks passed</div>
                </div>
              </div>

              {/* Decorative ring */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-techblue-400/10 animate-spin-slow" />
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full border border-cyan-highlight/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
