import { defineStore } from 'pinia'
import { stores } from '~/stores'

const state = {
  showSideNav: true,
}

export const useSettingsStore = defineStore('settings', {
  state: () => state,
})

export function getSettingsStore() {
  return useSettingsStore(stores)
}
