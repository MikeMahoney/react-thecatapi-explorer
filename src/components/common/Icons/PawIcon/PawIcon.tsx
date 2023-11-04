import React from 'react'

interface IPawIcon {
  className?: string
}

export const PawIcon: React.FC<IPawIcon> = ({ className = '' }) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='35 32 60 60'
    >
      <path d='M47.238 78.392 59.147 64.07c2.045-3.536 7.072-3.536 9.117 0l11.909 14.322c2.074 3.586-.468 8.108-4.559 8.108H51.797c-4.091 0-6.633-4.521-4.559-8.108zm-5.529-22.974c-2.822 1.17-3.558 5.808-1.642 10.359s5.756 7.291 8.578 6.121c2.822-1.17 3.558-5.808 1.642-10.359s-5.756-7.291-8.578-6.121zm19.37-6.71c1.392 4.743.14 9.265-2.795 10.101-2.935.836-6.443-2.331-7.835-7.074s-.14-9.265 2.795-10.101c2.936-.836 6.444 2.331 7.835 7.074zm16.634 12.831c-1.915 4.551-1.18 9.188 1.642 10.359 2.822 1.17 6.663-1.57 8.578-6.121s1.18-9.188-1.642-10.359c-2.822-1.17-6.662 1.57-8.578 6.121zm-2.958-19.905c2.935.836 4.187 5.358 2.795 10.101s-4.899 7.91-7.835 7.074c-2.935-.836-4.187-5.358-2.795-10.101s4.9-7.91 7.835-7.074z' />
    </svg>
  )
}