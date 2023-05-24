import React from 'react'
import { DateRange, RangeKeyDict, Range } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

interface CalendarProps {
	value: Range
	disabledDates?: Date[]
	onChange: (value: RangeKeyDict) => void
}

export default function Calendar({
	value,
	onChange,
	disabledDates,
}: CalendarProps) {
	return (
		<DateRange
			rangeColors={['#262626']}
			ranges={[value]}
			date={new Date()}
			onChange={onChange}
			showDateDisplay={false}
			minDate={new Date()}
			disabledDates={disabledDates}
		/>
	)
}
