<template>
    Đây là trang quản lý Settings
</template>
<script setup>
    import { useMenu } from '../../../stores/use-menu';
    const store = useMenu();
    store.onSelectedKeys(["admin-settings"]);
</script>