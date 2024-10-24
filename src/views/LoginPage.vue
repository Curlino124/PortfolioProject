<template>
  <section class="login-page">
    <wave-component></wave-component>
    <bubble-component></bubble-component>
    <container-component></container-component>
  </section>
</template>

<script>
import WaveComponent from '../components/Login/WaveComponent.vue'
import BubbleComponent from '../components/Login/BubbleComponent.vue'
import ContainerComponent from '../components/Login/ContainerComponent.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    WaveComponent,
    BubbleComponent,
    ContainerComponent,
  },
})
</script>

<style scoped>
.login-page {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    153deg,
    rgba(5, 101, 198, 1) 0%,
    rgba(0, 195, 255, 1) 94%
  );
  position: relative;
  overflow: hidden;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-in-out;
}

.modal-header,
.modal-footer {
  background-color: #f1f1f1;
  color: #2c2c2c;
  border-radius: 1rem 1rem 0 0;
}

.modal-header {
  border-bottom: 1px solid black;
}

.modal-footer {
  border-radius: 0 0 1rem 1rem;
}

.label-error-group {
  margin: 0 0 0.2rem 0.3rem;
}

.custom-input {
  margin: 0.25rem 0;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border-bottom: 2px solid #8c8c8c;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.custom-input:focus {
  border: none;
  outline: 1px solid #007bff;
}

.custom-input::placeholder {
  font-size: 1rem;
}

.password-icon {
  font-size: 1.2rem;
}

.footer-btn {
  background-color: #ffffff;
  color: #2c2c2c;
  padding: 0.5rem;
  border-radius: 1rem;
  letter-spacing: 0.1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition:
    letter-spacing 0.5s ease-out,
    background-color 0.5s ease-out,
    color 0.5s ease-out,
    width 0.5s ease-out;
}

.footer-btn:hover {
  background-color: #8c8c8c;
  color: #ffffff;
  width: 100%;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(-50px);
  }
  to {
    transform: translateY(0);
  }
}
</style>
