import { useState } from 'react';
import { Check, X, RotateCcw, Trophy } from 'lucide-react';

interface Question {
  prompt: string;
  options: string[];
  correct: number;
}

const questions: Question[] = [
  {
    prompt: 'What is the correct way to print Hello World?',
    options: [
      'echo("Hello World")',
      'print("Hello World")',
      'console.log("Hello World")',
      'display("Hello World")',
    ],
    correct: 1,
  },
  {
    prompt: 'Which of these is a valid Python variable name?',
    options: ['2name', 'my-var', 'my_var', 'class'],
    correct: 2,
  },
  {
    prompt: 'What does the len() function do?',
    options: [
      'Returns the last item',
      'Returns the number of items',
      'Loops through a list',
      'Sorts a list',
    ],
    correct: 1,
  },
  {
    prompt: 'Which keyword starts a loop that repeats a fixed number of times?',
    options: ['while', 'repeat', 'for', 'loop'],
    correct: 2,
  },
  {
    prompt: 'How do you define a function in Python?',
    options: [
      'function greet():',
      'def greet():',
      'func greet():',
      'define greet():',
    ],
    correct: 1,
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[current];

  const choose = (i: number) => {
    if (answered) return;
    setSelected(i);
    setAnswered(true);
    if (i === q.correct) setScore((s) => s + 1);
  };

  const next = () => {
    if (current + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setAnswered(false);
    }
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 max-w-2xl mx-auto text-center">
        <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-100 text-yellow-600 mb-4">
          <Trophy size={32} />
        </span>
        <h3 className="text-2xl font-bold text-slate-800">Quiz Complete!</h3>
        <p className="mt-2 text-slate-500">
          You scored{' '}
          <span className="font-bold text-blue-600">
            {score} / {questions.length}
          </span>{' '}
          ({pct}%)
        </p>
        <div className="mt-4 h-3 rounded-full bg-slate-100 overflow-hidden max-w-md mx-auto">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-yellow-400 rounded-full transition-all duration-700"
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="mt-4 text-sm text-slate-500">
          {pct === 100
            ? 'Perfect score! You are a Python star.'
            : pct >= 60
              ? 'Great job! Keep practicing.'
              : 'Keep learning — you will get there!'}
        </p>
        <button
          onClick={restart}
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/30 hover:bg-blue-700 active:scale-95 transition-all"
        >
          <RotateCcw size={18} />
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-blue-600">
          Question {current + 1} of {questions.length}
        </span>
        <span className="text-sm text-slate-400">Score: {score}</span>
      </div>

      <div className="h-2 rounded-full bg-slate-100 overflow-hidden mb-6">
        <div
          className="h-full bg-blue-600 rounded-full transition-all duration-300"
          style={{ width: `${((current + 1) / questions.length) * 100}%` }}
        />
      </div>

      <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-5">
        {q.prompt}
      </h3>

      <div className="space-y-3">
        {q.options.map((opt, i) => {
          const isCorrect = i === q.correct;
          const isPicked = i === selected;
          let cls =
            'border-slate-200 hover:border-blue-300 hover:bg-slate-50 text-slate-700';
          if (answered) {
            if (isCorrect)
              cls = 'border-green-500 bg-green-50 text-green-700';
            else if (isPicked)
              cls = 'border-red-500 bg-red-50 text-red-700';
            else cls = 'border-slate-200 text-slate-400';
          }
          return (
            <button
              key={i}
              onClick={() => choose(i)}
              disabled={answered}
              className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl border-2 text-left font-mono text-sm transition-all ${cls} ${!answered && 'cursor-pointer'}`}
            >
              <span>
                <span className="font-bold mr-2">
                  {String.fromCharCode(65 + i)}.
                </span>
                {opt}
              </span>
              {answered && isCorrect && <Check size={18} />}
              {answered && isPicked && !isCorrect && <X size={18} />}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="mt-5 flex items-center justify-between">
          <span
            className={`text-sm font-medium ${selected === q.correct ? 'text-green-600' : 'text-red-600'}`}
          >
            {selected === q.correct ? 'Correct!' : 'Not quite — see the green answer.'}
          </span>
          <button
            onClick={next}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 active:scale-95 transition-all"
          >
            {current + 1 >= questions.length ? 'See Score' : 'Next'}
          </button>
        </div>
      )}
    </div>
  );
}
