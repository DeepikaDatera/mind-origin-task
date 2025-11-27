import HoldingsTable from "../../components/dashboard/HoldingTable";
import LivePriceChart from "../../components/dashboard/LineChart";
import LiveStockStrip from "../../components/dashboard/LiveStockStrip";
import PortfolioSummeryCard from "../../components/dashboard/PortfolioSummeryCard";
import PageLayout from "../../components/layouts/PageLayout";

export default function Dasbhoard() {
    return (
        <PageLayout>
            <LiveStockStrip />
            <PortfolioSummeryCard />
            <HoldingsTable />
            <LivePriceChart />
        </PageLayout>
    )
}
