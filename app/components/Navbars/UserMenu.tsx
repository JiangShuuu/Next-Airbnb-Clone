'use clinet'

import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar'

export default function UserMenu() {
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="hidden px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer md:block hover:bg-neutral-100">
          Airbnb your home
        </div>
        <div className="flex flex-row items-center gap-3 p-4 transition border rounded-full cursor-pointer md:py-1 md:px-2 border-neutral-200 hover:shadow-md">
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  )
}
