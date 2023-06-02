import React from 'react'
import ClientOnly from '../components/ClientOnly'
import getCurrentUser from '../actions/getCurrentUser'
import getResercations from '../actions/getReservation'
import EmptyState from '../components/EmptyState'
import ReservationsClient from './ReservationsClient'

export default async function page() {
	const currentUser = await getCurrentUser()

	if (!currentUser) {
		return (
			<ClientOnly>
				<EmptyState title='Unauthorized' subtitle='Please login' />
			</ClientOnly>
		)
	}

	const reservations = await getResercations({
		authorId: currentUser.id,
	})

	if (reservations.length === 0) {
		return (
			<ClientOnly>
				<EmptyState
					title='No reservations found'
					subtitle='Looks like you have no resercations on your propertie'
				/>
			</ClientOnly>
		)
	}

	return (
		<ClientOnly>
			<ReservationsClient
				reservations={reservations}
				currentUser={currentUser}
			/>
		</ClientOnly>
	)
}
