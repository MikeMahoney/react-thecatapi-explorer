import React from 'react'

interface IUploadIcon {
  className?: string
}

export const UploadIcon: React.FC<IUploadIcon> = ({ className = '' }) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      <path d='M9.707 7.707 11 6.414V16a1 1 0 0 0 2 0V6.414l1.293 1.293a1 1 0 0 0 1.414-1.414l-3-3a1 1 0 0 0-1.416 0l-3 3a1 1 0 0 0 1.416 1.414zM17 19H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2z' />
    </svg>
  )
}
