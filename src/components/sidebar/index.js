import '../../assets/scss/sidebar.scss'
import logo from '../../assets/media/logo.png'
import { Link, useLocation } from 'react-router-dom'
import { FaHome, FaUsers, FaCar, FaFileInvoiceDollar, FaUserClock, FaSignOutAlt } from 'react-icons/fa';
import { GiMechanicGarage } from 'react-icons/gi'

const sidebarItems = [
    {
        path: "/dashboard/home",
        Icon: FaHome,
        label: 'Home',
    },
    {
        path: "/dashboard/customers",
        Icon: FaUsers,
        label: 'Customers',
    },
    {
        path: "/dashboard/vehicles",
        Icon: FaCar,
        label: 'Vehicles',
    }, {
        path: "/dashboard/invoices",
        Icon: FaFileInvoiceDollar,
        label: 'Invoices',
    },
    {
        path: "/dashboard/inventory",
        Icon: GiMechanicGarage,
        label: 'Inventory',
    }, {
        path: "/dashboard/staffs",
        Icon: FaUserClock,
        label: 'Staffs',
    }
]

const Sidebar = () => {
    return <div className="sidebar-container full-height">
        <div className='center-container' style={{ padding: '20px' }}>
            <img src={logo} alt="logo" width="100%" />
        </div>
        <div className='sidebar-items'>
            {sidebarItems.map(e => <SidebarItem
                path={e.path}
                Icon={e.Icon}
                label={e.label}
            />)}
            <>
                <div><FaSignOutAlt />Signout</div>
            </>
        </div>
    </div>
}

export default Sidebar

const SidebarItem = (props = {}) => {
    const { path, Icon, label } = props
    const { pathname: currentURL } = useLocation()
    return <>
        <Link to={path} >
            <div className={currentURL.includes(path) ? 'active' : ''} > <Icon />{label}</div>
        </Link>
    </>
}
