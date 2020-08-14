<template>
  <div>
    <h2>Добавить операцию</h2>
    <button @click="close">Закрыть</button>
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
