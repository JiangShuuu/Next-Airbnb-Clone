import React from 'react'
import EmptyState from '../components/EmptyState'
import ClientOnly from '../components/ClientOnly'
import getCurrentUser from '../actions/getCurrentUser'
import getResercations from '../actions/getReservation'
import TripClient from './TripClient'

export default async function TripsPage() {
	const currentUser = await getCurrentUser()

	if (!currentUser) {
		return (
			<ClientOnly>
				<EmptyState title='Unauthorized' subtitle='Please login' />
			</ClientOnly>
		)
	}

	const reservations = await getResercations({
		userId: currentUser.id,
	})

	if (reservations.length === 0) {
		return (
			<ClientOnly>
				<EmptyState
					title='No trips found'
					subtitle='Looks like you havent reserved any trips.'
				/>
			</ClientOnly>
		)
	}

	return (
		<ClientOnly>
			<TripClient reservations={reservations} currentUser={currentUser} />
		</ClientOnly>
	)
}
