import './LayoutStyles.scss'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

interface ILayout {}

const Layout: React.FC<ILayout> = () => {
  return (
    <div className='layout'>
      <Header />
      <main className='layout__content'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
