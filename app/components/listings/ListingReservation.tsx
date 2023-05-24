import React from 'react'
import { Range } from 'react-date-range'
import Calendar from '../Inputs/Calendar'

interface ListReservationProps {
	price: number
	totalPrice: number
	onChangeDate: (value: Range) => void
	dateRange: Range
	onSubmit: number
	disabled: number
	disabledDates: Date[]
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
	return (
		<div className='overflow-hidden bg-white border rounded-xl border-neutral-200'>
			<div className='flex flex-row items-center gap-1 p-4'>
				<div className='text-2xl font-semibold'>$ {price}</div>
				<div className='font-light text-neutral-600'>night</div>
			</div>
			<hr />
			<Calendar
				value={dateRange}
				disabledDates={disabledDates}
				onChange={(value) => onChangeDate(value.selection)}
			/>
			<hr />
			<div className='flex flex-row items-center justify-between p-4 text-lg font-semibold'>
				<div>Total</div>
				<div>$ {totalPrice}</div>
			</div>
		</div>
	)
}
