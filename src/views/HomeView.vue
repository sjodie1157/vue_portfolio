<template>
  <div class="home">
    <div v-if="loading = false || home.length">
      <div class="row">
          <div class="col">
            <h2>
              <span>Hi, I'm</span> {{ home[0].name }} {{ home[0].surname }}
            </h2>
            <h3>
              {{ home[0].jobTitle }}
            </h3>
          </div>
          <div class="col">
            <img :src="home[1].profImg" alt="logo" loading="eager">
          </div>
      </div>
    </div>
    <div v-else>
      <SpinnerComp/>
    </div>
  </div>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue';

export default {
  components: {
    SpinnerComp
  },
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    home() {
      return this.$store.state.home || [];
    }
  },
  async mounted() {
    try {
      await this.$store.dispatch('fetchHome');
      this.loading = false;
    } catch (error) {
      console.error('Error fetching home data:', error);
      this.loading = false;
    }
  },
};
</script>
