<template>
  <div>
    <div class="bubbles top-right hidden lg:flex">
      <font-awesome-icon :icon="['fas', 'question']" class="LoginPage-Icon" />
    </div>
    <div class="bubbles bottom-left hidden lg:flex"></div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BubbleComponent',
})
</script>

<style scoped>
.bubbles {
  position: absolute;
  background: linear-gradient(to right, #0072ca, #1192ff, #00c6ff);
  border-radius: 50%;
  padding: 3rem;
  box-shadow:
    0 4px 20px rgba(0, 0, 0, 0.3),
    0 15px 30px rgba(0, 0, 0, 0.2);
  width: auto;
  max-width: 12rem;
  z-index: 20;
}

.top-right {
  top: 4rem;
  right: 16rem;
}

.bottom-left {
  bottom: 4rem;
  left: 16rem;
}

.LoginPage-Icon {
  position: absolute;
  color: #ffffff;
  font-size: 3rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
