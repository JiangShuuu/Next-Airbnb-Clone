'use client'
import { Reservation } from '@prisma/client'
import React, { useMemo } from 'react'
import Container from '~/app/components/Container'
import { categories } from '~/app/components/Navbars/Categories'
import ListingHead from '~/app/components/listings/ListingHead'
import { SafeUser, safeListing } from '~/app/types'

interface ListingClientProps {
	reservation?: Reservation[]
	listing: safeListing & {
		user: SafeUser
	}
	currentUser?: SafeUser | null
}

export default function ListingClient({
	listing,
	currentUser,
}: ListingClientProps) {
	const category = useMemo(() => {
		return categories.find((item) => item.label === listing.category)
	}, [listing])

	return (
		<Container>
			<div className='max-w-screen-lg mx-auto'>
				<div className='flex flex-col gap-6'>
					<ListingHead
						title={listing.title}
						imageSrc={listing.imageSrc}
						locationValue={listing.locationValue}
						id={listing.id}
						currentUser={currentUser}
					/>
				</div>
			</div>
		</Container>
	)
}
