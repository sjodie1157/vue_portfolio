<template>
    <div>
        <transition name="fade">
        <div v-if="!loading && resume.length">
            <h1 class="m-5">
                Resu<span>me</span>
            </h1>
            <div class="container d-flex justify-content-center my-5">
                <a type="" href="#"><button type="button">Download CV</button></a>
            </div>
            <div class="container-fluid">
                <div class="row d-flex justify-content-center" id="line">
                    ________________________________________
                </div>
                <div class="row">
                    <div class="col d-flex flex-column" v-for="experience in resume" :key="experience.id">
                        <p>
                            |
                        </p>
                        <p>
                            {{ experience.year }}
                        </p>
                        <p>
                            {{ experience.description }}
                        </p>
                        <p>
                            {{ experience.place }}
                        </p>
                        <a type="" :href="experience.certificate"><button type="button">Download certificate</button></a>
                    </div>
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
        resume() {
            return this.$store.state.resume || [];
        }
    },
    async mounted() {
        try {
            await this.$store.dispatch('fetchResume');
        } catch (error) {
            console.error('Error fetching resume data', error);
        } finally {
            this.loading = false;
        }
    }
};
</script>

<style scoped>

:is(h1) {
  font-size: 75px;
  font-weight: 1000;
  transition: font-size 0.5s, font-weight 0.5s;
}

span {
  color: #009DF5;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.col {
    display: flex;
    flex-basis: 20%;
    text-align: center;
}

#line {
    font-size: 60px;
    font-weight: 800;
}

p:first-child {
    font-weight: 600;
    font-size: 20px;
}

p:nth-child(2) {
    font-size: 20px;
    font-weight: 600;
}

p:nth-child(3) {
    font-size: 15px;
    font-weight: 600;
    color: rgba(128, 128, 128, 0.737);
}

p:nth-child(4) {
    font-size: 19px;
    color: #009DF5;
}

button {
    color: black;
    background-color: white;
    border: 2px solid #009DF5;
    border-radius: .3pc;
    font-size: 20px;
    font-weight: 600;
    transition: all .3s;
}

button:hover {
    color: white;
    background-color: #009DF5;
}
</style>
