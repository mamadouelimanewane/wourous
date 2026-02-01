import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-navy-900 text-white pt-16 pb-8 border-t border-gold-600/30">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-serif font-bold tracking-wide text-white mb-6 block">
                            WOU<span className="text-gold-500">ROUS</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Le leader du négoce d'or en Afrique de l'Ouest. Expertise, transparence et sécurité pour vos investissements précieux.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-gold-500 font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li><Link href="/buy" className="hover:text-gold-400 transition-colors">Achat d'Or</Link></li>
                            <li><Link href="/sell" className="hover:text-gold-400 transition-colors">Vente d'Or</Link></li>
                            <li><Link href="/storage" className="hover:text-gold-400 transition-colors">Stockage Sécurisé</Link></li>
                            <li><Link href="/expert" className="hover:text-gold-400 transition-colors">Expertise & Conseil</Link></li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h4 className="text-gold-500 font-bold mb-6 uppercase tracking-wider text-sm">Informations</h4>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li><Link href="/about" className="hover:text-gold-400 transition-colors">Qui sommes-nous ?</Link></li>
                            <li><Link href="/compliance" className="hover:text-gold-400 transition-colors">Conformité & Légalité</Link></li>
                            <li><Link href="/faq" className="hover:text-gold-400 transition-colors">FAQ</Link></li>
                            <li><Link href="/contact" className="hover:text-gold-400 transition-colors">Nous contacter</Link></li>
                        </ul>
                    </div>

                    {/* Contact & Local */}
                    <div>
                        <h4 className="text-gold-500 font-bold mb-6 uppercase tracking-wider text-sm">Siège Social</h4>
                        <p className="text-sm text-gray-300 mb-2">Immeuble Wourous, Plateau</p>
                        <p className="text-sm text-gray-300 mb-6">Dakar, Sénégal</p>
                        <div className="flex space-x-4">
                            {/* Payment methods icons placeholders */}
                            <div className="h-8 w-12 bg-white/10 rounded flex items-center justify-center text-[10px] text-gray-400">Orange</div>
                            <div className="h-8 w-12 bg-white/10 rounded flex items-center justify-center text-[10px] text-gray-400">Wave</div>
                            <div className="h-8 w-12 bg-white/10 rounded flex items-center justify-center text-[10px] text-gray-400">Visa</div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:row justify-between items-center text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} Wourous Gold Trading. Tous droits réservés.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/terms" className="hover:text-gray-300">Conditions Générales</Link>
                        <Link href="/privacy" className="hover:text-gray-300">Confidentialité</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
