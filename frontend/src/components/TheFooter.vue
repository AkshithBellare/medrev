<template>
    <footer>
        <div>
            <router-link :to="{ name: 'home' }">MedRev</router-link>
            <span class="attribution">A learning project</span>
        </div>
    </footer>
</template>

<script>
export default {
    name: "MedRevFooter",
}
</script>