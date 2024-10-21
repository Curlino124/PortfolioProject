<template>
  <section class="login-page">
    <WaveComponent />
    <div class="new-buttons top-right hidden lg:flex"></div>
    <div class="new-buttons bottom-left hidden lg:flex"></div>
    <div class="button-container flex flex-col space-y-8">
      <button class="login-buttons w-full" @click="openLoginModal">
        anmelden
      </button>
      <button class="login-buttons w-full" @click="openRegisterModal">
        registrieren
      </button>
    </div>
  </section>
</template>

<script>
import WaveComponent from '../components/Login/WaveComponent.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    WaveComponent,
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

.wave-down svg {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
}

.wave-up svg {
  position: absolute;
  top: 0;
  right: 0;
  transform: scaleX(-1);
  z-index: 10;
}

.new-buttons {
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
  transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1.05);
}

.top-right {
  top: 4rem;
  right: 16rem;
}

.bottom-left {
  bottom: 4rem;
  left: 16rem;
}

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
