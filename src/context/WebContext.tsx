import { createContext, useContext, useEffect, useState } from "react"
interface TradeData {
    s: string;
    p: number;
    differece?: number;
}
interface WebSocketContextType {
    stockData: TradeData[];
}

const WebContext = createContext<WebSocketContextType>({
    stockData: []
})
export const WebcontextProvider = ({ children }: { children: React.ReactNode }) => {
    const [stockData, setStockData] = useState<TradeData[]>([]);
    const symbols = [
        "TSLA",
        "BINANCE:BTCUSDT",
        "BINANCE:ETHUSDT",
        "OANDA:EUR_USD",
        "BINANCE:SOLUSDT",
    ];

    useEffect(() => {
        const socket = new WebSocket("wss://ws.finnhub.io?token=d4je829r01queuamorbgd4je829r01queuamorc0")
        socket.addEventListener("open", () => {
            symbols.forEach((symbol) => {
                socket.send(JSON.stringify({ type: "subscribe", symbol }));
            });
        });

        socket.addEventListener("message", (event) => {
            const data = JSON.parse(event.data);
            if (data.type === "trade" && data.data && data.data.length > 0) {
                const lastTrade = data.data[data.data.length - 1];
                setStockData(prev => {
                    const exists = prev.find(item => item.s === lastTrade.s);
                    let prePrice = exists?.p ?? 0;
                    let newPrice = lastTrade?.p
                    if (exists) {
                        const percent =
                            prePrice > 0
                                ? ((newPrice - prePrice) / prePrice) * 100
                                : 0;
                        return prev.map(item =>
                            item?.s === lastTrade?.s ? {
                                ...lastTrade,
                                differece: Math.floor(percent)
                            } : item
                        );
                    } else {
                        return [...prev, { ...lastTrade, differece: 0 }];
                    }
                });
            }

            if (data.type === "error") {
                console.error("Finnhub WebSocket Error:", data);
            }
        });
    }, [])

    return <WebContext.Provider value={{ stockData }}>
        {children}
    </WebContext.Provider>
}

export const useWebsocketData = () => {
    const context = useContext(WebContext)

    if (!context) {
        throw new Error("useWebsocketData must be used inside WebcontextProvider");
    }

    return context
}