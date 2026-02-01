"use client";

import { MOCK_TRANSACTIONS } from '@/lib/demo-data';
import { CheckCircleIcon, XCircleIcon, ClockIcon, FunnelIcon } from '@heroicons/react/24/outline';

const statusColors = {
    completed: 'bg-green-100 text-green-700',
    processing: 'bg-amber-100 text-amber-700',
    cancelled: 'bg-red-100 text-red-700',
};

const statusLabelsA = {
    completed: 'Complété',
    processing: 'En cours',
    cancelled: 'Annulé',
};

// Explicitly define the status keys
type TransactionStatus = 'completed' | 'processing' | 'cancelled';

export default function TransactionsPage() {
    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-navy-900">Historique des Transactions</h1>
                    <p className="text-gray-500">Gérez et validez les flux financiers et mouvements d'or.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 text-sm font-medium">
                        <FunnelIcon className="w-4 h-4" />
                        Filtrer
                    </button>
                    <button className="px-4 py-2 bg-navy-900 text-white rounded-lg hover:bg-navy-800 text-sm font-bold shadow-lg shadow-navy-900/20">
                        Exporter CSV
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wider border-b border-gray-100">
                            <th className="p-4 font-semibold">ID Transaction</th>
                            <th className="p-4 font-semibold">Client</th>
                            <th className="p-4 font-semibold">Type & Actif</th>
                            <th className="p-4 font-semibold">Montant</th>
                            <th className="p-4 font-semibold">Méthode</th>
                            <th className="p-4 font-semibold">Date</th>
                            <th className="p-4 font-semibold">Statut</th>
                            <th className="p-4 font-semibold text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {MOCK_TRANSACTIONS.map((trx) => (
                            <tr key={trx.id} className="hover:bg-gray-50/50 transition-colors group">
                                <td className="p-4 font-mono text-xs text-gray-500 font-bold">{trx.id}</td>
                                <td className="p-4">
                                    <div className="font-bold text-navy-900 text-sm">{trx.user}</div>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center gap-2">
                                        <span className={`w-1.5 h-1.5 rounded-full ${trx.type === 'buy' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                        <span className="text-sm text-gray-700 capitalize">
                                            {trx.type === 'buy' ? 'Achat' : 'Vente'} • {trx.asset}
                                        </span>
                                    </div>
                                </td>
                                <td className="p-4 font-mono font-bold text-navy-900">
                                    {trx.amount.toLocaleString()} XOF
                                </td>
                                <td className="p-4 text-xs text-gray-500">
                                    {trx.paymentMethod}
                                </td>
                                <td className="p-4 text-xs text-gray-400">
                                    {new Date(trx.date).toLocaleDateString()}
                                </td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide ${statusColors[trx.status as TransactionStatus]}`}>
                                        {statusLabelsA[trx.status as TransactionStatus]}
                                    </span>
                                </td>
                                <td className="p-4 text-right">
                                    {trx.status === 'processing' ? (
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-1 hover:bg-green-100 text-green-600 rounded" title="Valider">
                                                <CheckCircleIcon className="w-5 h-5" />
                                            </button>
                                            <button className="p-1 hover:bg-red-100 text-red-600 rounded" title="Rejeter">
                                                <XCircleIcon className="w-5 h-5" />
                                            </button>
                                        </div>
                                    ) : (
                                        <button className="text-gray-400 hover:text-navy-900 text-sm font-medium">Détails</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
