import React from 'react'
import getCurrentUser from '~/app/actions/getCurrentUser'
import getListingById from '~/app/actions/getListingById'
import ClientOnly from '~/app/components/ClientOnly'
import EmptyState from '~/app/components/EmptyState'
import ListingClient from './ListingClient'
import getReservation from '~/app/actions/getReservation'

interface IParams {
	listingId?: string
}

export default async function ListingPage({ params }: { params: IParams }) {
	const listing = await getListingById(params)
	const resercations = await getReservation(params)
	const currentUser = await getCurrentUser()

	if (listing) {
		return (
			<ClientOnly>
				<ListingClient
					resercations={resercations}
					listing={listing}
					currentUser={currentUser}
				/>
			</ClientOnly>
		)
	}

	return <ClientOnly>dddd</ClientOnly>
}
