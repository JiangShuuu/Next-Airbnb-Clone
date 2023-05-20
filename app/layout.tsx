import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from './components/Navbars'
import RegisterModal from './components/Modals/RegisterModal'
import LoginModal from './components/Modals/LoginModal'
import ClientOnly from './components/ClientOnly'
import ToasterProvider from './providers/ToasterProvider'
import getCurrentUser from './actions/getCurrentUser'
import RentModal from './components/Modals/RentModal'

export const metadata = {
	title: 'Airbnb',
	description: 'Airbnb clone',
}

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const currentUser = await getCurrentUser()

	return (
		<html lang='en'>
			<body className={inter.className}>
				<ClientOnly>
					<ToasterProvider />
					<RentModal />
					<LoginModal />
					<RegisterModal />
					<Navbar currentUser={currentUser} />
				</ClientOnly>
				<div className='pb-20 pt-28'>{children}</div>
			</body>
		</html>
	)
}
