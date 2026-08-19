import { Code2 } from 'lucide-react';

const quickLinks = [
  { label: 'Learn Python', href: '#topics' },
  { label: 'Examples', href: '#examples' },
  { label: 'Quiz', href: '#quiz' },
  { label: 'About', href: '#about' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-blue-600 text-yellow-400">
                <Code2 size={20} strokeWidth={2.5} />
              </span>
              <span className="font-bold text-lg text-white">
                Python Learning Hub
              </span>
            </a>
            <p className="mt-4 text-sm text-slate-400 max-w-sm leading-relaxed">
              A simple, beginner-friendly place to learn Python programming
              with examples, exercises and quizzes.
            </p>
          </div>

          <div className="sm:text-right">
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-yellow-400 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 text-center text-sm text-slate-500">
          Made for Python Beginners
        </div>
      </div>
    </footer>
  );
}
