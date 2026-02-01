import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

export default function BuyPage() {
    // Mock Data
    const products = [
        { id: '1', name: 'Lingot d\'Or 1kg (Wourous)', price: '45,250,000', weight: '1000g', purity: '999.9', type: 'bar' as const, image: '/gold-bar.png' },
        { id: '2', name: 'Lingotin 100g Valcambi', price: '4,550,000', weight: '100g', purity: '999.9', type: 'bar' as const, image: '/gold-bar.png' },
        { id: '3', name: 'Lingotin 50g Heraeus', price: '2,280,000', weight: '50g', purity: '999.9', type: 'bar' as const, image: '/gold-bar.png' },
        { id: '4', name: 'Once d\'Or Krugerrand', price: '1,420,000', weight: '1oz', purity: '916.7', type: 'coin' as const, image: '/gold-coins.png' },
        { id: '5', name: 'Napoléon 20 Francs', price: '280,000', weight: '6.45g', purity: '900.0', type: 'coin' as const, image: '/gold-coins.png' },
        { id: '6', name: 'Lingotin 10g Wourous', price: '460,000', weight: '10g', purity: '999.9', type: 'bar' as const, image: '/gold-bar.png' },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />

            <main className="flex-grow pb-20">
                {/* Page Header */}
                <div className="bg-navy-900 text-white py-12 mb-10">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Acheter de l'Or d'Investissement</h1>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Découvrez notre sélection de lingots et pièces d'or certifiés. Prix actualisés en temps réel selon le cours mondial (Spot).
                        </p>
                    </div>
                </div>

                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar Filters */}
                    <aside className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-xl shadow-sm sticky top-24">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-navy-900">Filtres</h3>
                                <button className="text-xs text-gold-600 hover:underline">Réinitialiser</button>
                            </div>

                            {/* Category Filter */}
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold mb-3 text-gray-700">Type de Produit</h4>
                                <div className="space-y-2">
                                    <label className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer">
                                        <input type="checkbox" className="rounded border-gray-300 text-gold-500 focus:ring-gold-500" defaultChecked />
                                        <span>Lingots & Lingotins</span>
                                    </label>
                                    <label className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer">
                                        <input type="checkbox" className="rounded border-gray-300 text-gold-500 focus:ring-gold-500" defaultChecked />
                                        <span>Pièces d'Investissement</span>
                                    </label>
                                </div>
                            </div>

                            {/* Weight Filter */}
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold mb-3 text-gray-700">Poids</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    <button className="px-3 py-1 text-xs border border-gray-200 rounded hover:border-gold-500 hover:text-gold-600 transition-colors">1g - 100g</button>
                                    <button className="px-3 py-1 text-xs border border-gray-200 rounded hover:border-gold-500 hover:text-gold-600 transition-colors">100g - 1kg</button>
                                    <button className="px-3 py-1 text-xs border border-gray-200 rounded hover:border-gold-500 hover:text-gold-600 transition-colors">1 Once</button>
                                    <button className="px-3 py-1 text-xs border border-gray-200 rounded hover:border-gold-500 hover:text-gold-600 transition-colors">Kilo</button>
                                </div>
                            </div>

                            {/* Budget Range Mockup */}
                            <div>
                                <h4 className="text-sm font-semibold mb-3 text-gray-700">Budget</h4>
                                <input type="range" className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold-500" />
                                <div className="flex justify-between text-xs text-gray-500 mt-2">
                                    <span>100K</span>
                                    <span>50M+</span>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="lg:col-span-3">
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-sm text-gray-500">Affichage de <span className="font-bold text-navy-900">6</span> produits</p>
                            <select className="text-sm border-gray-200 rounded-lg focus:ring-gold-500 focus:border-gold-500">
                                <option>Trier par: Pertinence</option>
                                <option>Prix: Croissant</option>
                                <option>Prix: Décroissant</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map(product => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                        </div>

                        {/* Load More */}
                        <div className="mt-12 text-center">
                            <button className="px-8 py-3 bg-white border border-gray-200 text-navy-900 font-semibold rounded-full hover:shadow-md transition-all">
                                Charger plus de produits
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
