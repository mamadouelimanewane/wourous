import Image from "next/image";
import Link from "next/link";
import { ArrowTrendingUpIcon, ShieldCheckIcon, BanknotesIcon, GlobeEuropeAfricaIcon } from "@heroicons/react/24/outline";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg.png"
              alt="Gold Trading Background"
              fill
              className="object-cover opacity-80"
              priority
              sizes="100vw"
            />
            {/* Reduced opacity to make image more visible on mobile */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/85 to-navy-900/50" />
          </div>

          <div className="container relative z-10 px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-gold-500/20 border border-gold-500 rounded-full text-gold-400 text-sm font-semibold tracking-wide uppercase">
                Leader en Afrique de l'Ouest
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                Investissez dans l'Or <br />
                <span className="text-gold-500">En Toute Sécurité</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-xl">
                Achetez, vendez et stockez de l'or physique avec Wourous. La plateforme de référence pour le négoce de métaux précieux au Sénégal et dans la sous-région.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/buy"
                  className="px-8 py-4 bg-gold-500 text-navy-900 font-bold rounded shadow-lg shadow-gold-500/30 hover:bg-gold-400 text-center transition-all transform hover:-translate-y-1"
                >
                  Voir les Cours
                </Link>
                <Link
                  href="/sell"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded hover:bg-white hover:text-navy-900 text-center transition-all"
                >
                  Vendre de l'Or
                </Link>
              </div>
            </div>

            {/* Live Rate Card (Floating) */}
            <div className="hidden lg:block bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold mb-6 text-center border-b border-white/10 pb-4">Cours en Temps Réel</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-sm text-gray-400">Or (XAU/XOF) 1kg</p>
                    <p className="text-3xl font-mono font-bold text-gold-400">45,250,000</p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 flex items-center gap-1 text-sm font-bold">
                      <ArrowTrendingUpIcon className="w-4 h-4" /> +1.24%
                    </p>
                    <p className="text-xs text-gray-500">24H</p>
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-sm text-gray-400">Argent (XAG/XOF) 1kg</p>
                    <p className="text-2xl font-mono font-bold text-gray-300">545,000</p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 flex items-center gap-1 text-sm font-bold">
                      <ArrowTrendingUpIcon className="w-4 h-4" /> +0.85%
                    </p>
                    <p className="text-xs text-gray-500">24H</p>
                  </div>
                </div>
                <div className="pt-4">
                  <button className="w-full py-3 bg-navy-800 hover:bg-navy-700 rounded text-sm font-semibold transition-colors">
                    Ouvrir un Compte Gratuit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="py-20 bg-cream-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">Pourquoi Choisir Wourous ?</h2>
              <div className="w-24 h-1 bg-gold-500 mx-auto rounded"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-gold-500">
                <div className="w-14 h-14 bg-navy-50 rounded-full flex items-center justify-center mb-6 text-gold-600">
                  <ShieldCheckIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Sécurité Certifiée</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tous nos produits sont certifiés et stockés dans des coffres sécurisés à Dakar. Nous garantissons l'authenticité de chaque pièce et lingot.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-gold-500">
                <div className="w-14 h-14 bg-navy-50 rounded-full flex items-center justify-center mb-6 text-gold-600">
                  <BanknotesIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Prix Transparents</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nos prix sont indexés sur le cours mondial de l'or. Pas de frais cachés, nous offrons les spreads les plus compétitifs de la région.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-gold-500">
                <div className="w-14 h-14 bg-navy-50 rounded-full flex items-center justify-center mb-6 text-gold-600">
                  <GlobeEuropeAfricaIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Expertise Locale</h3>
                <p className="text-gray-600 leading-relaxed">
                  Basés au Sénégal, nous comprenons les spécificités du marché ouest-africain. Paiements via Orange Money et Wave acceptés.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA / IMAGE SECTION */}
        <section className="bg-navy-900 text-white overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-96 md:h-auto min-h-[300px]">
              <Image
                src="/gold-coins.png"
                alt="Gold Investment"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-12 md:p-20 flex flex-col justify-center">
              <h2 className="text-3xl font-serif font-bold mb-6">Prêt à sécuriser votre patrimoine ?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                L'or est la valeur refuge par excellence. Que vous souhaitiez acheter un simple lingotin de 5g ou constituer un portefeuille important, nos experts sont là pour vous guider.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-500 font-bold">1</div>
                  <p>Créez votre compte en moins de 5 minutes</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-500 font-bold">2</div>
                  <p>Validez votre identité (KYC)</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-500 font-bold">3</div>
                  <p>Achetez de l'or au meilleur prix</p>
                </div>
              </div>
              <div className="mt-10">
                <Link href="/register" className="inline-block px-8 py-3 bg-white text-navy-900 font-bold rounded hover:bg-gray-100 transition-colors">
                  Commencer Maintenant
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
