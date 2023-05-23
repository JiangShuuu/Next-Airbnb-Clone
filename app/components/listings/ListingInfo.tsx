'use client'
import React from 'react'
import { IconType } from 'react-icons/lib'
import useCountries from '~/app/hooks/useCountry'
import { SafeUser } from '~/app/types'
import Avatar from '../Avatar'

interface ListingInfoProps {
	user: SafeUser
	description: string
	guestCount: number
	roomCount: number
	bathroomCount: number
	category:
		| {
				icon: IconType
				label: string
				description: string
		  }
		| undefined
	locationValue: string
}

export default function ListingInfo({
	user,
	description,
	guestCount,
	roomCount,
	bathroomCount,
	category,
	locationValue,
}: ListingInfoProps) {
	const { getByValue } = useCountries()
	const coordinate = getByValue(locationValue)?.latlng
	return (
		<div className='flex flex-col col-span-4 gap-8'>
			<div className='flex flex-col gap-2'>
				<div className='flex flex-row items-center gap-2 text-xl font-semibold'>
					<div>Hosted by {user?.name}</div>
					<Avatar src={user?.image} />
				</div>
			</div>
		</div>
	)
}
