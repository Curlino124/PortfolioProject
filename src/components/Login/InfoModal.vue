<template>
  <div v-if="modalVisible" class="modal-overlay">
    <div class="modal-content">
      <h2>Infos</h2>
    </div>
  </div>
</template>

<script>
import { defineComponent, toRefs } from 'vue'

export default defineComponent({
  name: 'InfoModal',
  props: {
    modalVisible: {
      type: Boolean,
      required: true,
    },
  },
  // an Elternkomponente übergeben
  emits: ['close'],
  setup(props, { emit }) {
    const { modalVisible } = toRefs(props)

    const closeModal = () => {
      emit('close')
    }

    return { modalVisible, closeModal }
  },
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 50vw;
  height: 50vh;
  background: rgba(0, 0, 0, 0.6);

  z-index: 100;
  margin: 10rem;
  border-radius: 1rem;
}
.modal-content {
  background: #ffffff;
  width: 100%;
  height: 100%;
  border-radius: 0.75rem;
  outline: 3px solid #00c3ff;
  outline-offset: -0.75rem;
  box-shadow:
    rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
    rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  display: flex;
  justify-content: center;
  padding: 1.5rem 0.5rem;
}
</style>
