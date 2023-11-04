import { Link } from 'react-router-dom'
import './HeaderStyles.scss'
import { UploadIcon } from 'components/common/Icons/UploadIcon/UploadIcon'
import { PawIcon } from 'components/common/Icons/PawIcon/PawIcon'

interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <header className='header'>
      <Link className='header__title' to={'/'}>
        {'CATS!'}
        <PawIcon />
      </Link>
      <Link className='header__upload-link' to={'/upload'}>
        {'Upload'}
        <UploadIcon />
      </Link>
    </header>
  )
}

export default Header
