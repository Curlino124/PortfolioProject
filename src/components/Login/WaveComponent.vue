<template>
  <div>
    <!-- obere Welle -->
    <div class="wave-up">
      <svg
        class="svg01"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#f3f3f3"
          fill-opacity="1"
          d="M1440,160L1380,140C1320,120,1200,80,1080,80C960,80,840,120,720,160C600,200,480,240,360,240C240,240,120,200,60,180L0,160L0,0L60,0C120,0,240,0,360,0C480,0,600,0,720,0C840,0,960,0,1080,0C1200,0,1320,0,1380,0L1440,0Z"
        ></path>
      </svg>
    </div>
    <!-- untere Welle -->
    <div class="wave-down">
      <svg
        class="svg02"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#f3f3f3"
          fill-opacity="1"
          d="M1440,160L1380,180C1320,200,1200,240,1080,240C960,240,840,200,720,160C600,120,480,80,360,80C240,80,120,120,60,140L0,160L0,320L60,320C120,320,240,320,360,320C480,320,600,320,720,320C840,320,960,320,1080,320C1200,320,1320,320,1380,320L1440,320Z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WaveComponent',
})
</script>

<style scoped>
.wave-up svg {
  position: absolute;
  top: 0;
  right: 0;
  transform: scaleX(-1);
  z-index: 10;
}

.wave-down svg {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
}
</style>
