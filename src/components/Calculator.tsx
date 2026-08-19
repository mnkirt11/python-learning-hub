import { useState } from 'react';
import { Plus, Minus, X, Divide, Calculator as CalcIcon } from 'lucide-react';

type Op = 'add' | 'sub' | 'mul' | 'div';

export default function Calculator() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [op, setOp] = useState<Op>('add');
  const [result, setResult] = useState<string | null>(null);

  const ops: { id: Op; label: string; icon: typeof Plus }[] = [
    { id: 'add', label: 'Addition', icon: Plus },
    { id: 'sub', label: 'Subtraction', icon: Minus },
    { id: 'mul', label: 'Multiplication', icon: X },
    { id: 'div', label: 'Division', icon: Divide },
  ];

  const compute = () => {
    const x = parseFloat(a);
    const y = parseFloat(b);
    if (Number.isNaN(x) || Number.isNaN(y)) {
      setResult('Please enter valid numbers');
      return;
    }
    let r: number;
    switch (op) {
      case 'add':
        r = x + y;
        break;
      case 'sub':
        r = x - y;
        break;
      case 'mul':
        r = x * y;
        break;
      case 'div':
        if (y === 0) {
          setResult('Cannot divide by zero');
          return;
        }
        r = x / y;
        break;
    }
    setResult(`${r}`);
  };

  const symbol = { add: '+', sub: '-', mul: '×', div: '÷' }[op];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8 max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
          <CalcIcon size={22} />
        </span>
        <div>
          <h3 className="font-bold text-lg text-slate-800">
            Python-Style Calculator
          </h3>
          <p className="text-xs text-slate-500">
            Frontend simulation of a Python-style calculator
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1.5">
            First number
          </label>
          <input
            type="number"
            value={a}
            onChange={(e) => setA(e.target.value)}
            placeholder="e.g. 10"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1.5">
            Second number
          </label>
          <input
            type="number"
            value={b}
            onChange={(e) => setB(e.target.value)}
            placeholder="e.g. 5"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
        {ops.map((o) => {
          const Icon = o.icon;
          const active = op === o.id;
          return (
            <button
              key={o.id}
              onClick={() => setOp(o.id)}
              className={`flex flex-col items-center gap-1 py-3 rounded-xl border-2 text-sm font-medium transition-all ${
                active
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-slate-200 text-slate-600 hover:border-blue-300 hover:bg-slate-50'
              }`}
            >
              <Icon size={18} />
              {o.label}
            </button>
          );
        })}
      </div>

      <button
        onClick={compute}
        className="mt-5 w-full py-3.5 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-xl active:scale-[0.98] transition-all"
      >
        Calculate
      </button>

      {result !== null && (
        <div className="mt-5 p-5 rounded-xl bg-slate-900 font-mono text-center">
          <div className="text-slate-400 text-xs mb-1">Result</div>
          <div className="text-2xl font-bold text-yellow-400">
            {a || '0'} {symbol} {b || '0'} = {result}
          </div>
        </div>
      )}
    </div>
  );
}
