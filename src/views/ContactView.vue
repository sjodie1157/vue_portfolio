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
                <div class="col d-flex flex-wrap">
                  <div class="con">
                    <button type="submit" class="btn-3">Send</button>
                  </div>
                  <div class="con">
                    <button type="reset" class="btn-3">Clear Form</button>
                  </div>
                  <div class="con">
                    <a href="https://github.com/sjodie1157" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-github"
                        viewBox="0 0 16 16">
                        <path
                          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                      </svg>
                    </a>
                  </div>
                  <div class="con">
                    <a href="mailto:sjodie1157@gmail.com" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" class="bi bi-envelope-paper" viewBox="0 0 16 16">
                        <path
                          d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267zm13 .566v5.734l-4.778-2.867zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083zM1 13.116V7.383l4.778 2.867L1 13.117Z" />
                      </svg></a>
                  </div>
                  <div class="con">
                    <a href="https://www.instagram.com/not_really_dusse?igsh=MXdlOXNteXhyZ2VvZQ==" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-instagram"
                        viewBox="0 0 16 16">
                        <path
                          d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                      </svg></a>
                  </div>
                  <div class="con">
                    <a href="">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-linkedin"
                        viewBox="0 0 16 16">
                        <path
                          d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                      </svg>
                    </a>
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

a {
  color: black;
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
  border: 3px solid white;
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

@media screen and (300px<=width) {
  :is(h1) {
    font-size: 40px;
  }

  :is(h2) {
    font-size: 20px;
  }
}

@media screen and (301<=width<=720px) {
  :is(h1) {
    font-size: 60px;
  }

  :is(h2) {
    font-size: 30px;
  }

  :is(h4) {
    font-size: 18px;
  }

  input {
    font-size: 16px;
  }
}

@media screen and (721px<=width) {
  :is(h1) {
    font-size: 80px;
  }

  :is(h2) {
    font-size: 35px;
  }

  :is(h4) {
    font-size: 20px;
  }

  input {
    font-size: 18px;
  }
}

svg {
  width: 50px;
  margin: 0 2em;
  background-color: white;
  padding: .1em;
  border-radius: 2pc;
}</style>
