import { LucideIcon } from 'lucide-react';

interface AllocationCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  percentage: number;
  color?: string;
}

export default function AllocationCard({
  icon: Icon,
  title,
  description,
  percentage,
  color = '#DC2626'
}: AllocationCardProps) {
  return (
    <div className="bg-[#0f0f0f] rounded-2xl p-6 border border-[#FFFFFF14] hover:border-white/30 transition-all duration-300 shadow-lg">
      {/* Icon Square */}
      <div 
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
        style={{ backgroundColor: color }}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>

      {/* Title */}
      <h3 className="text-white text-xl font-bold mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
        {description}
      </p>

      {/* Large Percentage */}
      <div className="text-white text-5xl font-bold mb-6">
        {percentage}%
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="w-full bg-[#1F1F1F] rounded-full h-2.5 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-1000 ease-out"
            style={{ 
              width: `${percentage}%`,
              backgroundColor: color,
              boxShadow: `0 0 10px ${color}40`
            }}
          />
        </div>
        
        {/* Progress Labels */}
        <div className="flex justify-between text-xs text-gray-500 font-medium">
          <span>0%</span>
          <span>100%</span>
        </div>
      </div>
    </div>
  );
}
