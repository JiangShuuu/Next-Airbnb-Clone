'use client'
import React from 'react'
import useCountries from '~/app/hooks/useCountry'
import { SafeUser } from '~/app/types'
import Heading from '../Heading'
import Image from 'next/image'

interface ListingHeadProps {
	title: string
	imageSrc: string
	locationValue: string
	id: string
	currentUser?: SafeUser | null
}

export default function ListingHead({
	title,
	locationValue,
	id,
	currentUser,
	imageSrc,
}: ListingHeadProps) {
	const { getByValue } = useCountries()
	const location = getByValue(locationValue)
	return (
		<>
			<Heading
				title={title}
				subtitle={`${location?.region}, ${location?.label}`}
			/>
			<div className='w-full h-[60vh] overflow-hidden rounded-xl relative'>
				<Image
					alt='Image'
					src={imageSrc}
					fill
					className='object-cover w-full'
				/>
				<p>123</p>
			</div>
		</>
	)
}
