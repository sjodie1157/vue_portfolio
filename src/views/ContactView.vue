<template>
    <div class="contact">
        <div v-if="!loading || contact.length">
            <h1>
                Contact Me 
            </h1>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h4>
                            Based in : <span>{{ contact[0].area }}</span>
                        </h4>
                        <h4>
                            Email : <span>{{ contact[0].email }}</span>
                        </h4>
                        <h4>
                            Cell : <span>{{ contact[0].cell }}</span>
                        </h4>
                    </div>
                </div>
                <form action="">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h4>
                                    Name
                                </h4>
                                <input type="text" placeholder="Type Name Here" required>
                            </div>
                            <div class="col">
                                <h4>
                                    Surname
                                </h4>
                                <input type="text" placeholder="Type Surname Here" required>
                            </div>
                            <div class="col">
                                <h4>
                                    Email
                                </h4>
                                <input type="text" placeholder="Type Email Here" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col my-2">
                                <button type="submit">Send</button>
                            </div>
                            <div class="col my-2">
                                <button type="submit">Clear Form</button>
                            </div>
                        </div>
                    </div>
                </form>
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
        contact() {
            return this.$store.state.contact || [];
        }
    },
    async mounted() {
        try {
            await this.$store.dispatch('fetchContact');
            this.loading = false;
        } catch (error) {
            console.error('Error fetching contact data:', error);
            this.loading = false;
        }
    },
};
</script>

<style scoped>

</style>