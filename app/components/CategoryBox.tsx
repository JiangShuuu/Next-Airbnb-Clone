'use client'

import React, { useCallback } from 'react'
import { IconType } from 'react-icons/lib'
import { useRouter, useSearchParams } from 'next/navigation'
import qs from 'query-string'

interface CategoryBoxProps {
	icon: IconType
	label: string
	selected?: boolean
}

export default function CategoryBox({
	icon: Icon,
	label,
	selected,
}: CategoryBoxProps) {
	const router = useRouter()
	const params = useSearchParams()

	const handleClick = useCallback(() => {
		let currentQuery = {}

		if (params) {
			currentQuery = qs.parse(params.toString())
		}

		const updateQuery: any = {
			...currentQuery,
			category: label,
		}

		if (params?.get('category') === label) {
			delete updateQuery.category
		}

		const url = qs.stringifyUrl(
			{
				url: '/',
				query: updateQuery,
			},
			{ skipNull: true },
		)

		router.push(url)
	}, [label, params, router])

	return (
		<div
			onClick={handleClick}
			className={`flex flex-col items-center justify-center gap-2 p-3 transition border-b-2 cursor-pointer hover:text-neutral-800 ${
				selected ? 'border-b-neutral-800' : 'border-transparent'
			} ${selected ? 'text-neutral-800' : 'text-neutral-500'}`}
		>
			<Icon size={26} />
			<div className='text-sm font-medium'>{label}</div>
		</div>
	)
}
