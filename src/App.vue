<template>
  <v-app>
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
    <v-toolbar class="white" fixed app>
      <img src="/VUPLAY.png" alt="" style="height: 37px;">
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
    <v-footer height="auto" class="white" app absolute>
      <v-layout row wrap justify-center>
        <v-btn
          color="secondary"
          flat
          v-for="link in links"
          :key="link"
        >
          {{ link }}
        </v-btn>
        <v-flex xs12 py-3 text-xs-center>
          &copy;2018 — <strong>VUALTO Ltd.</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Home', route: 'home', icon: 'home' },
        { title: 'No DRM', route: 'nodrm', icon: 'check_circle' },
        { title: 'DRM', route: 'drm', icon: 'copyright' },
        { title: 'Custom stream', route: 'custom', icon: 'extension' },
        { title: 'YouTube', route: 'youtube', icon: 'video_library' },
        { title: 'Multiple player', route: 'multi', icon: 'view_module' },
        { title: 'about', route: 'about', icon: 'info' },
      ],
      mini: true,
      right: null,
      links: ['About Us', 'Products', 'Contact Us'],
    };
  },
};
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
