"use client";

import { useState, useEffect } from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

// Mock Data Generators
const generateData = (days: number, startPrice: number) => {
    const data = [];
    let currentPrice = startPrice;
    const now = new Date();

    for (let i = days; i >= 0; i--) {
        const date = new Date(now);
        date.setDate(date.getDate() - i);

        // Random walk
        const change = (Math.random() - 0.45) * (startPrice * 0.02); // Slight upward bias
        currentPrice += change;

        data.push({
            date: date.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' }),
            price: Math.round(currentPrice),
        });
    }
    return data;
};

const dataRanges = {
    '24H': generateData(1, 45200), // Hourly logic simplified to points
    '1S': generateData(7, 44800),
    '1M': generateData(30, 43500),
    '6M': generateData(180, 41000),
    '1A': generateData(365, 38000),
    '5A': generateData(365 * 5, 28000),
};

export default function GoldPriceChart() {
    const [activeRange, setActiveRange] = useState<'1S' | '1M' | '6M' | '1A' | '5A'>('1M');
    const [data, setData] = useState(dataRanges['1M']);

    // Simulate client-side hydration fix and data change
    useEffect(() => {
        setData(dataRanges[activeRange]);
    }, [activeRange]);

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-gray-100 pb-4">
                <div>
                    <h3 className="text-xl font-bold text-navy-900 flex items-center gap-2">
                        Cours de l'Or (XAU/XOF)
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">+1.2%</span>
                    </h3>
                    <p className="text-sm text-gray-500">Mise à jour: Temps Réel</p>
                </div>

                <div className="flex bg-gray-100 rounded-lg p-1 mt-4 md:mt-0">
                    {(Object.keys(dataRanges) as Array<keyof typeof dataRanges>).filter(k => k !== '24H').map((range) => (
                        <button
                            key={range}
                            onClick={() => setActiveRange(range)}
                            className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-all ${activeRange === range
                                ? 'bg-white text-navy-900 shadow-sm'
                                : 'text-gray-500 hover:text-navy-700'
                                }`}
                        >
                            {range}
                        </button>
                    ))}
                </div>
            </div>

            <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 20,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <defs>
                            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#D4AF37" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis
                            dataKey="date"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9ca3af', fontSize: 12 }}
                            minTickGap={30}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9ca3af', fontSize: 12 }}
                            domain={['auto', 'auto']}
                            tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                        />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#002147', color: '#fff', borderRadius: '8px', border: 'none' }}
                            itemStyle={{ color: '#D4AF37' }}
                            formatter={(value: any) => [`${value?.toLocaleString()} XOF`, 'Prix']}
                        />
                        <Area
                            type="monotone"
                            dataKey="price"
                            stroke="#D4AF37"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorPrice)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
