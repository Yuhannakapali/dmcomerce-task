<template>
  <div class="container d-flex justify-content-between mt-2">
    <div class="branding">
      <h2>
        <RouterLink to="/">Dmcommerce</RouterLink>
      </h2>
    </div>
    <nav>
      <b-nav>
        <b-nav-item>
          <RouterLink to="/example-template"> Example Template</RouterLink>
        </b-nav-item>
        <b-nav-item>
          <RouterLink to="/newsletter-subscription">Newsletter Subscription</RouterLink>
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
