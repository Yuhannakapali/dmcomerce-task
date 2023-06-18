import { defineStore } from 'pinia'
import type { IEmailTemplate } from '@/interface/EmailTemplate'

export const useEmailTemplateStore = defineStore('EmailTemplate', {
  state: () => {
    return {
      hasSet: false,
      data: {} as IEmailTemplate
    }
  },

  getters: {
    hasDataBeenSet: (state) => {
      return state.hasSet
    },

    getData: (state) => {
      return state.data
    }
  },

  actions: {
    setData(data: IEmailTemplate) {
      this.data = data
      this.hasSet = true
    },

    clearData() {
      this.data = {} as IEmailTemplate
      this.hasSet = false
    }
  }
})
