import './LayoutStyles.scss'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface ILayout {}

const Layout: React.FC<ILayout> = () => {
  return (
    <div className='layout'>
      <Header />
      <main className='layout__content'>
        <Outlet />
      </main>
      <ToastContainer />
    </div>
  )
}

export default Layout
