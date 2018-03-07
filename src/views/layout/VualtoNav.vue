<template>
    <div>
        <v-toolbar class="white" fixed app>
            <img :src="`${baseUrl}VUPLAY.png`" alt="" style="height: 37px;">
            <v-spacer></v-spacer>
            <v-toolbar-side-icon @click.native.stop="drawer = !drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>
        </v-toolbar>
        <v-navigation-drawer app 
            :mini-variant="mini" 
            v-model="drawer" 
            class="primary" 
            dark clipped fixed
            mobile-break-point="600">
            <v-toolbar flat class="transparent">
                <v-list class="pa-0">
                <v-list-tile>
                    <v-list-tile-action>
                    <v-btn icon @click.native.stop="mini = !mini">
                        <v-icon>{{mini ? "chevron_right" : "chevron_left"}}</v-icon>
                    </v-btn>
                    </v-list-tile-action>
                    <v-list-tile-content>
                    <v-list-tile-title>Menu</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                </v-list>
            </v-toolbar>
            <v-divider></v-divider>
            <v-list class="pt-0" dense>
                <v-list-tile v-for="item in items" :key="item.title" :href="'#/' + item.route">
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class VualtoNav extends Vue {
    private drawer: boolean = true;
    private items: Array<{ title: string, route: string, icon: string }> = [
        { title: 'Home', route: 'home', icon: 'home' },
        { title: 'No DRM', route: 'nodrm', icon: 'check_circle' },
        { title: 'DRM', route: 'drm', icon: 'copyright' },
        { title: 'Custom stream', route: 'custom', icon: 'extension' },
        { title: 'YouTube', route: 'youtube', icon: 'video_library' },
        { title: 'Multiple player', route: 'multi', icon: 'view_module' },
        { title: 'About', route: 'about', icon: 'info' },
        { title: 'Default settings', route: 'settings', icon: 'settings' },
    ];
    private mini: boolean = true;
    private baseUrl: any = process.env.BASE_URL;
}
</script>