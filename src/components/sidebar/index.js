import '../../assets/scss/sidebar.scss'
import logo from '../../assets/media/logo-2.png'
import { Link } from 'react-router-dom'
import { FaHome, FaUsers, FaCar, FaFileInvoiceDollar, FaUserClock, FaSignOutAlt } from 'react-icons/fa';
import { GiMechanicGarage } from 'react-icons/gi'

const Sidebar = () => {
    return <div className="sidebar-container full-height">
        <div className='center-container' style={{ padding: '20px' }}>
            <img src={logo} alt="logo" width="100%" />
        </div>
        <div className='sidebar-items'>
            <Link to="/" >
                <div className='active' > <FaHome />Home</div>
            </Link>
            <Link to="/customers" >
                <div><FaUsers /> Customers </div>
            </Link>
            <Link to="/" >
                <div><FaCar /> Vehicles</div>
            </Link>
            <Link to="/" >
                <div><FaFileInvoiceDollar /> Invoices</div>
            </Link>
            <Link to="/" >
                <div><GiMechanicGarage />Inventory</div>
            </Link>
            <Link to="/" >
                <div><FaUserClock />Staffs</div>
            </Link>
            <Link to="/" >
                <div><FaSignOutAlt />Signout</div>
            </Link>
        </div>
    </div>
}

export default Sidebar