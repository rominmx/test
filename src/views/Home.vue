<template>
  <div>
    <!-- Default content -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    fieldId() {
      return this.$store.state.fieldId;
    },
  },
  created() {
    this.$router.push({
      name: 'field',
      params: {
        fieldId: this.fieldId,
        operationsType: 'planned',
      },
    });
  },
};
</script>
