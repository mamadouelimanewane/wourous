import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RegisterPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />

            <main className="flex-grow flex items-center justify-center py-20 px-4 mb-20">
                <div className="bg-white rounded-2xl shadow-xl w-full text-center max-w-md md:max-w-xl overflow-hidden p-10 relative">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-navy-900 via-gold-500 to-navy-900"></div>

                    <h1 className="text-3xl font-serif font-bold text-navy-900 mb-4">Créer un compte Wourous</h1>
                    <p className="text-gray-500 mb-8">Rejoignez la première plateforme de négoce d'or en Afrique de l'Ouest.</p>

                    <form className="space-y-5 text-left">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-gold-500 focus:border-gold-500 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-gold-500 focus:border-gold-500 outline-none" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-gold-500 focus:border-gold-500 outline-none" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone (avec indicatif)</label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                    +221
                                </span>
                                <input type="tel" className="flex-1 w-full px-4 py-3 rounded-r-lg border border-gray-300 focus:ring-gold-500 focus:border-gold-500 outline-none" placeholder="77 000 00 00" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
                            <input type="password" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-gold-500 focus:border-gold-500 outline-none" />
                            <p className="text-xs text-gray-400 mt-1">Au moins 8 caractères, une majuscule et un chiffre.</p>
                        </div>

                        <div className="flex items-start gap-2 pt-2">
                            <input type="checkbox" className="mt-1 rounded text-gold-600 focus:ring-gold-500" />
                            <p className="text-sm text-gray-600">
                                J'accepte les <Link href="/conditions" className="text-navy-900 underline">Conditions Générales d'Utilisation</Link> et la Politique de Confidentialité.
                            </p>
                        </div>

                        <button className="w-full py-3 bg-gold-500 text-navy-900 font-bold rounded-lg hover:bg-gold-400 transition-colors shadow-lg mt-4">
                            Ouvrir mon compte gratuitement
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm text-gray-500">
                        Déjà un compte ? <Link href="/login" className="text-navy-900 font-bold hover:underline">Se connecter</Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
