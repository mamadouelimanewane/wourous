import Link from 'next/link';
import { ShieldCheckIcon, ChartBarIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'; // Need to install heroicons

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full">
            {/* Top Bar - Ticker & Contacts */}
            <div className="bg-navy-900 text-gold-100 text-xs py-2 border-b border-navy-800">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex space-x-4">
                        <span className="flex items-center gap-1"><ChartBarIcon className="w-3 h-3" /> Gold Spot: 45,250 XOF/g</span>
                        <span className="text-green-400 font-bold">+0.4%</span>
                    </div>
                    <div className="flex space-x-4 hidden md:flex">
                        <span className="flex items-center gap-1"><PhoneIcon className="w-3 h-3" /> +221 77 000 00 00</span>
                        <span className="flex items-center gap-1"><MapPinIcon className="w-3 h-3" /> Dakar, Senegal</span>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="bg-navy-900/95 backdrop-blur-sm border-b border-gold-600/20 shadow-lg">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-serif font-bold tracking-wide text-white">
                        WOU<span className="text-gold-500">ROUS</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-200">
                        <Link href="/buy" className="hover:text-gold-400 transition-colors">Acheter de l'Or</Link>
                        <Link href="/sell" className="hover:text-gold-400 transition-colors">Vendre de l'Or</Link>
                        <Link href="/charts" className="hover:text-gold-400 transition-colors">Cours de l'Or</Link>
                        <Link href="/locations" className="hover:text-gold-400 transition-colors">Nos Agences</Link>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-4">
                        <Link href="/login" className="hidden md:block text-sm font-medium text-white hover:text-gold-400">
                            Connexion
                        </Link>
                        <Link
                            href="/register"
                            className="px-5 py-2.5 text-sm font-bold text-navy-900 bg-gold-500 hover:bg-gold-400 rounded-full shadow-lg shadow-gold-500/20 transition-all transform hover:scale-105"
                        >
                            Ouvrir un Compte
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
