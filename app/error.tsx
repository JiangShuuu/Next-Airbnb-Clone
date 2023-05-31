'use client'
import React, { useEffect } from 'react'
import EmptyState from './components/EmptyState'

interface ErrorStateProps {
	error: Error
}

export default function error({ error }: ErrorStateProps) {
	useEffect(() => {
		console.log(error)
	}, [error])

	return <EmptyState title='Uh Oh' subtitle='Somethings went wrong!' />
}
