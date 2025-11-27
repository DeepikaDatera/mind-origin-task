
import {
    DashboardFilled,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useContextHeader } from '../../../context/HeaderToggleContext';
import { useThemeContext } from '../../../context/ThemeContext';

const { Sider } = Layout;

const Sidebar = () => {
    const { collapsed } = useContextHeader()
    const { appTheme } = useThemeContext()

    return (
        <Sider trigger={null} collapsible collapsed={collapsed} width={260} theme={appTheme} className='hidden lg:block'  >
            <div className={` p-4 text-2xl font-semibold text-center uppercase `} >
                {
                    collapsed ? "MP" : "Mindorigin Portfolio"
                }
            </div>
            <Menu
                theme={appTheme}
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <DashboardFilled />,
                        label: 'Dashboard',
                    },
                ]}
            />
        </Sider>
    );
};

export default Sidebar;