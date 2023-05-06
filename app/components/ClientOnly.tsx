import React, { useState, useEffect } from 'react'

export default function ClientOnly() {
	const [hasMounted, setHasMounted] = useState(false)
	return <div>ClientOnly</div>
}
