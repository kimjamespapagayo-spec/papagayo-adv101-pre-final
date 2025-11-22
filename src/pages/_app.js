import '../styles/globals.css'
import Head from 'next/head'
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className={`${geistSans.variable} ${geistMono.variable} min-h-screen`}> 
				<Component {...pageProps} />
			</div>
		</>
	)
}

