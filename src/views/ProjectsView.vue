<template>
    <transition name="fade">
        <div v-if="!loading && projects.length">
            <h1 class="m-5">
                Resu<span>me</span>
            </h1>
            <transition name="fade">
            <CardComp />
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
}

span {
  color: #009DF5;
}

</style>