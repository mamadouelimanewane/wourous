"use client";

import { MOCK_USERS } from '@/lib/demo-data';
import { ShieldCheckIcon, EllipsisHorizontalIcon, DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function CustomersPage() {
    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-navy-900">Base Clients & KYC</h1>
                    <p className="text-gray-500">Validation des identités et gestion des portefeuilles.</p>
                </div>
                <button className="px-4 py-2 bg-gold-500 text-navy-900 rounded-lg hover:bg-gold-400 text-sm font-bold shadow-lg shadow-gold-500/20">
                    Ajouter un Client
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Summary Cards */}
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                        <DocumentMagnifyingGlassIcon className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">En attente de validation</p>
                        <p className="text-xl font-bold text-navy-900">12 Dossiers</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wider border-b border-gray-100">
                            <th className="p-4 font-semibold">Client</th>
                            <th className="p-4 font-semibold">Email</th>
                            <th className="p-4 font-semibold">Niveau KYC</th>
                            <th className="p-4 font-semibold">Solde (Cash)</th>
                            <th className="p-4 font-semibold">Date d'inscription</th>
                            <th className="p-4 font-semibold">Statut</th>
                            <th className="p-4 font-semibold text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {MOCK_USERS.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-navy-100 text-navy-700 flex items-center justify-center text-xs font-bold ring-2 ring-white shadow-sm">
                                            {user.avatar}
                                        </div>
                                        <span className="font-bold text-navy-900 text-sm">{user.name}</span>
                                    </div>
                                </td>
                                <td className="p-4 text-sm text-gray-500">{user.email}</td>
                                <td className="p-4">
                                    <div className="flex items-center gap-1">
                                        {[1, 2, 3].map((lvl) => (
                                            <div
                                                key={lvl}
                                                className={`h-2 w-6 rounded-sm ${lvl <= user.kycLevel ? 'bg-green-500' : 'bg-gray-200'}`}
                                                title={`Niveau ${lvl}`}
                                            />
                                        ))}
                                        <span className="text-xs text-gray-400 ml-2">Niv {user.kycLevel}</span>
                                    </div>
                                </td>
                                <td className="p-4 font-mono font-bold text-navy-900">
                                    {user.balance.toLocaleString()} XOF
                                </td>
                                <td className="p-4 text-xs text-gray-400">
                                    {new Date(user.joinDate).toLocaleDateString()}
                                </td>
                                <td className="p-4">
                                    {user.status === 'verified' && (
                                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded text-[10px] font-bold uppercase bg-green-100 text-green-700">
                                            <ShieldCheckIcon className="w-3 h-3" /> Vérifié
                                        </span>
                                    )}
                                    {user.status === 'pending' && (
                                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded text-[10px] font-bold uppercase bg-amber-100 text-amber-700">
                                            En Attente
                                        </span>
                                    )}
                                    {user.status === 'rejected' && (
                                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded text-[10px] font-bold uppercase bg-red-100 text-red-700">
                                            Rejeté
                                        </span>
                                    )}
                                </td>
                                <td className="p-4 text-right">
                                    <button className="text-gray-400 hover:text-navy-900">
                                        <EllipsisHorizontalIcon className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
