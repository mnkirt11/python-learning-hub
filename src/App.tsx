import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TopicCard from '@/components/TopicCard';
import CodeExample from '@/components/CodeExample';
import Calculator from '@/components/Calculator';
import Quiz from '@/components/Quiz';
import Footer from '@/components/Footer';
import {
  Sparkles,
  Zap,
  Brain,
  GraduationCap,
  Variable,
  Type,
  GitBranch,
  Repeat,
  List,
  BookOpen,
  FileCode,
  FolderGit2,
  Lightbulb,
  Calculator as CalcIcon,
  Hash,
  ListTodo,
  Wallet,
  Users,
  Rocket,
} from 'lucide-react';

const whyCards = [
  {
    icon: Sparkles,
    title: 'Easy to Learn',
    description:
      'Python reads almost like plain English, making it simple to read and write.',
  },
  {
    icon: Zap,
    title: 'Powerful & Versatile',
    description:
      'Build websites, automate tasks, analyze data and much more with one language.',
  },
  {
    icon: Brain,
    title: 'Used in AI & Data Science',
    description:
      'Python is the top choice for machine learning, AI and data analysis.',
  },
  {
    icon: GraduationCap,
    title: 'Great for Beginners',
    description:
      'No confusing syntax — perfect as your very first programming language.',
  },
];

const topics = [
  { icon: Variable, title: 'Variables', description: 'Store values with names you can reuse.' },
  { icon: Type, title: 'Data Types', description: 'Work with text, numbers and booleans.' },
  { icon: GitBranch, title: 'If-Else', description: 'Make decisions in your program.' },
  { icon: Repeat, title: 'Loops', description: 'Repeat actions without writing them again.' },
  { icon: List, title: 'Lists', description: 'Keep many items in a single ordered collection.' },
  { icon: BookOpen, title: 'Dictionaries', description: 'Store data as key-value pairs.' },
  { icon: FileCode, title: 'Functions', description: 'Group code into reusable blocks.' },
  { icon: FolderGit2, title: 'File Handling', description: 'Read from and write to files on disk.' },
];

const examples = [
  {
    title: 'example1_variables.py',
    code: `name = "Mankirat"\nage = 22\n\nprint(name)\nprint(age)`,
  },
  {
    title: 'example2_loop.py',
    code: `for i in range(5):\n    print("Hello Python")`,
  },
  {
    title: 'example3_function.py',
    code: `def greet(name):\n    return "Hello " + name\n\nprint(greet("Student"))`,
  },
];

const projects = [
  { icon: CalcIcon, title: 'Calculator', description: 'Build a basic calculator with add, subtract, multiply and divide.' },
  { icon: Hash, title: 'Number Guessing Game', description: 'Pick a random number and let the player guess it with hints.' },
  { icon: ListTodo, title: 'To-Do List', description: 'Add, complete and remove tasks saved in a list.' },
  { icon: Lightbulb, title: 'Quiz App', description: 'Ask questions, track the score and show results at the end.' },
  { icon: Wallet, title: 'Expense Tracker', description: 'Record income and spending to see your balance.' },
  { icon: Users, title: 'Student Management System', description: 'Store and search student records using dictionaries.' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      <Navbar />
      <main>
        <Hero />

        {/* Why Learn Python */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Why Learn Python?
              </h2>
              <p className="mt-3 text-slate-500">
                Python is one of the most popular and friendly programming
                languages in the world.
              </p>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyCards.map((c, i) => (
                <TopicCard
                  key={c.title}
                  icon={c.icon}
                  title={c.title}
                  description={c.description}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Topics */}
        <section id="topics" className="py-20 sm:py-24 bg-slate-50 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                Python Topics
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Start With The Basics
              </h2>
              <p className="mt-3 text-slate-500">
                Eight core concepts that form the foundation of every Python
                program.
              </p>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {topics.map((t, i) => (
                <TopicCard
                  key={t.title}
                  icon={t.icon}
                  title={t.title}
                  description={t.description}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Examples */}
        <section id="examples" className="py-20 sm:py-24 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium mb-4">
                Code Examples
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Python In Action
              </h2>
              <p className="mt-3 text-slate-500">
                Real, runnable snippets. Copy them and try for yourself.
              </p>
            </div>
            <div className="mt-12 grid lg:grid-cols-3 gap-6">
              {examples.map((e) => (
                <CodeExample key={e.title} title={e.title} code={e.code} />
              ))}
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-20 sm:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                Interactive
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Try a Python-Style Calculator
              </h2>
              <p className="mt-3 text-slate-500">
                Enter two numbers, pick an operation and see the result. This is
                a frontend simulation of a Python-style calculator.
              </p>
            </div>
            <div className="mt-12">
              <Calculator />
            </div>
          </div>
        </section>

        {/* Quiz */}
        <section id="quiz" className="py-20 sm:py-24 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium mb-4">
                Test Yourself
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Mini Python Quiz
              </h2>
              <p className="mt-3 text-slate-500">
                Five beginner questions. Pick an answer and get instant feedback.
              </p>
            </div>
            <div className="mt-12">
              <Quiz />
            </div>
          </div>
        </section>

        {/* Project Ideas */}
        <section className="py-20 sm:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                Practice
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Python Project Ideas
              </h2>
              <p className="mt-3 text-slate-500">
                Build these beginner projects to practice what you learn.
              </p>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p, i) => (
                <TopicCard
                  key={p.title}
                  icon={p.icon}
                  title={p.title}
                  description={p.description}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>

        {/* About / CTA */}
        <section id="about" className="py-20 sm:py-24 bg-white scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-10 sm:p-14 text-center overflow-hidden">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl" />
              <div className="relative">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-yellow-400 text-blue-900 mb-5">
                  <Rocket size={28} />
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Ready to Start Coding?
                </h2>
                <p className="mt-3 text-blue-100 text-lg max-w-xl mx-auto">
                  Your first Python program is only a few lines away.
                </p>
                <a
                  href="#topics"
                  className="mt-8 inline-flex items-center px-8 py-4 rounded-xl bg-yellow-400 text-slate-900 font-bold shadow-lg shadow-yellow-400/30 hover:scale-105 hover:bg-yellow-300 active:scale-95 transition-all"
                >
                  Start Learning Python
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
