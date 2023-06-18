<template>
  <div class="container d-flex justify-content-center">
    <div class="">
      <h5 class="text-center title text-underlined tuo-8">Dmcommerce Task</h5>
      <p class="">
        The task involves creating a Vue 3 application with two routes: "example—template" and
        "newsletter—subscription" . A simple menu to navigate between the two routes should be
        always visible When a route is loaded, the application should make an API call to obtain a
        JSON object that describes a form to be rendered in the view. The JSON objects downloaded
        via API calls should be saved in a pin ia storage, and subsequently loaded from storage
        instead Of using an HTTP call if the same route is loaded again in the same session
        TypeScript should be used if possible, but it's Okay to use JavaScript if you re not
        experienced with TypeScript. Attached are: — two JSON files to simulate API calls via fetch;
        — a sample design for the form (it doesn't need to be pixel—perfect, serves as an indication
        of style).
      </p>
      <h6 class="text-center sub-title">Mock Provided</h6>
      <div class="d-flex justify-content-center">
        <img src="@/assets/mockup.png" class="mockup-image" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
