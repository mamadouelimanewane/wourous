import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPinIcon, PhoneIcon, ClockIcon } from "@heroicons/react/24/solid";

export default function LocationsPage() {
    const locations = [
        {
            city: "Dakar",
            address: "Immeuble Wourous, Avenue du Président Lamine Gueye, Plateau",
            phone: "+221 33 800 00 00",
            hours: "09:00 - 18:00",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1234.5678!2d-17.44!3d14.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQwJzM1LjkiTiAxN8KwMjYnMjguMiJX!5e0!3m2!1sen!2ssn!4v1234567890"
        },
        {
            city: "Abidjan",
            address: "Résidence Tropique, Boulevard de la République, Plateau",
            phone: "+225 27 22 00 00 00",
            hours: "08:30 - 17:30",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1234.5678!2d-4.01!3d5.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMTknNDguMCJOIDTCsDAwJzM2LjAiVw!5e0!3m2!1sen!2sci!4v1234567890"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />

            <main className="flex-grow">
                <div className="bg-navy-900 text-white py-12">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-3xl font-serif font-bold mb-4">Nos Agences</h1>
                        <p className="text-gray-300">Retrouvez-nous dans nos bureaux sécurisés pour vos opérations d'achat et de vente.</p>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-16">
                    <div className="space-y-12">
                        {locations.map((loc, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col md:flex-row h-auto md:h-96">
                                {/* Info Side */}
                                <div className="w-full md:w-1/3 p-8 flex flex-col justify-center bg-gray-50">
                                    <h2 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-2">
                                        <span className="w-2 h-8 bg-gold-500 rounded-full"></span>
                                        {loc.city}
                                    </h2>

                                    <div className="space-y-6 text-gray-600">
                                        <div className="flex items-start gap-3">
                                            <MapPinIcon className="w-6 h-6 text-gold-600 shrink-0 mt-1" />
                                            <p>{loc.address}</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <PhoneIcon className="w-6 h-6 text-gold-600 shrink-0" />
                                            <p className="font-semibold">{loc.phone}</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <ClockIcon className="w-6 h-6 text-gold-600 shrink-0" />
                                            <p>{loc.hours}</p>
                                        </div>
                                    </div>

                                    <button className="mt-8 px-6 py-2 border-2 border-navy-900 text-navy-900 font-bold rounded hover:bg-navy-900 hover:text-white transition-colors">
                                        Prendre Rendez-vous
                                    </button>
                                </div>

                                {/* Map Side (Using static iframe frame for demo) */}
                                <div className="w-full md:w-2/3 h-64 md:h-full bg-gray-200 relative">
                                    {/* In a real app, use Google Maps API or a proper Embed */}
                                    <iframe
                                        src={loc.mapUrl}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        className="absolute inset-0"
                                    ></iframe>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
