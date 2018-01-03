<template>
  <div class="column options">
    <div class="ui segment">
      <router-link to="AI" class="ui black fluid button" v-on:click="loadAI" v-bind:class="{ loading: isLoading_AI }">AI Player</router-link>
      <router-link to="HU" class="ui black fluid button" v-on:click.native="setLoading_HU" v-bind:class="{ loading: isLoading_HU }">Human Player</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerOptions',
  data () {
    return {
      isLoading_AI: false,
      isLoading_HU: false
    }
  },
  methods: {
    setLoading_AI: function () {
      this.isLoading_AI = !this.isLoading_AI
      this.isLoading_HU = false
    },
    setLoading_HU: function () {
      this.isLoading_HU = !this.isLoading_HU
      this.isLoading_AI = false
    },
    loadAI: function () {
      this.$emit('Ai', {})
    }
  }
}
</script>
