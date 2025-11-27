import { Button, Layout, theme, } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SunOutlined,
} from '@ant-design/icons';
import { useContextHeader } from '../../../context/HeaderToggleContext';
import { useThemeContext } from '../../../context/ThemeContext';
const { Header } = Layout;
export default function AppHeader() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const { collapsed, toggleCollapsed } = useContextHeader()

    return (
        <Header style={{ padding: 0, background: colorBgContainer }} className='justify-between flex'>
            <div className='bg-white px-4 hover:bg-white hidden lg:block'
                onClick={toggleCollapsed}
            >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
            <div className={` p-4 text-xl font-semibold text-center uppercase lg:hidden`} >
                Mindorigin Portfolio
            </div>
        </Header>
    )
}
