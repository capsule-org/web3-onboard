import { ConstructorOpts, Environment } from '@usecapsule/web-sdk'
import { CapsuleModalV2Props } from "@usecapsule/react-sdk/dist/modal/types/modalProps";

/**
 * Options for initializing the Capsule environment.
 *
 * @typedef {Object} CapsuleInitOptions
 * @property {Environment} environment - Specifies the working environment for the application.
 *           'DEVELOPMENT' should be used for testing with non-real funds and wallets on a testnet.
 *           'PRODUCTION' should be used when the application is ready for live deployment with real transactions.
 * @property {string} [apiKey] - API key is necessary for performing transactions and wallet creation.
 *           This key needs to be obtained by completing a form available at https://7f4shq8oyfd.typeform.com/to/F86oVLhb.
 */
export type CapsuleInitOptions = {
  environment: string
  apiKey: string
  constructorOpts?: ConstructorOpts
  appName: string
  modalProps?: CapsuleModalV2Props
}
