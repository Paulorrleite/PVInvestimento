import React from 'react';

interface AcaoProps {
    symbol: string;
    logourl: string;
    shortName: string;
    currency: string;
    regularMarketPrice: number;
    regularMarketDayRange: string;
    regularMarketDayHigh: number;
    onToggleFavorite: (symbol: string) => void;
    isFavorite: boolean;
}

const AcaoDisplay: React.FC<AcaoProps> = ({
    symbol,
    logourl,
    shortName,
    currency,
    regularMarketPrice,
    regularMarketDayRange,
    regularMarketDayHigh,
    onToggleFavorite,
    isFavorite
}) => {

    return (
        <div className="border p-4 rounded-lg shadow-md">
            <img src={logourl} alt={symbol} className="w-16 h-16 mx-auto" />
            <h3 className="text-xl font-bold text-center">{shortName}</h3>
            <p className="text-center text-gray-600">{symbol} - {currency}</p>
            <p className="text-center">Preço: {regularMarketPrice}</p>
            <p className="text-center">Faixa do dia: {regularMarketDayRange}</p>
            <p className="text-center">Alta do dia: {regularMarketDayHigh}</p>

            <button
                onClick={() => onToggleFavorite(symbol)}
                className={`mt-4 p-2 w-full text-white rounded-lg ${isFavorite ? 'bg-red-500' : 'bg-gray-500'}`}
            >
                {isFavorite ? 'Remover Favorito' : 'Favoritar'}
            </button>
        </div>
    );
};

export default AcaoDisplay;
