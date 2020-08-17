<template>
  <div>
    <div :class="$style.container">
      <h2 :class="$style.title">Добавить операцию</h2>
    </div>
    <div :class="$style.overlay" @click="close"></div>
    <button
      :class="$style.button"
      @click="close"
    >
      Закрыть
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style module>
.container {
  background-color: #fff;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  bottom: 0;
  width: 320px;
}

.button {
  position: fixed;
  z-index: 2;
  right: 32px;
  top: 32px;
}

.overlay {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.6);
}
</style>
