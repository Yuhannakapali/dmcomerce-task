import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { INewsletterSubscription } from '@/interface/NewsletterSubscription'

export const useNewsletterStore = defineStore('Newsletter', () => {
  const dataHasSet = ref(false)
  const data = ref({} as INewsletterSubscription)
  const setData = (newValue: INewsletterSubscription) => {
    dataHasSet.value = true
    data.value = newValue
  }
  const clearData = () => {
    dataHasSet.value = false
    data.value = {} as INewsletterSubscription
  }

  return { dataHasSet, data, setData, clearData }
})
