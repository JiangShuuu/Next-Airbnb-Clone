import React from 'react'
import { Range } from 'react-date-range'

interface ListReservationProps {
	price: number
	totalPrice: number
	onChangeDate: (value: Range) => void
	dateRange: Range
	onSubmit: number
	disabled: number
	disabledDates: number
}

export default function ListingReservation({
	price,
	totalPrice,
	onChangeDate,
	dateRange,
	onSubmit,
	disabled,
	disabledDates,
}: ListReservationProps) {
	return <div>ListingReservation</div>
}
