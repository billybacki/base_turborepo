import invariant from 'tiny-invariant'
import { validateAndParseSolanaAddress } from './utils'
import { PublicKey } from '@solana/web3.js'

const SOL_TOKEN = {
  name: 'SOL',
  symbol: 'SOL',
  logo: '/images/token/sol.png',
  contract: 'So11111111111111111111111111111111111111112',
  decimals: 9
}

export class SolanaCurrency {
  public readonly address: PublicKey
  public readonly decimals: number
  public readonly symbol: string
  public readonly name?: string
  public readonly logo?: string

  constructor(address: string | PublicKey, decimals: number, symbol: string, name?: string, logo?: string) {
    invariant(decimals >= 0 && decimals <= 255, 'DECIMALS ERROR')

    this.address = validateAndParseSolanaAddress(address)
    this.decimals = decimals
    this.symbol = symbol
    this.name = name
    this.logo = logo
  }

  public equals(other: any): boolean {
    if (this === other) return true
    return other instanceof SolanaCurrency && this.address.equals(other.address)
  }

  public static getNativeCurrency() {
    return new SolanaCurrency(SOL_TOKEN.contract, SOL_TOKEN.decimals, SOL_TOKEN.symbol, SOL_TOKEN.name, SOL_TOKEN.logo)
  }

  public get isNative(): boolean {
    return this.address.equals(new PublicKey(SOL_TOKEN.contract))
  }
}
