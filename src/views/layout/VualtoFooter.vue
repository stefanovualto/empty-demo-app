<template>
    <v-footer height="auto" class="primary" dark app absolute>
        <v-layout row wrap justify-center>
        <v-btn color="white"
            flat
            v-for="link in links"
            :key="link.label"
            :href="link.url"
            target="_blank"
        >
            {{ link.label }}
        </v-btn>
        <v-flex xs12 py-3 text-xs-center>
            &copy;2018 — <strong>VUALTO Ltd.</strong>
        </v-flex>
        </v-layout>
    </v-footer>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class VualtoFooter extends Vue {
    private links: Array<{label: string, url: string}> =
        [
            {label: 'About Us', url: 'https://vualto.com'},
            {label: 'Products', url: 'https://vualto.com'},
            {label: 'Contact Us', url: 'https://vualto.com'},
        ];
}
</script>
