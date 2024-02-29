<template>
    <a-menu v-model:openKeys="store.openKeys" v-model:selectedKeys="store.selectedKeys" mode="inline">
        <a-menu-item key="admin-users">
            <router-link :to="{ name: 'admin-users' }">
                <span>
                    <UserOutlined /> Tài khoản
                </span>
            </router-link>
        </a-menu-item>
        <a-menu-item key="admin-roles">
            <router-link :to="{ name: 'admin-roles' }">
                <span>
                    <TagOutlined /> Vai trò
                </span>
            </router-link>
        </a-menu-item>
        <a-menu-item key="admin-settings">
            <router-link :to="{ name: 'admin-settings' }">
                <span>
                    <SettingOutlined /> Cài đặt
                </span>
            </router-link>
        </a-menu-item>
    </a-menu>
</template>
<script setup>
import { UserOutlined, TagOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { storeToRefs } from 'pinia'
import { useMenu } from '../stores/use-menu';
const store = useMenu();

() => ({
    ...storeToRefs(store),
    components: {
        UserOutlined,
        TagOutlined,
        SettingOutlined
    }
})

</script>