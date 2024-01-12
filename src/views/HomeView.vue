<template>
  <div class="home">
    <transition name="fade">
      <div v-if="!loading && home.length">
        <div class="row">
          <div class="col d-flex flex-column my-5" id="lines">
            <transition name="fade">
              <h1>Hi, I'm <span>Jodie Smith</span></h1>
            </transition>
            <transition name="fade">
              <h2>Aspiring <span>Front end developer</span></h2>
            </transition>
          </div>
          <div class="container">
            <router-link class="nav-link" to="/about">
              <button class="custom-btn btn-3">
                <span>Read More</span>
              </button>
            </router-link>
          </div>
          <div>
            <transition name="fade">
              <img :src="home[1].profImg" alt="professionalArt" loading="eager">
            </transition>
          </div>
        </div>
      </div>
      <div v-else>
        <SpinnerComp />
      </div>
    </transition>
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
      console.error('Error fetching home data', error);
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
  animation: greetingLine-one .7s;
}

@keyframes greetingLine-one {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

:is(h2) {
  font-size: 45px;
  font-weight: 900;
  color: white;
  animation: greetingLine-two 2s;
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

img[alt="professionalArt"] {
  position: fixed;
  right: 0;
  bottom: 0;
  animation: image-fade 2s;
}

@media screen and (300px<=width<720px) {
  img[alt="professionalArt"] {
  position: relative;
  right: 0;
  bottom: 0;
  max-width: 250px;
}
}

@media screen and (720px<=width<1250px) {
  img[alt="professionalArt"] {
  position: relative;
  right: 0;
  bottom: 0;
  min-width: fit-content;
}
}

@keyframes image-fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.btn-3 {
  background: rgb(0, 172, 238);
  background: linear-gradient(0deg, #009DF5 0%, black 100%);
  width: 130px;
  height: 40px;
  line-height: 42px;
  padding: 0;
  border: none;
  border-radius: .3pc;
  transition: background 0.5s;
}

.btn-3 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  color: white;
  transition: color 0.5s;
}

.btn-3:before,
.btn-3:after {
  position: absolute;
  content: "";
  right: 0;
  top: 0;
  background: rgba(2, 126, 251, 1);
  transition: all 0.3s ease;
}

.btn-3:before {
  height: 0%;
  width: 2px;
}

.btn-3:after {
  width: 0%;
  height: 2px;
}

.btn-3:hover {
  background: transparent;
  box-shadow: none;
}

.btn-3:hover:before {
  height: 100%;
}

.btn-3:hover:after {
  width: 100%;
}

.btn-3 span:hover {
  color: #009DF5;
}

.btn-3 span:before,
.btn-3 span:after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  background: #009DF5;
  transition: all 0.3s ease;
}

.btn-3 span:before {
  width: 2px;
  height: 0%;
}

.btn-3 span:after {
  width: 0%;
  height: 2px;
}

.btn-3 span:hover:before {
  height: 100%;
}

.btn-3 span:hover:after {
  width: 100%;
}
</style>
