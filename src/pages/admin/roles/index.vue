<template>
    Đây là trang quản lý Roles
</template>
<script setup>
    import { useMenu } from '../../../stores/use-menu';
    const store = useMenu();
    store.onSelectedKeys(["admin-roles"]);
</script>