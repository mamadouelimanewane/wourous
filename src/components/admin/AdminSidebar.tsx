"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    HomeIcon,
    UsersIcon,
    BanknotesIcon,
    CubeIcon,
    Cog6ToothIcon,
    ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline';

export default function AdminSidebar() {
    const pathname = usePathname();

    const navigation = [
        { name: 'Tableau de Bord', href: '/admin', icon: HomeIcon },
        { name: 'Transactions', href: '/admin/transactions', icon: BanknotesIcon },
        { name: 'Clients & KYC', href: '/admin/customers', icon: UsersIcon },
        { name: 'Coffre & Stocks', href: '/admin/inventory', icon: CubeIcon },
    ];

    return (
        <div className="flex flex-col w-64 bg-navy-900 border-r border-navy-800 text-white min-h-screen">
            <div className="p-6 border-b border-navy-800">
                <Link href="/" className="text-2xl font-serif font-bold tracking-wide text-white block">
                    WOU<span className="text-gold-500">ROUS</span>
                    <span className="text-xs bg-gold-600 text-navy-900 px-2 py-0.5 rounded ml-2 font-sans font-bold">ADMIN</span>
                </Link>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-2">
                {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all ${isActive
                                    ? 'bg-gold-500 text-navy-900 font-bold shadow-lg shadow-gold-500/20'
                                    : 'text-gray-300 hover:bg-navy-800 hover:text-white'
                                }`}
                        >
                            <item.icon className={`w-5 h-5 mr-3 ${isActive ? 'text-navy-900' : 'text-gray-400'}`} />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-navy-800 space-y-2">
                <Link
                    href="/admin/settings"
                    className="flex items-center px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                    <Cog6ToothIcon className="w-5 h-5 mr-3" />
                    Paramètres
                </Link>
                <button className="flex items-center w-full px-4 py-2 text-sm text-red-400 hover:text-red-300 transition-colors">
                    <ArrowLeftOnRectangleIcon className="w-5 h-5 mr-3" />
                    Déconnexion
                </button>
            </div>

            <div className="p-4 text-xs text-gray-600 text-center">
                Wourous v1.0.0
            </div>
        </div>
    );
}
