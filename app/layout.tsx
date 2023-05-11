import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from './components/Navbars'
import Modals from './components/Modal'
import ClientOnly from './components/ClientOnly'
import ToasterProvider from './providers/ToasterProvider'

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
				<ToasterProvider />
				<Modals />
				<Navbar />
				{children}
			</body>
		</html>
	)
}
