import React, { FC } from 'react'

const Header: FC = () => {
  return (
    <header className="px-6 py-4 bg-blue-500">
      <h1>
        <a className="text-white font-bold md:text-xl" href="/">
          Dog searching App
        </a>
      </h1>
    </header>
  )
}

export default Header
