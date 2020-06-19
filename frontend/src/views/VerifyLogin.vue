<template>
    <div>
        <button @click="verifyLogin" style="color: white; background: green">Verify Login</button>
    </div>
</template>

<script>
export default {
    methods: {
        verifyLogin: () => {
            console.log("Login verified");
        }
    },
}
</script>

<style scoped>

</style>