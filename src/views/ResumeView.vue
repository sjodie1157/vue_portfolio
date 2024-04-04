<template>
    <div>
        <transition name="fade">
            <div v-if="!loading && resume.length">
                <h1 class="m-lg-5">
                    Education & <span> Experience</span>
                </h1>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col d-flex flex-column justify-content-between" v-for="experience in resume" :key="experience.id">
                            <p>{{ experience.year }}</p>
                            <p>{{ experience.description }}</p>
                            <p>{{ experience.place }}</p>
                            <a :href="experience.certificate" class="my-5"><button type="button">Download
                                    certificate</button></a>
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
    color: white;
    animation: resumeLine-one 1.5s;
}

@media screen and (width<=300px) {
    :is(h1) {
        font-size: 40px;
    }

    p {
        font-size: 14px;
    }

    button {
        font-size: 16px;
    }
}

@media screen and (301<=width<=720px) {
    :is(h1) {
        font-size: 60px;
    }
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

p {
    color: white;
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
    color: white;
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
    background-color: #009DF5;
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
