import { Layout } from "antd";
import Sidebar from "./sidebar/Sidebar";
import { Content } from "antd/es/layout/layout";
import AppHeader from "./header/Header";
import { HeaderToggleProvider } from "../../context/HeaderToggleContext";

export default function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full min-h-screen">
            <HeaderToggleProvider>
                <Layout className="w-full h-screen">
                    <Sidebar />
                    <Layout>
                        <AppHeader />
                        <Content className="p-4 overflow-auto lg:p-6"

                        >
                            {children}
                        </Content>
                    </Layout>
                </Layout></HeaderToggleProvider>
        </div>
    )
}
