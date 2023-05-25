import React from 'react'

interface TripClientProps {
	currentUser: any
	reservations: any
}

export default function TripClient({
	currentUser,
	reservations,
}: TripClientProps) {
	return <div>My trips.</div>
}
