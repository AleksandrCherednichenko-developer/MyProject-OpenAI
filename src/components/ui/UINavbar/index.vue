<template>
    <nav class="navbar">
        <div class="navbar__inner">
            <router-link
                v-for="item of navbarMenu"
                :key="item.name"
                :to="Tr.i18nRoute(item.path)"
                class="navbar-item"
                exact-active-class="navbar-item--active"
                @click="onClickItem"
            >
                <SvgIcon :name="item.icon" class="navbar-item__icon" />
                <span class="navbar-item__text">{{ $t(`navbar.${item.name}`) }}</span>
            </router-link>
        </div>
        <LanguageSelect />
    </nav>
</template>

<script>
export default {
    name: 'UINavbar',
};
</script>

<script setup>
import { inject } from 'vue';
import { ROUTE_NAMES } from '@/constants/route-names';
import Tr from '@/i18n/translation';
import SvgIcon from '@/components/ui/SvgIcon/index.vue';
import LanguageSelect from '@/components/ui/LanguageSelect/index.vue';

const emitter = inject('emitter');
const emit = defineEmits(['click-navbar-item']);

const navbarMenu = [
    {
        name: 'home',
        path: { name: ROUTE_NAMES.HOME_PAGE.routeName },
        icon: 'home',
    },
    {
        name: 'chat',
        path: { name: ROUTE_NAMES.CHAT_PAGE.routeName },
        icon: 'chat',
    },
    {
        name: 'text',
        path: { name: ROUTE_NAMES.TEXT_PAGE.routeName },
        icon: 'text',
    },
    {
        name: 'image',
        path: { name: ROUTE_NAMES.IMAGE_PAGE.routeName },
        icon: 'image',
    },
    {
        name: 'about',
        path: { name: ROUTE_NAMES.ABOUT_PAGE.routeName },
        icon: 'info',
    },
    {
        name: 'contact',
        path: { name: ROUTE_NAMES.CONTACT_PAGE.routeName },
        icon: 'phone',
    },
];

const onClickItem = () => {
    emit('click-navbar-item');
    emitter.emit('close-navbar');
};
</script>

<style src="./styles.scss" lang="scss" scoped />
