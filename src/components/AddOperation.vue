<template>
  <div>
    <div :class="$style.container">
      <h2 :class="$style.title">Добавить операцию</h2>
      <div :class="$style.content">Some content</div>
    </div>
    <div :class="$style.overlay" @click="close"></div>
    <button
      :class="$style.button"
      title="Закрыть"
      @click="close"
    >
      <svg :class="$style.icon">
        <use xlink:href="#icon_close" />
      </svg>
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

.title {
  font-size: 21px;
  font-weight: 500;
  line-height: 24px;
  padding-left: 20px;
  padding-right: 20px;
}

.content {
  padding-left: 20px;
  padding-right: 20px;
}

.button {
  position: fixed;
  z-index: 2;
  right: 30px;
  top: 30px;
  background-color: transparent;
  border: none;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.icon {
  width: 24px;
  height: 24px;
}

.button:active {
  outline: 2px dotted var(--link-color);
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
