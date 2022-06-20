import { Routes, Route } from 'react-router-dom'
import Oops404 from './404'
import DashboardHOC from '../components/DashboardHOC'
import SignIn from './signin'

const Pages = () => {
  return <>
    <Routes>
      <Route index element={<SignIn />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="dashboard/*" element={<DashboardHOC />} />
      <Route path="*" element={<Oops404 />} />
    </Routes>
  </>
}

export default Pages