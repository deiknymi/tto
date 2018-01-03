<template>
  <div class="ui container">
    <div class="ui grid">
      <div class="ui two column row">
        <welcome-info></welcome-info>
        <player-options v-show="PlayerOptions" v-on:Ai="loadAIOptions"></player-options>
        <ai-options v-show="AIOptions"></ai-options>
      </div>
    </div>
  </div>
</template>

<script>
import WelcomeInfo from './WelcomeInfo.vue'
import PlayerOptions from './PlayerOptions.vue'
import AiOptions from './AIOptions.vue'

export default {
  name: 'welcome',
  components: {
    WelcomeInfo,
    PlayerOptions,
    AiOptions
  },
  data () {
    return {
      PlayerOptions: true,
      AIOptions: false,
      Human: false,
      AI: false
    }
  },
  methods: {
    loadAIOptions: () => {
      this.PlayerOptions = false
      this.AIOptions = true
    }
  }
}
</script>
