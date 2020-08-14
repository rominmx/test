<template>
  <div>{{ type }} операции для поля: {{ fieldId }}</div>
</template>

<script>
export default {
  props: {
    fieldId: {
      type: [Number, String],
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
};
</script>
