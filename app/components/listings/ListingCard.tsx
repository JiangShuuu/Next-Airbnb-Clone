'use client'

import { Listing, Reservation } from '@prisma/client'
import { useRouter } from 'next/navigation'
import React, { useCallback, useMemo } from 'react'
import useCountries from '~/app/hooks/useCountry'
import { SafeUser } from '~/app/types'
import { format } from 'date-fns'
import Image from 'next/image'

interface ListingCardProps {
	data: Listing
	reservation?: Reservation
	onAction?: (id: string) => void
	disabled?: boolean
	actionLabel?: string
	actionId?: string
	currentUser?: SafeUser | null
}

export default function ListingCard({
	data,
	reservation,
	onAction,
	disabled,
	actionLabel,
	actionId = '',
	currentUser,
}: ListingCardProps) {
	const router = useRouter()
	const { getByValue } = useCountries()
	const location = getByValue(data.locationValue)
	const handleCancel = useCallback(
		(e: React.MouseEvent<HTMLButtonElement>) => {
			e.stopPropagation()
			if (disabled) return

			onAction?.(actionId)
		},
		[onAction, actionId],
	)

	const price = useMemo(() => {
		if (reservation) {
			return reservation.totalPrice
		}

		return data.price
	}, [reservation, data.price])

	const reservationDate = useMemo(() => {
		if (!reservation) return null

		const start = new Date(reservation.startDate)
		const end = new Date(reservation.endDate)

		return `${format(start, 'PP')} - ${format(end, 'PP')}`
	}, [reservation])

	return (
		<div
			onClick={() => router.push(`/listing/${data.id}`)}
			className='col-span-1 cursor-pointer group'
		>
			<div className='flex flex-col w-full gap-2'>
				<div className='relative w-full overflow-hidden aspect-square rounded-xl'>
					<Image
						fill
						alt='Listing'
						src={data.imageSrc}
						className='object-cover w-full h-full transition group-hover:scale-110'
					/>
				</div>
			</div>
		</div>
	)
}
