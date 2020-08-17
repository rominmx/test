<template>
  <div>
    <!-- Default content -->
  </div>
</template>

<script>
import { PLANNED } from '../services/operations/constants';

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
        filter: PLANNED,
      },
    });
  },
};
</script>
