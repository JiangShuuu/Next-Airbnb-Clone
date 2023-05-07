import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from './components/Navbars'
import Modals from './components/Modals'
import ClientOnly from './components/ClientOnly'

export const metadata = {
	title: 'Airbnb',
	description: 'Airbnb clone',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Modals actionLabel='Submit' isOpen title='hello' />
				<Navbar />
				{children}
			</body>
		</html>
	)
}
