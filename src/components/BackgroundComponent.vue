<script lang="ts">
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

export default {
  props: {
    options: {},
  },
  methods: {
    async particlesInit(engine: Engine) {
      await loadFull(engine);
    },
  },
};
</script>

<template>
  <!--prettier-ignore-->
  <Particles id="tsparticles"
  :particlesInit="particlesInit" 
  :particlesLoaded="particlesLoaded" 
  :options="
    {
      background: {
        color:'#0a1940'
      },
      detectRetina: false,
      fpsLimit: 30,
      interactivity: {
        detectsOn: 'canvas',
        events: {
          resize: true
        }
      },
    particles: {
      color: {
        value: '#fff'
      },
      number: {
        density: {
          enable: true,
          area: 1080
        },
        limit: 0,
        value: 400
      },
      opacity: {
        animation: {
          enable: true,
          minimumValue: 0.05,
          speed: 0.25,
          sync: false
        },
        random: {
          enable: true,
          minimumValue: 0.05
        },
        value: 1
      },
      shape: {
        type: 'circle'
      },
      size: {
        random: {
          enable: true,
          minimumValue: 0.5
        },
        value: 1
      },
    }
  }" 
/>
</template>

<style scoped>
#tsparticles {
  z-index: -10;
  position: relative;
}
</style>
