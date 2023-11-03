import { ReactNode } from 'react'
import './TabsStyles.scss'

interface ITab {
  title: string
  selected: boolean
  onClick: () => void
}

export const Tab: React.FC<ITab> = ({ title, selected, onClick }: ITab) => {
  return (
    <div className={`tab ${selected && 'tab--selected'}`} onClick={onClick}>
      {title}
    </div>
  )
}

interface ITabs {
  children: ReactNode
}

export const Tabs: React.FC<ITabs> = ({ children }: ITabs) => {
  return <div className='tabs'>{children}</div>
}
