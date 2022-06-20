import { Routes, Route } from 'react-router-dom'
import Customers from '../../pages/customers'
import Staffs from '../../pages/staff'
import Dashboard from '../../pages/dashboard'
import Sidebar from '../sidebar'
import Header from '../header'

const DashboardHOC = () => {
    return <>
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <main className='full-width'>
                <Header />
                <content>
                    <Routes>
                        <Route index element={<Dashboard />} />
                        <Route path="customers" element={<Customers />} />
                        <Route path="staff" element={<Staffs />} />
                    </Routes>
                </content>
            </main>
        </div>
    </>
}

export default DashboardHOC