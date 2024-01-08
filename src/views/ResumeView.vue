<template>
    <div>
        <div v-if="!loading && resume.length">
            <div class="container-fluid">
                <div class="row">
                    <div class="col d-flex flex-column" v-for="experience in resume" :key="experience.id">
                        <p>
                            {{ experience.year }}
                        </p>
                        <p>
                            {{ experience.description }}
                        </p>
                        <p>
                            {{ experience.place }}
                        </p>
                            <a type="" :href="experience.certificate">download Certificate</a>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <SpinnerComp />
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
        resume() {
            return this.$store.state.resume || [];
        }
    },
    async mounted() {
        try {
            await this.$store.dispatch('fetchResume');
        } catch (error) {
            console.error('Error fetching resume data:', error);
        } finally {
            this.loading = false;
        }
    }
};
</script>

<style scoped>
.col {
    display: flex;
    flex-basis: 20%;
    text-align: center;
}

a {
    text-decoration: none;
    color: black;
    border: 2px solid black;
    border-radius: .3pc;
    padding: rem;
}
</style>
