import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
    id: string;
    name: string;
    price: string;
    weight: string;
    purity: string;
    image: string;
    type: 'bar' | 'coin';
}

export default function ProductCard({ id, name, price, weight, purity, image, type }: ProductCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
            <div className="relative h-48 w-full bg-gray-50 p-4 flex items-center justify-center">
                {/* Badge */}
                <div className="absolute top-3 left-3 bg-navy-900 text-gold-400 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                    {type === 'bar' ? 'Lingot' : 'Pièce'}
                </div>

                {/* Image */}
                <div className="w-32 h-32 relative transform group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 bg-gold-400 rounded-full opacity-20 blur-xl"></div>
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-contain drop-shadow-lg"
                    />
                </div>
            </div>

            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-navy-900 line-clamp-2">{name}</h3>
                </div>

                <div className="flex items-center gap-2 mb-4 text-xs text-gray-500">
                    <span className="bg-gray-100 px-2 py-1 rounded">Pureté: {purity}</span>
                    <span className="bg-gray-100 px-2 py-1 rounded">Poids: {weight}</span>
                </div>

                <div className="flex items-end justify-between mt-4 border-t border-gray-100 pt-4">
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Prix de vente</p>
                        <p className="text-xl font-mono font-bold text-gold-600">{price} <span className="text-xs text-gray-400">XOF</span></p>
                    </div>
                    <button className="bg-navy-900 hover:bg-navy-800 text-white rounded-lg p-2 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
