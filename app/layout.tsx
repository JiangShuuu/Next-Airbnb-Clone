import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from './components/Navbars'
import Modals from './components/Modals'
import RegisterModal from './components/Modals/RegisterModal'
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
				<RegisterModal />
				<Navbar />
				{children}
			</body>
		</html>
	)
}
