import type { AppProps } from 'next/app'

import '@/styles/globals.css'

// next
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { useRouter } from 'next/router'

// config
import { fontSans, fontMono } from '@config/fonts'

// redux
import { Provider as ReduxProvider } from 'react-redux'
import store from '../state'

// updater
import AuthUpadter from '@state/auth/updater'

// wagmi
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { TokenPocketConnector } from '@lib/tp-connector'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()],
)

const wagmiConfig = createConfig({
	autoConnect: true,
	connectors: [
		new MetaMaskConnector({ chains }),
		new TokenPocketConnector({ chains, options: {} })
	],
	publicClient,
	webSocketPublicClient,
})

// appName: 'Puffer',
//infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
//alchemyId:  process.env.NEXT_PUBLIC_ALCHEMY_ID,
// chains: [filecoinHyperspace],


const Updaters = () => (
  <>
    <AuthUpadter />
  </>
)

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

	return (
		<ReduxProvider store={store}>
			<NextUIProvider navigate={router.push}>
				<NextThemesProvider>
					<WagmiConfig config={wagmiConfig}>
						<Updaters />
						<Component {...pageProps} />
					</WagmiConfig>
				</NextThemesProvider>
			</NextUIProvider>
		</ReduxProvider>
	)
}

export const fonts = {
	sans: fontSans.style.fontFamily,
	mono: fontMono.style.fontFamily,
}
