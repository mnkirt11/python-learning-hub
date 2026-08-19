import type { LucideIcon } from 'lucide-react';

interface TopicCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function TopicCard({
  icon: Icon,
  title,
  description,
  index,
}: TopicCardProps) {
  return (
    <div
      className="group relative bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
        <Icon size={24} strokeWidth={2} />
      </div>
      <h3 className="mt-4 font-bold text-lg text-slate-800 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-sm text-slate-500 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
