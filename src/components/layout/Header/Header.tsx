import './HeaderStyles.scss'

interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <div className='header'>
      <h1 className='header__title'>{'CATS!'}</h1>
    </div>
  )
}

export default Header
