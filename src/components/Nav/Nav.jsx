import React from 'react'
import Image from 'next/image'
import menu from "@icons/menu.svg"

const Nav = () => {
  return (
    <nav className="h-12 w-full border-b border-b-lines flex justify-between px-4 items-center text-gray text-label">
      <p>juan-pablo-ferro</p>
      <Image src={menu} />
    </nav>
  )
}

export default Nav