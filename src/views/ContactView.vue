<template>
    <div class="contact">
        <transition name="fade">
        <div v-if="!loading && contact.length">
            <h1 class="my-5">
                Contact <span>Me</span>
            </h1>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h2>
                            Based in : <span>{{ contact[0].area }}</span>
                        </h2>
                        <h2>
                            Email : <span>{{ contact[0].email }}</span>
                        </h2>
                        <h2>
                            Cell : <span>{{ contact[0].cell }}</span>
                        </h2>
                    </div>
                </div>
                <form action="https://formspree.io/f/moqgqoga" method="POST">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h4>
                                    Name
                                </h4>
                                <input type="text" name="firstName" required>
                            </div>
                            <div class="col">
                                <h4>
                                    Surname
                                </h4>
                                <input type="text" name="lastName" required>
                            </div>
                            <div class="col">
                                <h4>
                                    Email
                                </h4>
                                <input type="text" name="email" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col d-flex">
                                <div class="con">
                                    <button type="submit" class="btn-3">Send</button>
                                </div>
                                <div class="con">
                                    <button type="reset" class="btn-3">Clear Form</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
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
        contact() {
            return this.$store.state.contact || [];
        }
    },
    async mounted() {
        try {
            await this.$store.dispatch('fetchContact');
            this.loading = false;
        } catch (error) {
            console.error('Error fetching contact data', error);
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

:is(h2) {
  font-size: 40px;
  margin: 2rem 0;
  color: white;
}

:is(h4) {
  color: white;
}

input {
    background-color: #009DF5;
    border: 3px solid black;
    border-radius: .5pc;
}

span {
  color: #009DF5;
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
  color: white;
  transition: all 0.3s;
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
  color: #009DF5;
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
.con {
    margin: 2em 2em 0 0em;
}
</style>