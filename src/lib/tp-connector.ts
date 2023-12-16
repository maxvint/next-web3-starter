import { Connector, Chain } from 'wagmi'
// import { CoolWalletOptions, CoolWalletProvider } from 'cool-wallet-sdk'

const tp = require('tp-js-sdk')

export class TokenPocketConnector extends Connector {
  readonly id = 'tokenPocket'
  readonly name = 'Token Pocket'
  readonly ready = true

  provider?: any

  constructor(config: { chains?: Chain[]; options: any }) {
    super(config)
  }

  async getProvider() {
    if (!this.provider) {
      this.provider = tp.getProvider()
    }
    return this.provider
  }

  connect() {
    console.log(this.provider)
    return this.provider
  }

  disconnect() {
    return tp.disconnect()
  }

  getAccount() {
    return tp.getAccount()
  }

  isConnected() {
    return tp.isConnected()
  }

  getChainId() {
    return tp.getChainId()
  }

  getWalletClient() {
    return tp.getWalletClient()
  }

  async isAuthorized() {
    return true
  }

  onAccountsChanged() {
    return tp.onAccountsChanged()
  }

  onChainChanged() {
    return tp.onChainChanged()
  }

  onDisconnect() {
    return tp.onDisconnect()
  }

  // Implement other methods
  // connect, disconnect, getAccount, etc.
}
