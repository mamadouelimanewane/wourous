import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CalculatorIcon, TruckIcon, BuildingStorefrontIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

export default function SellPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />

            <main className="flex-grow">
                {/* Helper Hero */}
                <div className="bg-navy-900 text-white py-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/hero-bg.png')] opacity-20 bg-cover bg-center"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">Vendez votre Or en toute confiance</h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                            Obtenez la meilleure estimation du marché pour vos bijoux, pièces et lingots. Paiement immédiat et sécurisé.
                        </p>
                        <button className="px-8 py-3 bg-gold-500 text-navy-900 font-bold rounded-full hover:bg-gold-400 shadow-lg shadow-gold-500/30 transition-all">
                            Estimer mon Or
                        </button>
                    </div>
                </div>

                {/* How it works */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-navy-900 mb-16">Comment ça marche ?</h2>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-200 -z-10"></div>

                            {/* Step 1 */}
                            <div className="text-center bg-gray-50 p-4">
                                <div className="w-24 h-24 bg-white border-2 border-gold-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                    <CalculatorIcon className="w-10 h-10 text-gold-600" />
                                </div>
                                <h3 className="text-xl font-bold text-navy-900 mb-2">1. Estimation</h3>
                                <p className="text-gray-600">Utilisez notre outil en ligne ou contactez-nous pour une pré-évaluation de vos biens.</p>
                            </div>

                            {/* Step 2 */}
                            <div className="text-center bg-gray-50 p-4">
                                <div className="w-24 h-24 bg-white border-2 border-gold-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                    <TruckIcon className="w-10 h-10 text-gold-600" />
                                </div>
                                <h3 className="text-xl font-bold text-navy-900 mb-2">2. Envoi / Dépôt</h3>
                                <p className="text-gray-600">Visitez l'une de nos agences sécurisées ou utilisez notre kit d'envoi assuré.</p>
                            </div>

                            {/* Step 3 */}
                            <div className="text-center bg-gray-50 p-4">
                                <div className="w-24 h-24 bg-white border-2 border-gold-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                    <BuildingStorefrontIcon className="w-10 h-10 text-gold-600" />
                                </div>
                                <h3 className="text-xl font-bold text-navy-900 mb-2">3. Expertise</h3>
                                <p className="text-gray-600">Nos experts vérifient la pureté et le poids de votre or devant vous (en agence).</p>
                            </div>

                            {/* Step 4 */}
                            <div className="text-center bg-gray-50 p-4">
                                <div className="w-24 h-24 bg-white border-2 border-gold-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                    <CurrencyDollarIcon className="w-10 h-10 text-gold-600" />
                                </div>
                                <h3 className="text-xl font-bold text-navy-900 mb-2">4. Paiement</h3>
                                <p className="text-gray-600">Recevez votre paiement instantanément par Virement, Orange Money ou Wave.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sell Form / Simulator Mockup */}
                <section className="bg-white py-20 border-t border-gray-100">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="bg-navy-50 rounded-2xl p-8 md:p-12 shadow-xl border border-navy-100">
                            <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">Simulateur de Rachat</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Type d'Or</label>
                                    <select className="w-full p-4 border border-gray-300 rounded-lg focus:ring-gold-500 focus:border-gold-500 bg-white">
                                        <option>Or 24 Carats (999.9)</option>
                                        <option>Or 22 Carats (Pièces/Bijoux)</option>
                                        <option>Or 18 Carats (Bijoux standard)</option>
                                        <option>Or 14 Carats</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Poids (grammes)</label>
                                    <input type="number" placeholder="Ex: 50" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-gold-500 focus:border-gold-500" />
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-white rounded-xl border border-gold-200 flex flex-col md:flex-row justify-between items-center">
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Estimation de rachat</p>
                                    <p className="text-3xl font-mono font-bold text-navy-900">2,150,000 <span className="text-sm text-gray-400">XOF</span></p>
                                </div>
                                <button className="mt-4 md:mt-0 px-8 py-3 bg-navy-900 text-white font-bold rounded-lg hover:bg-navy-800 transition-colors">
                                    Vendre cet or
                                </button>
                            </div>
                            <p className="text-xs text-center text-gray-400 mt-4">*Ce prix est estimatif et basé sur le cours actuel. L'offre finale sera faite après expertise.</p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
