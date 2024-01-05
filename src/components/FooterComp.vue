<template>
    <div class="footer">
        &copy; Jodie Smith <span id="currYear"></span>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    mounted() {
        this.updateYear()
    },
    methods: {
        updateYear() {
            document.getElementById("currYear").textContent = new Date().getFullYear()
        },
    },
}
</script>

<style scoped>
.footer {
    position: fixed;
    bottom: 0;
    margin: 2em;
}
</style>
