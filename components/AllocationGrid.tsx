import { Wallet, TrendingUp, FileText, Shield } from 'lucide-react';
import AllocationCard from './AllocationCard';

interface Allocation {
    icon: any;
    title: string;
    description: string;
    percentage: number;
}

export default function AllocationGrid() {
    const allocations: Allocation[] = [
        {
            icon: Wallet,
            title: 'Daily Spending',
            description: 'Money available for immediate family needs',
            percentage: 50
        },
        {
            icon: TrendingUp,
            title: 'Savings',
            description: 'Automatic savings for future goals',
            percentage: 30
        },
        {
            icon: FileText,
            title: 'Bills',
            description: 'Scheduled payments and utilities',
            percentage: 15
        },
        {
            icon: Shield,
            title: 'Insurance',
            description: 'Protection and emergency coverage',
            percentage: 5
        }
    ];

    // Validate that percentages total 100%
    const total = allocations.reduce((sum, item) => sum + item.percentage, 0);
    if (total !== 100) {
        console.warn(`Allocation percentages total ${total}%, expected 100%`);
    }

    return (
        <div className="w-full">
            {/* Grid: 2x2 on desktop, 2x1 on tablet, stacked on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {allocations.map((allocation, index) => (
                    <AllocationCard
                        key={index}
                        icon={allocation.icon}
                        title={allocation.title}
                        description={allocation.description}
                        percentage={allocation.percentage}
                    />
                ))}
            </div>
        </div>
    );
}
