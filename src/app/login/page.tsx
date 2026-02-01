import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LoginPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />

            <main className="flex-grow flex items-center justify-center py-20 px-4 mb-20">
                <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden flex flex-col md:flex-row max-w-4xl">
                    {/* Decorative Side (Hidden on mobile) */}
                    <div className="hidden md:flex w-1/2 bg-navy-900 text-white p-12 flex-col justify-between relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/hero-bg.png')] opacity-30 bg-cover bg-center"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-serif font-bold mb-6">Bon retour parmi nous</h2>
                            <p className="text-gray-300">Accédez à votre portefeuille sécurisé et suivez le cours de l'or en temps réel.</p>
                        </div>
                        <div className="relative z-10 text-sm text-gray-400">
                            © 2024 Wourous Trading
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="w-full md:w-1/2 p-12">
                        <div className="text-center md:text-left mb-10">
                            <h1 className="text-2xl font-bold text-navy-900 mb-2">Connexion</h1>
                            <p className="text-sm text-gray-500">Entrez vos identifiants pour accéder à votre compte.</p>
                        </div>

                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email ou Numéro de téléphone</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all outline-none"
                                    placeholder="exemple@email.com"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
                                    <Link href="/forgot-password" className="text-xs text-gold-600 hover:underline">Mot de passe oublié ?</Link>
                                </div>
                                <input
                                    type="password"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all outline-none"
                                    placeholder="••••••••"
                                />
                            </div>

                            <button className="w-full py-3 bg-navy-900 text-white font-bold rounded-lg hover:bg-navy-800 transition-colors shadow-lg">
                                Se Connecter
                            </button>
                        </form>

                        <div className="mt-8 text-center text-sm text-gray-500">
                            Pas encore de compte ? <Link href="/register" className="text-gold-600 font-bold hover:underline">Créer un compte</Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
