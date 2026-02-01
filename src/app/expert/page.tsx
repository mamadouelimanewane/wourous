import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UserGroupIcon, AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/outline";

export default function ExpertPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />

            <main className="flex-grow">
                {/* Banner */}
                <div className="bg-navy-900 text-gold-100 py-20 text-center px-4">
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">Expertise & Conseil</h1>
                    <p className="text-xl max-w-3xl mx-auto text-gray-300">
                        Bénéficiez de l'accompagnement de nos spécialistes pour optimiser vos investissements en métaux précieux.
                    </p>
                </div>

                <div className="container mx-auto px-4 py-16">

                    {/* Services List */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-gold-500">
                            <UserGroupIcon className="w-12 h-12 text-navy-900 mb-6" />
                            <h2 className="text-xl font-bold text-navy-900 mb-4">Gestion de Patrimoine</h2>
                            <p className="text-gray-600 mb-6">
                                Intégrez l'or physique dans votre stratégie patrimoniale pour sécuriser vos avoirs et transmettre votre capital.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-500">
                                <li>• Audit de portefeuille</li>
                                <li>• Stratégie de diversification</li>
                                <li>• Planification successorale</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-gold-500">
                            <AcademicCapIcon className="w-12 h-12 text-navy-900 mb-6" />
                            <h2 className="text-xl font-bold text-navy-900 mb-4">Fiscalité de l'Or</h2>
                            <p className="text-gray-600 mb-6">
                                Comprenez les avantages fiscaux liés à l'investissement dans l'or au Sénégal et dans la zone UEMOA.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-500">
                                <li>• Exonérations de TVA</li>
                                <li>• Régime des plus-values</li>
                                <li>• Déclaration douanière</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-gold-500">
                            <BriefcaseIcon className="w-12 h-12 text-navy-900 mb-6" />
                            <h2 className="text-xl font-bold text-navy-900 mb-4">Investisseurs Pro</h2>
                            <p className="text-gray-600 mb-6">
                                Solutions sur mesure pour les trésoreries d'entreprise, les family offices et les institutionnels.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-500">
                                <li>• Commandes en gros</li>
                                <li>• Couverture de risque (Hedging)</li>
                                <li>• Logistique sécurisée internationale</li>
                            </ul>
                        </div>
                    </div>

                    {/* Team / Contact CTA */}
                    <div className="bg-navy-50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-2/3">
                            <h2 className="text-2xl font-bold text-navy-900 mb-4">Parlez à un Expert</h2>
                            <p className="text-gray-600 mb-6">
                                Nos conseillers sont disponibles pour un entretien privé (téléphonique ou en agence) afin d'analyser vos besoins spécifiques. Ce service est gratuit et sans engagement.
                            </p>
                            <button className="px-8 py-3 bg-navy-900 text-white font-bold rounded-lg hover:bg-navy-700 transition-colors">
                                Prendre Rendez-vous
                            </button>
                        </div>
                        <div className="md:w-1/3 flex justify-center">
                            <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 font-bold border-4 border-white shadow-xl">
                                Photo Expert
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
