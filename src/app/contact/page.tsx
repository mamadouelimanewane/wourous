import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />

            <main className="flex-grow py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-serif font-bold text-navy-900 mb-10 text-center">Contactez-nous</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {/* Contact Info */}
                        <div className="bg-navy-900 text-white rounded-2xl p-10 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-gold-500 rounded-full opacity-20 blur-3xl"></div>

                            <h2 className="text-2xl font-bold mb-8">Informations</h2>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/10 rounded-lg">
                                        <PhoneIcon className="w-6 h-6 text-gold-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Téléphone</h3>
                                        <p className="text-gray-300">+221 33 800 00 00</p>
                                        <p className="text-gray-300">+221 77 000 00 00 (WhatsApp)</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/10 rounded-lg">
                                        <EnvelopeIcon className="w-6 h-6 text-gold-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Email</h3>
                                        <p className="text-gray-300">contact@wourous.sn</p>
                                        <p className="text-gray-300">support@wourous.sn</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/10 rounded-lg">
                                        <MapPinIcon className="w-6 h-6 text-gold-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Bureaux</h3>
                                        <p className="text-gray-300">Immeuble Wourous<br />Avenue du Président Lamine Gueye<br />Dakar, Sénégal, BP 1234</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/10">
                                <h3 className="font-bold mb-4">Horaires d'ouverture</h3>
                                <div className="flex justify-between text-sm text-gray-300 mb-2">
                                    <span>Lundi - Vendredi</span>
                                    <span>09:00 - 18:00</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-300">
                                    <span>Samedi</span>
                                    <span>09:00 - 13:00</span>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100">
                            <h2 className="text-2xl font-bold text-navy-900 mb-6">Envoyez-nous un message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-gold-500 focus:border-gold-500 outline-none bg-gray-50" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-gold-500 focus:border-gold-500 outline-none bg-gray-50" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-gold-500 focus:border-gold-500 outline-none bg-gray-50" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-gold-500 focus:border-gold-500 outline-none bg-gray-50">
                                        <option>Demande d'informations</option>
                                        <option>Achat d'Or</option>
                                        <option>Vente d'Or</option>
                                        <option>Partenariat</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-gold-500 focus:border-gold-500 outline-none bg-gray-50"></textarea>
                                </div>

                                <button className="w-full py-3 bg-navy-900 text-white font-bold rounded-lg hover:bg-navy-800 transition-colors shadow-lg">
                                    Envoyer le message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
