<template>
  <div class="container d-flex justify-content-center">
    <div class="p-5">
      <div class="p-3 mb-5">
        <h1 class="text-center title">{{ form?.title }}</h1>
        <p class="text-center sub-title">{{ form?.description }}</p>
      </div>
      <form @submit.prevent="handleSubmit" class="text-center">
        <div v-for="field in form.fields" :key="field.id">
          <input
            class="custom-field mb-4"
            v-if="field.type === 'text' || field.type === 'email'"
            v-model="formData[field.id]"
            :id="field.id"
            :type="field.type"
            :placeholder="`${field.placeholder} ${field.required ? ' required *' : ''}`"
            :required="field.required"
          />

          <div v-if="field.type === 'checkbox'" class="checkbox-container">
            <label class="cursor-pointer checkbox-label">
              <input type="checkbox" name="" id="" class="" /> {{ field.label }}</label
            >
          </div>
          <div
            v-if="field.type === 'submit'"
            class="d-flex align-items-center justify-content-center mt-4"
          >
            <button :id="field.id" :required="field.required" class="btn-submit btn">
              {{ field.label }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import { useLoading } from 'vue-loading-overlay'
import { useNewsletterStore } from '@/stores/NewsLetter'
import type { INewsletterSubscription } from '../interface/NewsletterSubscription'

export default {
  setup() {
    const form = ref({} as INewsletterSubscription)
    const formData = ref({} as any)
    const store = useNewsletterStore()
    const $loading = useLoading({
      // options
      isFullPage: true
    })

    const simulateApi = (): Promise<INewsletterSubscription> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            id: 'newsletter-subscription',
            title: 'Sottoscrizione Newsletter',
            description:
              'Iscriviti alla nostra newsletter per ricevere aggiornamenti e promozioni esclusive!',
            fields: [
              {
                id: 'name',
                label: 'Nome',
                type: 'text',
                placeholder: 'Inserisci il tuo nome',
                required: true
              },
              {
                id: 'email',
                label: 'Indirizzo email',
                type: 'email',
                placeholder: 'Inserisci la tua email',
                required: true
              },
              {
                id: 'accept_terms',
                label: 'Accetto i termini e le condizioni',
                type: 'checkbox',
                required: true
              },
              {
                id: 'submit',
                label: 'Iscriviti',
                type: 'submit',
                required: false
              }
            ]
          } as INewsletterSubscription)
        }, 1000)
      })
    }
    onMounted(async () => {
      let data: INewsletterSubscription
      if (!store.dataHasSet) {
        let loader = $loading.show({})
        data = await simulateApi()
        if (data) {
          store.setData(data)
        }
        loader.hide()
      } else {
        data = store.data
      }
      form.value = data
      formData.value = data.fields.reduce((acc: any, field: any) => {
        acc[field.id] = ''
        return acc
      }, {})
    })

    const handleSubmit = () => {
      console.log(formData.value)
    }

    return {
      form,
      formData,
      handleSubmit
    }
  }
}
</script>
