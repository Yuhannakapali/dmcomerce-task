<template>
  <div class="container d-flex justify-content-center">
    <div class="p-5">
      <div class="title p-3 mt-3 mb-3">
        <h1 class="text-center title">{{ form?.title }}</h1>
        <p class="text-center sub-title">{{ form?.description }}</p>
      </div>
      <form @submit.prevent="handleSubmit">
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
          <div
            v-if="field.type === 'submit'"
            class="d-flex align-items-center justify-content-center mt-4"
          >
            <button :id="field.id" :required="field.required" class="btn btn-submit">
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
import { useEmailTemplateStore } from '@/stores/ExampleTemplate'
import type { IEmailTemplate } from '../interface/EmailTemplate'

export default {
  setup() {
    const form = ref({} as IEmailTemplate)
    const formData = ref({} as any)
    const store = useEmailTemplateStore()

    const simulateApi = (): Promise<IEmailTemplate> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            id: 'example-template',
            title: 'Template di esempio',
            description: 'Questo è un template di esempio',
            fields: [
              {
                id: 'first_name',
                label: 'Nome',
                type: 'text',
                placeholder: 'Inserisci il tuo nome',
                required: true
              },
              {
                id: 'last_name',
                label: 'Cognome',
                type: 'text',
                placeholder: 'Inserisci il tuo cognome',
                required: true
              },
              {
                id: 'email',
                label: 'Email',
                type: 'email',
                placeholder: 'Inserisci la tua email',
                required: true
              },
              {
                id: 'submit',
                label: 'Invia',
                type: 'submit',
                required: false
              }
            ]
          })
        }, 1000)
      })
    }
    onMounted(async () => {
      let data: IEmailTemplate
      if (!store.hasDataBeenSet) {
        data = await simulateApi()
        store.setData(data)
      } else {
        data = store.getData
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
