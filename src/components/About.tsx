import { Target, Eye, Users, Heart } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
          {/* Left — text */}
          <div>
            <span className="text-sm font-semibold text-techblue-500 uppercase tracking-wider">
              About Us
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-heading text-navy-900 tracking-tight">
              Making Technology Easier to Understand
            </h2>
            <p className="mt-5 text-lg text-navy-500 leading-relaxed">
              TechSolve was created to make technology easier to understand. Our
              goal is to provide simple explanations and practical solutions for
              students, beginners and everyday technology users.
            </p>
            <p className="mt-4 text-base text-navy-500 leading-relaxed">
              We believe everyone deserves clear, jargon-free guidance when
              technology doesn't work the way it should — whether it's a slow
              laptop, a phone running out of storage or a Wi-Fi connection that
              keeps dropping.
            </p>

            {/* Values */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: Target, title: 'Our Mission', text: 'Democratise technology knowledge for everyone.' },
                { icon: Eye, title: 'Our Vision', text: 'A world where no one is stuck with a tech problem.' },
                { icon: Users, title: 'Who We Help', text: 'Students, beginners and everyday users.' },
                { icon: Heart, title: 'Our Values', text: 'Clarity, patience and practical solutions.' },
              ].map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-techblue-50 text-techblue-600 shrink-0">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <div className="text-sm font-bold text-navy-900">{v.title}</div>
                      <div className="text-sm text-navy-500 leading-snug">{v.text}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — visual stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '120+', label: 'Solutions Published', color: 'techblue' },
              { value: '6', label: 'Tech Categories', color: 'cyan' },
              { value: '15K+', label: 'Users Helped', color: 'techblue' },
              { value: '100%', label: 'Free Forever', color: 'cyan' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`rounded-2xl p-7 text-center transition-all duration-300 hover:-translate-y-1 ${
                  stat.color === 'techblue'
                    ? 'bg-navy-900 text-white'
                    : 'bg-techblue-500 text-white'
                } ${i % 2 === 1 ? 'mt-8' : ''}`}
              >
                <div className="text-3xl lg:text-4xl font-extrabold font-heading">{stat.value}</div>
                <div className="mt-1.5 text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
