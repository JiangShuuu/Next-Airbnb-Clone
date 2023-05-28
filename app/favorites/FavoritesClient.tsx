import React from 'react'
import { SafeListing, SafeUser } from '../types'
import Container from '../components/Container'
import Heading from '../components/Heading'
import ListingCard from '../components/listings/ListingCard'

interface FavoritesClientProps {
	listings: SafeListing[]
	currentUser?: SafeUser | null
}

export default function FavoritesClient({
	listings,
	currentUser,
}: FavoritesClientProps) {
	return (
		<Container>
			<Heading
				title='Favorites'
				subtitle='List of places you have favorited!'
			/>
			<div className='grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
				{listings.map((item) => {
					return (
						<ListingCard currentUser={currentUser} key={item.id} data={item} />
					)
				})}
			</div>
		</Container>
	)
}
