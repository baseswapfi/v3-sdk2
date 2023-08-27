export const FACTORY_ADDRESS = '0xbA7e9dB37fB8496F8a23B50d11bD764D34BdEAcf'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

// export const POOL_INIT_CODE_HASH = '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54'
// TODO: This is what I got from parsing the code but may be wrong. Above is Uni's V3 one to try
export const POOL_INIT_CODE_HASH = '0xbb146dec9ccf1c9c5c42c6e0656c2ab950ecfc0c6b935864e63ac10b9ce008a0' // New one after updating fees myself

/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export enum FeeAmount {
  LOWEST = 80,
  LOW = 450,
  MEDIUM = 2500,
  HIGH = 10000
}

/**
 * The default factory tick spacings by fee amount.
 */
export const TICK_SPACINGS: { [amount in FeeAmount]: number } = {
  [FeeAmount.LOWEST]: 1,
  [FeeAmount.LOW]: 10,
  [FeeAmount.MEDIUM]: 60,
  [FeeAmount.HIGH]: 200
}
