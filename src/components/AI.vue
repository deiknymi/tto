<template>
  <div>
    <div class="ui container">
      <div class="ui grid">
        <div class="ui two column row">
          <welcome-info></welcome-info>
          <ai-options></ai-options>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WelcomeInfo from './WelcomeInfo.vue'
import AiOptions from './AIOptions'

export default {
  name: 'AI',
  components: {
    WelcomeInfo,
    AiOptions
  }
}
</script>

