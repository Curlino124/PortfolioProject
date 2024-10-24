<template>
  <div class="button-container flex flex-col space-y-8">
    <button class="login-buttons w-full">anmelden</button>
    <button class="login-buttons w-full">registrieren</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ContainerComponent',
})
</script>

<style scoped>
.button-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  width: 18rem;
  height: 18rem;
  border-radius: 50%;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  min-width: 12rem;
}

.button {
  background-color: #01a4ec;
  color: #ffffff;
  height: 2.5rem;
  border-radius: 0.75rem;
  width: 100%;
}

.login-buttons {
  background: linear-gradient(to right, #0072ca, #1192ff, #0072ff, #00c6ff);
  color: #ffffff;
  height: 2.5rem;
  border-radius: 0.75rem;
  width: 100%;
  max-width: 12rem;
  letter-spacing: 0.1rem;
  transition:
    background 0.3s ease,
    transform 0.3s ease;
}

.login-buttons:hover {
  background: linear-gradient(to right, #0072ff, #00c6ff, #0072ff);
  transform: scale(1.05);
}
</style>
