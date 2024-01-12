<template>
  <transition name="fade">
    <div v-if="!loading && projects.length">
      <h1 class="m-5">
        Past<span> projects</span>
      </h1>
      <transition name="fade">
        <div class="cards">
          <CardComp />
        </div>
      </transition>
    </div>
    <div v-else>
      <transition name="fade">
        <SpinnerComp />
      </transition>
    </div>
  </transition>
</template>

<script>
import CardComp from '@/components/CardComp.vue';
import SpinnerComp from '@/components/SpinnerComp.vue';

export default {
  components: {
    CardComp,
    SpinnerComp
  },
  data() {
    return {
      loading: true
    };
  },
  computed: {
    projects() {
      return this.$store.state.projects || [];
    }
  },
  async mounted() {
    try {
      await this.$store.dispatch('fetchProjects');
      this.loading = false;
    } catch (error) {
      console.error('Error fetching projects data', error);
      this.loading = false;
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

:is(h1) {
  font-size: 75px;
  font-weight: 1000;
  color: white;
  animation: resumeLine-one 1.5s;
}

@keyframes resumeLine-one {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

span {
  color: #009DF5;
}

.cards {
  animation: cards 1.5s;
}

@keyframes cards {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@media screen and (width<=300px) {
  :is(h1) {
    font-size: 40px;
  }
}

@media screen and (301px<=width<=720px) {
  :is(h1) {
    font-size: 60px;
  }
}

@media screen and (721px<=width<=1080px) {
  :is(h1) {
    font-size: 80px;
  }
}
</style>
