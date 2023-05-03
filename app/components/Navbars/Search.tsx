'use clinet'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

export default function Search() {
  return (
    <div className="w-full py-2 transition border rounded-full shadow-sm cursor-pointer md:w-auto hover:shadow-md">
      <div className="flex flex-row items-center justify-between">
        <div className="px-6 text-sm font-semibold">AnyWhere</div>
        <div className="flex-1 hidden px-6 text-sm font-semibold text-center sm:block border-x">
          Any Week
        </div>
        <div className="flex flex-row items-center gap-3 pl-6 pr-2 text-sm text-gray-600">
          <div className="hidden sm:block">Add Guests</div>
          <div className="p-2 font-semibold text-white rounded-full bg-rose-500">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  )
}
