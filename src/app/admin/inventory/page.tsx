"use client";

import { MOCK_INVENTORY } from '@/lib/demo-data';
import { ArchiveBoxIcon, ExclamationCircleIcon, PlusIcon } from '@heroicons/react/24/outline';

export default function InventoryPage() {
    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-navy-900">Coffre & Stocks</h1>
                    <p className="text-gray-500">Gestion de l'inventaire physique sécurisé.</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-navy-900 text-white rounded-lg hover:bg-navy-800 text-sm font-bold shadow-lg shadow-navy-900/20">
                    <PlusIcon className="w-4 h-4" />
                    Entrée de Stock
                </button>
            </div>

            {/* Visual Vault Representation (The "Check this out" feature) */}
            <div className="bg-navy-900 rounded-xl p-8 mb-8 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500 rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white/10 rounded-lg">
                        <ArchiveBoxIcon className="w-6 h-6 text-gold-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">État du Coffre Principal</h3>
                        <p className="text-gray-400 text-sm">Zone Sécurisée - Dakar Plateau</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {MOCK_INVENTORY.slice(0, 4).map((item) => {
                        const usagePercent = (item.reserved / item.stock) * 100;
                        return (
                            <div key={item.id} className="bg-white/5 border border-white/10 p-4 rounded-lg backdrop-blur-sm">
                                <p className="text-xs text-gray-400 mb-1">{item.name}</p>
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-2xl font-bold text-gold-400">{item.stock}</span>
                                    <span className="text-xs text-gray-400">unités</span>
                                </div>
                                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full ${usagePercent > 80 ? 'bg-red-500' : 'bg-green-500'}`}
                                        style={{ width: `${usagePercent}%` }}
                                    ></div>
                                </div>
                                <p className="text-[10px] text-gray-500 mt-1 text-right">{item.reserved} réservés</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Inventory Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wider border-b border-gray-100">
                            <th className="p-4 font-semibold">Référence SKU</th>
                            <th className="p-4 font-semibold">Produit</th>
                            <th className="p-4 font-semibold">Poids Unit.</th>
                            <th className="p-4 font-semibold">Stock Physique</th>
                            <th className="p-4 font-semibold">Réservé (Commandes)</th>
                            <th className="p-4 font-semibold">Disponible</th>
                            <th className="p-4 font-semibold">État</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {MOCK_INVENTORY.map((item) => {
                            const available = item.stock - item.reserved;
                            const isLow = available < item.minStock;

                            return (
                                <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-4 text-xs font-mono text-gray-500">{item.sku}</td>
                                    <td className="p-4 font-bold text-navy-900 text-sm">{item.name}</td>
                                    <td className="p-4 text-sm text-gray-600">{item.weight}g</td>
                                    <td className="p-4 font-mono font-bold">{item.stock}</td>
                                    <td className="p-4 font-mono text-gray-500">{item.reserved}</td>
                                    <td className="p-4 font-mono font-bold text-green-700">{available}</td>
                                    <td className="p-4">
                                        {isLow ? (
                                            <span className="flex items-center gap-1 text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded w-fit">
                                                <ExclamationCircleIcon className="w-3 h-3" /> Stock Bas
                                            </span>
                                        ) : (
                                            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">OK</span>
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
