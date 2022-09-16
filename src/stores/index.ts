import { createPinia } from 'pinia'

const stores = createPinia()

export { stores }

export * from './modules/settings'

export default stores
