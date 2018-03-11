<template>
    <div>
        <v-list two-line>
            <template v-for="(config, index) in configs">
                <v-list-tile :key="config.playerKey">
                    <v-list-tile-content>
                        <v-list-tile-title v-html="config.playerKey"></v-list-tile-title>
                        <button @click="configs.splice(index, 1)">X</button>
                    </v-list-tile-content>
                </v-list-tile>
            </template>
        </v-list>
        <v-card-text style="height: 100px; position: relative">
            <v-form v-model="valid">
                <v-text-field
                label="playerKey"
                v-model="playerKey"
                required
                ></v-text-field>
            </v-form>
            <v-btn
                absolute
                dark
                fab
                top
                right
                color="pink"
                @click="addConfig"
            >
            <v-icon>add</v-icon>
            </v-btn>
        </v-card-text>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Settings extends Vue {
    public playerKey: string = '';

    public configs: Array<{
        playerKey: string,
        vudrmToken?: string,
        content: Array<{
            stream: string,
            label: string,
        }>,
    }> = [
        { playerKey: 'vuplay-demo-app|12150b2f-8468-4eca-bd22-5e8a1af7237f', content: [] },
    ];

    public addConfig() {
        this.configs.push({ playerKey: 'vuplay-demo-app|12150b2f-8468-4eca-bd22-5e8a1af7237f', content: [] });
    }
}
</script>