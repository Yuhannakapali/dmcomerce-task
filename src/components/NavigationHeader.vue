<template>
  <div class="container d-flex justify-content-between p-3 align-items-center">
    <div class="branding">
      <RouterLink to="/">
        <div class="d-flex align-items-center">
          <img src="@/assets/logo.png" alt="" />
          <div>
            <p class="branding">DMCOMMERCE</p>
            <p class="branding-subtitle">Smart Data Driven Marketing for eCommerce</p>
          </div>
        </div>
      </RouterLink>
    </div>
    <nav>
      <b-nav>
        <b-nav-item>
          <RouterLink to="/example-template"><p class="nav-link">Example Template</p> </RouterLink>
        </b-nav-item>
        <b-nav-item>
          <RouterLink to="/newsletter-subscription">
            <p class="nav-link">Newsletter Subscription</p>
          </RouterLink>
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
