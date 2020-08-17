<template>
  <div :class="$style.container">
    <svg :class="$style.icon">
      <use :xlink:href="url" />
    </svg>
    <div :class="$style.text">{{ title }}</div>
  </div>
</template>

<script>
import { WINTER_WHEAT } from '@/services/operations/constants';

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: [String, null],
      required: null,
    },
  },
  computed: {
    url() {
      if (this.value === WINTER_WHEAT) return '#icon_winter_wheat';

      return '#icon_default';
    },
  },
};
</script>

<style module>
.container {
  display: flex;
  align-items: center;
}

.icon {
  width: 30px;
  height: 26px;
  margin-right: 12px;
}

.text {
  font-size: 11px;
  line-height: 1;
}
</style>
