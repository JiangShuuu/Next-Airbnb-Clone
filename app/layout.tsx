import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from './components/Navbars'
import RegisterModal from './components/Modals/RegisterModal'
import LoginModal from './components/Modals/LoginModal'
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
				<LoginModal />
				<RegisterModal />
				<Navbar />
				{children}
			</body>
		</html>
	)
}
