<template>
  <div>
    <div
      class="bubbles top-right hidden lg:flex"
      @mouseenter="showModal = true"
      @mouseleave="showModal = false"
    >
      <font-awesome-icon
        :icon="['fas', 'circle-info']"
        class="login-infoIcon"
      />
      <info-modal
        :modalVisible="showModal"
        @close="showModal = false"
      ></info-modal>
    </div>
    <div class="bubbles bottom-left hidden lg:flex"></div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import InfoModal from './InfoModal.vue'

export default defineComponent({
  name: 'BubbleComponent',
  components: { InfoModal },
  setup() {
    const showModal = ref(false)
    return { showModal }
  },
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

.login-infoIcon {
  position: absolute;
  color: #ffffff;
  font-size: 3rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
