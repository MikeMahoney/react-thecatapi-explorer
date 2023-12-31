import React from 'react'

interface IHeartIcon {
  className?: string
}

export const HeartIcon: React.FC<IHeartIcon> = ({ className = '' }) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
    >
      <path d='M16 29.556a1.993 1.993 0 0 1-1.414-.585L4.294 18.679C1.058 15.444.513 10.456 2.999 6.823c1.349-1.973 3.29-3.13 5.613-3.346 2.538-.235 5.24.692 7.388 2.509 2.148-1.816 4.852-2.744 7.388-2.509 2.323.216 4.264 1.373 5.613 3.346 2.486 3.634 1.941 8.621-1.295 11.856L17.414 28.971c-.39.389-.902.585-1.414.585zM9.381 5.441a6.64 6.64 0 0 0-.584.026c-1.711.16-3.145 1.018-4.148 2.484-1.942 2.841-1.497 6.758 1.059 9.313L16 27.557l10.292-10.292c2.556-2.556 3.001-6.473 1.059-9.313-1.002-1.466-2.437-2.324-4.147-2.483-2.211-.201-4.698.783-6.496 2.582a.999.999 0 0 1-1.414 0c-1.642-1.643-3.859-2.61-5.913-2.61z' />
    </svg>
  )
}
