import React from 'react'

const EachNotif = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div
      className=' bg-slate-100 rounded-lg p-5 text-center font-semibold my-5'
    >
      {children}
    </div>
  )
}

export default EachNotif