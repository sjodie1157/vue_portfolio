<template>
  <div>
    <div class="about my-5">
      <transition name="fade">
      <div v-if="!loading && about.length">
        <div class="row">
          <h1>
            About <span>me</span>
          </h1>
          <div class="col">
            <h3>
              {{ about[0].aboutParagraph }}
            </h3>
          </div>
          <div class="col">
            <img :src="about[1].profImaArt" alt="professionalimage" loading="eager">
          </div>
        </div>
      </div>
      <div v-else>
        <SpinnerComp />
      </div>
    </transition>
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
    about() {
      return this.$store.state.about || [];
    }
  },
  async mounted() {
    try {
      await this.$store.dispatch('fetchAbout');
      this.loading = false;
    } catch (error) {
      console.error('Error fetching about data', error);
      this.loading = false;
    }
  },
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

span {
  color: #009DF5;
}

:is(h1) {
  font-size: 75px;
  font-weight: 1000;
  color: white;
  animation: aboutLine-one 2s;
}

@keyframes aboutLine-one {
  0% {
    transform: translatey(40%);
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

:is(h3) {
  font-size: 25px;
  font-weight: 600;
  transition: font-size 0.5s, font-weight 0.5s;
  color: white;
  text-shadow: black;
  animation: greetingLine-two 1.5s;
}

@keyframes greetingLine-two {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
img[alt="professionalimage"] {
  position: fixed;
  right: 0;
  bottom: 0;
  animation: image-fade 2s;
}

@keyframes image-fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>