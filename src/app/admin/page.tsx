"use client";

import {
    ArrowTrendingUpIcon,
    ArrowTrendingDownIcon,
    CurrencyDollarIcon,
    UsersIcon,
    ScaleIcon,
    ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import { MOCK_STATS, MOCK_TRANSACTIONS } from '@/lib/demo-data';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mini Component for Stat Cards
function StatCard({ title, value, trend, trendValue, icon: Icon, color }: any) {
    const isPositive = trend === 'up';
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-lg ${color}`}>
                    <Icon className="w-6 h-6 text-white" />
                </div>
                {trend && (
                    <span className={`text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 ${isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {isPositive ? <ArrowTrendingUpIcon className="w-3 h-3" /> : <ArrowTrendingDownIcon className="w-3 h-3" />}
                        {trendValue}%
                    </span>
                )}
            </div>
            <p className="text-gray-500 text-sm mb-1">{title}</p>
            <h3 className="text-2xl font-bold text-navy-900">{value}</h3>
        </div>
    );
}

export default function AdminDashboard() {
    // Mock Chart Data
    const chartData = [
        { name: 'Lun', sales: 4000, buy: 2400 },
        { name: 'Mar', sales: 3000, buy: 1398 },
        { name: 'Mer', sales: 2000, buy: 9800 },
        { name: 'Jeu', sales: 2780, buy: 3908 },
        { name: 'Ven', sales: 1890, buy: 4800 },
        { name: 'Sam', sales: 2390, buy: 3800 },
        { name: 'Dim', sales: 3490, buy: 4300 },
    ];

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div>
                <h1 className="text-2xl font-bold text-navy-900">Vue d'ensemble</h1>
                <p className="text-gray-500">Bienvenue sur le panneau de contrôle central Wourous.</p>
            </div>

            {/* Critical Alerts Banner (Innovation: Safety First) */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
                <ExclamationTriangleIcon className="w-5 h-5 text-amber-600 mt-0.5" />
                <div>
                    <h4 className="font-bold text-amber-800 text-sm">Action Requise</h4>
                    <p className="text-xs text-amber-700 mt-1">3 nouveaux clients en attente de validation KYC (Niveau 2). <span className="underline cursor-pointer font-bold">Voir les dossiers</span></p>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Volume de Transactions"
                    value={`${(MOCK_STATS.revenue / 1000000).toFixed(2)}M XOF`}
                    trend="up"
                    trendValue={MOCK_STATS.revenueGrowth}
                    icon={CurrencyDollarIcon}
                    color="bg-navy-900"
                />
                <StatCard
                    title="Clients Actifs"
                    value={MOCK_STATS.totalUsers}
                    trend="up"
                    trendValue={MOCK_STATS.userGrowth}
                    icon={UsersIcon}
                    color="bg-gold-500"
                />
                <StatCard
                    title="Or en Stock (Physique)"
                    value={`${MOCK_STATS.goldStockKg} kg`}
                    trend="down"
                    trendValue="1.2"
                    icon={ScaleIcon}
                    color="bg-blue-600"
                />
                {/* Innovation: Live Spread Display */}
                <div className="bg-gradient-to-br from-navy-900 to-navy-800 p-6 rounded-xl shadow-lg border border-navy-700 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-3 opacity-10">
                        <ScaleIcon className="w-24 h-24 text-white" />
                    </div>
                    <p className="text-gold-400 text-sm mb-2 font-bold uppercase tracking-wider">Spread Actuel</p>
                    <div className="flex items-end gap-2 mb-4">
                        <h3 className="text-4xl font-mono font-bold">2.5%</h3>
                        <span className="text-gray-400 text-sm mb-1">sur Spot</span>
                    </div>
                    <div className="w-full bg-navy-700 h-1.5 rounded-full mb-2">
                        <div className="w-[40%] bg-gold-500 h-1.5 rounded-full"></div>
                    </div>
                    <p className="text-xs text-gray-400">Dernière maj: Il y a 5 min</p>
                </div>
            </div>

            {/* Charts & Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Graphic */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-navy-900 mb-6">Flux des Capitaux (7 jours)</h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData}>
                                <defs>
                                    <linearGradient id="colosSales" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#D4AF37" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorBuy" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#002147" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#002147" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Area type="monotone" dataKey="sales" stroke="#D4AF37" fillOpacity={1} fill="url(#colosSales)" name="Ventes (Or)" />
                                <Area type="monotone" dataKey="buy" stroke="#002147" fillOpacity={1} fill="url(#colorBuy)" name="Achats (Cash)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recent Transactions List */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-navy-900 mb-6">Dernières Transactions</h3>
                    <div className="space-y-4">
                        {MOCK_TRANSACTIONS.slice(0, 4).map(trx => (
                            <div key={trx.id} className="flex items-center justify-between pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                                <div className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${trx.type === 'buy' ? 'bg-green-100 text-green-700' : 'bg-gold-100 text-gold-700'}`}>
                                        {trx.type === 'buy' ? 'IN' : 'OUT'}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-navy-900">{trx.user}</p>
                                        <p className="text-xs text-gray-500">{trx.asset}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className={`text-sm font-bold ${trx.type === 'buy' ? 'text-navy-900' : 'text-gold-600'}`}>
                                        {trx.type === 'buy' ? '+' : '-'}{(trx.amount / 1000).toFixed(0)}k
                                    </p>
                                    <p className="text-[10px] text-gray-400">XOF</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-6 py-2 text-sm text-navy-900 font-bold bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                        Voir tout l'historique
                    </button>
                </div>
            </div>
        </div>
    );
}
