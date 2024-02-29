<template>
    <a-card title="Tạo mới tài khoản" style="width: 100%;">
        <div class="row">
            <div class="col-12 col-sm-4">
                <div class="row">
                    <div class="col-12 d-flex justify-content-center mb-3">
                        <a-avatar shape="square" :size="200">
                            <template #icon><img src="../../../assets/users.jpg" alt="Avatar" /></template>
                        </a-avatar>
                    </div>
                    <div class="col-12 d-flex justify-content-center">
                        <a-button type="primary">
                            <font-awesome-icon :icon="['fas', 'plus']" class="me-2"/>
                            <span>
                                Chọn ảnh
                            </span>
                        </a-button>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-8">

            </div>
        </div>
    </a-card>
</template>
<script setup>
import { useMenu } from '../../../stores/use-menu';

const store = useMenu();
store.onSelectedKeys(["admin-users"]);
</script>