import { Play, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-yellow-50/40"
    >
      {/* decorative blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-200/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Beginner-friendly Python lessons
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            Learn Python.{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Build Anything.
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Start your Python journey with simple examples, interactive
            exercises and beginner-friendly lessons.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#topics"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/40 hover:scale-105 active:scale-95 transition-all"
            >
              Start Learning
            </a>
            <a
              href="#examples"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-blue-600 font-semibold border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all"
            >
              <Terminal size={18} />
              Try Python
            </a>
          </div>

          <div className="mt-10 flex items-center gap-8 justify-center lg:justify-start text-slate-500">
            <div>
              <div className="text-2xl font-bold text-slate-900">8+</div>
              <div className="text-sm">Core Topics</div>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div>
              <div className="text-2xl font-bold text-slate-900">5</div>
              <div className="text-sm">Quiz Questions</div>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div>
              <div className="text-2xl font-bold text-slate-900">6</div>
              <div className="text-sm">Project Ideas</div>
            </div>
          </div>
        </div>

        {/* code window */}
        <div className="relative mx-auto w-full max-w-lg lg:mx-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-yellow-400 rounded-2xl blur-2xl opacity-20" />
          <div className="relative bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-slate-400 text-sm font-mono">
                hello.py
              </span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed">
              <div className="text-slate-500">
                <span className="text-pink-400">name</span>{' '}
                <span className="text-slate-400">=</span>{' '}
                <span className="text-yellow-400">&quot;Student&quot;</span>
              </div>
              <div className="mt-2 text-slate-500">
                <span className="text-blue-400">print</span>
                <span className="text-slate-400">(</span>
                <span className="text-yellow-400">&quot;Hello&quot;</span>
                <span className="text-slate-400">,</span>{' '}
                <span className="text-pink-400">name</span>
                <span className="text-slate-400">)</span>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-700 text-slate-400">
                <span className="text-slate-600">$</span> python hello.py
              </div>
              <div className="mt-1 text-green-400">Hello Student</div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-lg border border-slate-100">
            <Play size={16} className="text-blue-600 fill-blue-600" />
            <span className="text-sm font-medium text-slate-700">
              Run &amp; see output
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
