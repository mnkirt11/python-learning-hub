import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeExampleProps {
  title: string;
  code: string;
}

export default function CodeExample({ title, code }: CodeExampleProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard may be unavailable; ignore
    }
  };

  return (
    <div className="group bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-800 hover:shadow-2xl hover:border-slate-700 transition-all">
      <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700">
        <span className="font-mono text-sm text-slate-300">{title}</span>
        <button
          onClick={copy}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-700 text-slate-200 hover:bg-blue-600 hover:text-white transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check size={14} /> Copied
            </>
          ) : (
            <>
              <Copy size={14} /> Copy Code
            </>
          )}
        </button>
      </div>
      <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed">
        <code className="text-slate-200">{code}</code>
      </pre>
    </div>
  );
}
