<template>
  <div class="container d-flex justify-content-between p-3">
    <div class="branding">
      <RouterLink to="/">
        <h2 style="font-weight: 400; font-style: italic">Dmcommerce</h2>
      </RouterLink>
    </div>
    <nav>
      <b-nav>
        <b-nav-item>
          <RouterLink to="/example-template"><h6>Example Template</h6> </RouterLink>
        </b-nav-item>
        <b-nav-item>
          <RouterLink to="/newsletter-subscription"><h6>Newsletter Subscription</h6></RouterLink>
        </b-nav-item>
      </b-nav>
    </nav>
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
