import { useState } from "react";
import { Table, } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useWebsocketData } from "../../context/WebContext";

interface PortfolioItem {
    company: string;
    ticker: string;
    qty: number;
    avgBuy: number;
}

export default function HoldingsTable() {

    const portfolio: PortfolioItem[] = [
        { company: "Bitcoin", ticker: "BINANCE:BTCUSDT", qty: 4, avgBuy: 65000 },
        { company: "Ethereum", ticker: "BINANCE:ETHUSDT", qty: 10, avgBuy: 2500 },
        { company: "Solana", ticker: "BINANCE:SOLUSDT", qty: 12, avgBuy: 100 },
        { company: "Tesla", ticker: "TSLA", qty: 5, avgBuy: 400 },
    ];

    const { stockData: liveData } = useWebsocketData()
    const priceMap: Record<string, number> = {};
    liveData.forEach((item) => {
        priceMap[item.s] = item.p;
    });

    console.log(priceMap, "sdgsgsdg");
    const [search, setSearch] = useState("");

    const columns: ColumnsType<any> = [
        {
            title: "Company",
            dataIndex: "company",
            sorter: (a, b) => a.company.localeCompare(b.company),
        },
        {
            title: "Ticker",
            dataIndex: "ticker",
            sorter: (a, b) => a.ticker.localeCompare(b.ticker),
        },
        {
            title: "Quantity",
            dataIndex: "qty",
            sorter: (a, b) => a.qty - b.qty,
        },
        {
            title: "Avg Buy Price",
            dataIndex: "avgBuy",
            sorter: (a, b) => a.avgBuy - b.avgBuy,
        },
        {
            title: "Current Price (Live)",
            dataIndex: "currentPrice",
            sorter: (a, b) => a.currentPrice - b.currentPrice,
            render: (value) => <span className="font-semibold">{value}</span>,
        },
        {
            title: "P/L",
            dataIndex: "pl",
            sorter: (a, b) => a.pl - b.pl,
            render: (value) => (
                <span className={value >= 0 ? "text-green-600" : "text-red-600"}>
                    {value?.toFixed(2)}
                </span>
            ),
        },
    ];

    const tableData = portfolio?.filter(item => item.company.toLowerCase().includes(search.toLowerCase())).map(item => {
        const livePrice = priceMap[item.ticker] ?? item.avgBuy;
        const pl = livePrice * item.qty - item.avgBuy * item.qty;
        return {
            key: item?.ticker,
            company: item?.company,
            ticker: item?.ticker,
            qty: item?.qty,
            avgBuy: item?.avgBuy?.toFixed(2),
            currentPrice: livePrice.toFixed(2),
            pl,
        }
    })

    return (
        <div className="bg-white p-4 rounded shadow mt-6">

            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Holdings</h2>
                <input
                    placeholder="Search company"
                    className="w-[200px] p-2 border rounded-lg"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <Table
                columns={columns}
                dataSource={tableData || []}
                pagination={false}
                bordered
                className="rounded-lg overflow-auto"
            />
        </div>
    );
}
