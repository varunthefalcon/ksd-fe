import { Routes, Route } from 'react-router-dom'
import Dashboard from '../../pages/dashboard'
import Sidebar from '../sidebar'
import Header from '../header'
import Customers from '../../pages/customers'
import Staffs from '../../pages/staff'
import Vehicles from '../../pages/vehicles'


const DashboardHOC = () => {
    return <>
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <main className='full-width'>
                <Header />
                <div className='p-15 pr-30'>
                    <Routes>
                        <Route path="home" element={<Dashboard />} />
                        <Route path="customers" element={<Customers />} />
                        <Route path="staffs" element={<Staffs />} />
                        <Route path="vehicles" element={<Vehicles />} />
                    </Routes>
                </div>
            </main>
        </div>
    </>
}

export default DashboardHOC