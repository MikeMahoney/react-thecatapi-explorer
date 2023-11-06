import './AppLayoutStyles.scss'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface IAppLayout {}

const AppLayout: React.FC<IAppLayout> = () => {
  return (
    <div className='app-layout'>
      <Header />
      <main className='app-layout__content'>
        <Outlet />
      </main>
      <ToastContainer />
    </div>
  )
}

export default AppLayout
