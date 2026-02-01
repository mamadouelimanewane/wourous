import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LockClosedIcon, ShieldCheckIcon, DocumentTextIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

export default function StoragePage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />

            <main className="flex-grow">
                {/* Hero */}
                <div className="bg-navy-900 text-white py-16 relative overflow-hidden">
                    {/* Abstract vault background feeling */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-navy-800 to-navy-900"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">Stockage Sécurisé en Coffre-Fort</h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                            Ne prenez aucun risque. Confiez la garde de vos métaux précieux au leader de la sécurité en Afrique de l'Ouest.
                        </p>
                        <div className="flex justify-center gap-4">
                            <button className="px-8 py-3 bg-gold-500 text-navy-900 font-bold rounded-full hover:bg-gold-400 shadow-lg shadow-gold-500/30 transition-all">
                                Ouvrir un Compte Stockage
                            </button>
                            <button className="px-8 py-3 bg-transparent border border-white text-white font-bold rounded-full hover:bg-white hover:text-navy-900 transition-all">
                                Tarifs
                            </button>
                        </div>
                    </div>
                </div>

                {/* Benefits Grid */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-gold-500">
                                <LockClosedIcon className="w-12 h-12 text-navy-900 mb-4" />
                                <h3 className="text-lg font-bold text-navy-900 mb-2">Sécurité Maximale</h3>
                                <p className="text-gray-600 text-sm">Vos biens sont stockés dans des coffres haute sécurité, surveillés 24h/24 et 7j/7 par des professionnels armés.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-gold-500">
                                <ShieldCheckIcon className="w-12 h-12 text-navy-900 mb-4" />
                                <h3 className="text-lg font-bold text-navy-900 mb-2">100% Assuré</h3>
                                <p className="text-gray-600 text-sm">Votre or est entièrement couvert par notre assurance risques spéciaux (Lloyd's of London) contre le vol et les dommages.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-gold-500">
                                <DocumentTextIcon className="w-12 h-12 text-navy-900 mb-4" />
                                <h3 className="text-lg font-bold text-navy-900 mb-2">Titre de Propriété</h3>
                                <p className="text-gray-600 text-sm">Vous restez l'unique propriétaire légal de votre or. Nous ne sommes que les gardiens (Stockage alloué).</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-gold-500">
                                <ArrowPathIcon className="w-12 h-12 text-navy-900 mb-4" />
                                <h3 className="text-lg font-bold text-navy-900 mb-2">Liquidité Immédiate</h3>
                                <p className="text-gray-600 text-sm">Revendez votre or stocké chez nous en un clic au cours du jour, sans avoir à le déplacer.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Table Mockup */}
                <section className="bg-white py-20 border-t border-gray-100">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <h2 className="text-3xl font-bold text-center text-navy-900 mb-12">Nos Tarifs de Garde</h2>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-navy-900 text-white">
                                        <th className="p-4 rounded-tl-lg">Valeur du Stock</th>
                                        <th className="p-4">Frais Annuels (HT)</th>
                                        <th className="p-4 rounded-tr-lg">Services Inclus</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="p-4 font-bold">0 - 10,000,000 FCFA</td>
                                        <td className="p-4 text-gold-600 font-bold">1.5%</td>
                                        <td className="p-4 text-sm">Assurance, Audit annuel, Accès en ligne</td>
                                    </tr>
                                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="p-4 font-bold">10M - 50,000,000 FCFA</td>
                                        <td className="p-4 text-gold-600 font-bold">1.2%</td>
                                        <td className="p-4 text-sm">Assurance, Audit annuel, Accès en ligne, Conseiller dédié</td>
                                    </tr>
                                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="p-4 font-bold">+ 50,000,000 FCFA</td>
                                        <td className="p-4 text-gold-600 font-bold">1.0%</td>
                                        <td className="p-4 text-sm">Assurance, Audit annuel, Accès en ligne, Conseiller VIP, Retrait express</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-gray-500 mt-4 text-center">*Minimum de facturation annuel : 50,000 FCFA. Facturation trimestrielle.</p>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
