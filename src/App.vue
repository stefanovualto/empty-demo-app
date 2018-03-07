<template>
    <v-app>
        <vualto-nav></vualto-nav>
        <v-content>
            <v-container fluid>
                <transition name="fade">
                    <router-view></router-view>
                </transition>
            </v-container>
        </v-content>
        <vualto-footer></vualto-footer>
    </v-app>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VualtoFooter from '@/views/layout/VualtoFooter.vue';
import VualtoNav from '@/views/layout/VualtoNav.vue';

@Component({ components: { VualtoFooter, VualtoNav } })
export default class App extends Vue { }
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
