import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />

            <main className="flex-grow">
                {/* Simple Hero */}
                <div className="bg-navy-900 text-white py-16 text-center">
                    <h1 className="text-4xl font-serif font-bold mb-4">À Propos de Wourous</h1>
                    <p className="max-w-2xl mx-auto text-gray-300">L'excellence et la transparence au service de votre patrimoine.</p>
                </div>

                <div className="container mx-auto px-4 py-16">
                    {/* Section 1: Our Mission */}
                    <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                        <div className="w-full md:w-1/2">
                            <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/gold-bar.png"
                                    alt="Gold Bar"
                                    fill
                                    className="object-cover bg-navy-100" // Adding bg in case image has transparency/white bg mismatch
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl font-bold text-navy-900 mb-6">Notre Mission</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Fondée avec la conviction que l'investissement dans l'or doit être accessible, transparent et sécurisé pour tous les Africains, Wourous s'impose aujourd'hui comme le leader du négoce de métaux précieux en Afrique de l'Ouest.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Nous démocratisons l'accès à la valeur refuge par excellence en proposant des produits certifiés (LBMA), une tarification indexée sur le marché mondial en temps réel, et des solutions de stockage hors système bancaire.
                            </p>
                        </div>
                    </div>

                    {/* Section 2: Values */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-gold-500 text-center">
                            <h3 className="text-xl font-bold text-navy-900 mb-4">Intégrité</h3>
                            <p className="text-gray-600">Des transactions transparentes, des produits certifiés et une conformité totale aux réglementations locales et internationales.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-gold-500 text-center">
                            <h3 className="text-xl font-bold text-navy-900 mb-4">Excellence</h3>
                            <p className="text-gray-600">Un service client premium, des experts dédiés et une plateforme technologique de pointe pour vos investissements.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-gold-500 text-center">
                            <h3 className="text-xl font-bold text-navy-900 mb-4">Sécurité</h3>
                            <p className="text-gray-600">Vos fonds et votre or sont sécurisés. Nous travaillons avec les leaders mondiaux du transport de valeurs.</p>
                        </div>
                    </div>

                    {/* Section 3: Compliance Badge (Mockup) */}
                    <div className="bg-navy-50 rounded-2xl p-12 text-center">
                        <h2 className="text-2xl font-bold text-navy-900 mb-8">Conformité & Partenaires</h2>
                        <div className="flex flex-wrap justify-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all">
                            {/* Placeholders for logos */}
                            <div className="text-xl font-bold text-gray-400 border border-gray-300 p-4 rounded">BCEAO</div>
                            <div className="text-xl font-bold text-gray-400 border border-gray-300 p-4 rounded">LBMA</div>
                            <div className="text-xl font-bold text-gray-400 border border-gray-300 p-4 rounded">BRINK'S</div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
