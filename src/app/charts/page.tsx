import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoldPriceChart from "@/components/GoldPriceChart";

export default function ChartsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />

            <main className="flex-grow py-12">
                <div className="bg-navy-900 text-white py-12 mb-10 -mt-12">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-3xl font-serif font-bold mb-4">Cours de l'Or en Direct</h1>
                        <p className="text-gray-300">Suivez l'évolution du marché et prenez les bonnes décisions d'investissement.</p>
                    </div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Main Chart Section */}
                        <div className="lg:col-span-2 space-y-8">
                            <GoldPriceChart />

                            {/* Analysis Text */}
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                                <h2 className="text-xl font-bold text-navy-900 mb-4">Analyse du Marché (Hebdomadaire)</h2>
                                <p className="text-gray-600 mb-4">
                                    Le cours de l'or a montré une forte résilience cette semaine, soutenu par les incertitudes économiques mondiales et une forte demande des banques centrales.
                                    En FCFA (XOF), le gramme se stabilise autour de 45,000 FCFA, offrant une excellente opportunité d'achat pour les investisseurs à long terme.
                                </p>
                                <p className="text-gray-600">
                                    Les indicateurs techniques suggèrent une tendance haussière pour le prochain trimestre.
                                </p>
                            </div>
                        </div>

                        {/* Side Stats */}
                        <div className="lg:col-span-1 space-y-6">
                            {/* Current Rates Table */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="font-bold text-navy-900 mb-4 border-b pb-2">Cours Actuels</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Or (1g)</span>
                                        <span className="font-mono font-bold text-navy-900">45,250 XOF</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Or (1kg)</span>
                                        <span className="font-mono font-bold text-navy-900">45,250,000 XOF</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Argent (1g)</span>
                                        <span className="font-mono font-bold text-navy-900">545 XOF</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Argent (1kg)</span>
                                        <span className="font-mono font-bold text-navy-900">545,000 XOF</span>
                                    </div>
                                </div>
                            </div>

                            {/* Performance */}
                            <div className="bg-navy-900 text-white p-6 rounded-xl shadow-lg">
                                <h3 className="font-bold text-gold-500 mb-4">Performance</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between">
                                        <span className="text-gray-300">1 Semaine</span>
                                        <span className="text-green-400 font-bold">+1.2%</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-300">1 Mois</span>
                                        <span className="text-green-400 font-bold">+3.5%</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-300">1 An</span>
                                        <span className="text-green-400 font-bold">+12.8%</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-300">5 Ans</span>
                                        <span className="text-green-400 font-bold">+45.2%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
