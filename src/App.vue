<template>
    <router-view />
</template>

<script setup lang="ts">
onMounted(() => {
    const loading = window.document.getElementById('Loading');
    if (loading) loading.style.display = 'none';
});
</script>
