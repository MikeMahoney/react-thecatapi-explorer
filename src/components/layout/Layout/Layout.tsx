import './LayoutStyles.scss'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

interface ILayout {}

const Layout: React.FC<ILayout> = () => {
  return (
    <div className='layout'>
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout
