

import { useWebsocketData } from "../../context/WebContext";

export default function PortfolioSummeryCard() {
    const portfolio = [
        { symbol: "BINANCE:BTCUSDT", qty: 4, avgBuy: 65000 },

        { symbol: "BINANCE:ETHUSDT", qty: 10, avgBuy: 2500 },

        { symbol: "BINANCE:SOLUSDT", qty: 12, avgBuy: 100 },

        { symbol: "TSLA", qty: 5, avgBuy: 400 },
    ];
    const { stockData: liveData } = useWebsocketData()
    const priceMap: Record<string, number> = {};
    liveData.forEach((item) => {
        priceMap[item.s] = item.p;
    });

    const totalInvested = portfolio.reduce(
        (sum, item) => sum + item.qty * item.avgBuy,
        0
    );

    const currentValue = portfolio.reduce((sum, item) => {
        const price = priceMap[item.symbol] ?? item.avgBuy;
        return sum + price * item.qty;
    }, 0);

    const pl = currentValue - totalInvested;
    const plPct = (pl / totalInvested) * 100;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">

            <div className="p-4 bg-white shadow rounded">
                <h4 className="font-semibold">Total Invested</h4>
                <p className="text-gray-500 text-xl font-medium">${totalInvested.toFixed(2)}</p>
            </div>

            <div className="p-4 bg-white shadow rounded">
                <h4 className="font-semibold">Current Value</h4>
                <p className="text-gray-500 text-xl font-medium">${currentValue.toFixed(2)}</p>
            </div>

            <div className="p-4 bg-white shadow rounded">
                <h4 className="font-semibold">Profit / Loss</h4>
                <p className={`${pl >= 0 ? "text-green-600" : "text-red-600"} text-xl font-medium`}>
                    {pl.toFixed(2)} ({plPct.toFixed(2)}%)
                </p>
            </div>
        </div>
    );
}

