import { useWebsocketData } from "../../context/WebContext";

interface TradeData {
    s: string;
    p: number;
    differece?: number;
}
export default function LiveStockStrip() {
    const { stockData } = useWebsocketData()

    return (
        <>
            <p className=" text-base font-semibold text-gray-500 pb-4 lg:text-2xl lg:text-end">{new Date().toDateString()}</p>
            <div className="bg-white lg:py-4 rounded shadow flex divide-gray-200 divide-y-2  md:divide-x-2 lg:divide-y-0 flex-wrap lg:flex-nowrap">
                {
                    stockData?.map((item: TradeData, i) =>
                        <div className="p-4 lg:px-6 w-full md:w-1/2 lg:w-full" key={i}>
                            <p className="font-semibold py-1">{item.s}</p>
                            <p className="flex justify-between text-gray-500 text-xl font-medium">$ {Math.floor(item.p).toFixed(2)} <span className={item.differece ?? 0 >= 0 ? "text-green-500" : "text-red-500"}>{item.differece}%</span></p>
                        </div>
                    )
                }

            </div>
        </>
    )
}
