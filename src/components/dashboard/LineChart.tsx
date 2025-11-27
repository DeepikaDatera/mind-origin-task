import { useEffect, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";
import { useWebsocketData } from "../../context/WebContext";

export default function StockMultiLineChart() {
    const { stockData } = useWebsocketData();
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const row: any = { id: data.length + 1 };

        stockData.forEach((item) => {
            row[item.s] = item.p; // add price for each symbol
        });

        setData((prev) => [...prev, row]);
    }, [stockData]);

    return (
        <div className="bg-white p-4 rounded shadow h-72 w-full mt-5">
            <h3 className="font-semibold mb-3">Live Stock Prices</h3>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <XAxis dataKey="id" label={{ value: "Updates", position: "insideBottom" }} />
                    <YAxis label={{ value: "Price", angle: -90, position: "insideLeft" }} />
                    <Tooltip />
                    <Legend />

                    <Line dataKey="BINANCE:BTCUSDT" name="BTC" stroke="orange" dot={false} />
                    <Line dataKey="BINANCE:ETHUSDT" name="ETH" stroke="blue" dot={false} />
                    <Line dataKey="BINANCE:SOLUSDT" name="SOL" stroke="green" dot={false} />
                    <Line dataKey="TSLA" name="TSLA" stroke="red" dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
