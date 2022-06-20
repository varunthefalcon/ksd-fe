import '../../assets/scss/sidebar.scss'
import logo from '../../assets/media/logo-2.png'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return <div className="sidebar-container full-height">
        <div className='center-container' style={{ padding: '20px' }}>
            <img src={logo} alt="logo" width="100%" />
        </div>
        <div className='sidebar-items'>
            <div>
                <Link to="/" >Home</Link>
            </div>
            <div>
                <Link to="/" >Customer</Link>
            </div>
            <div>
                <Link to="/" >Vehicles</Link>
            </div>
            <div>
                <Link to="/" >Invoices</Link>
            </div>
            <div>
                <Link to="/" >Inventory</Link>
            </div>
            <div>
                <Link to="/" >Staffs</Link>
            </div>
            <div>
                <Link to="/" >Signout</Link>
            </div>
        </div>
    </div>
}

export default Sidebar