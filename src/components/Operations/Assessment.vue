<template>
  <div :class="$style.container">
    <span :class="[$style.marker, {
      [$style.green]: value === EXCELLENT,
      [$style.yellow]: value === SATISFACTORILY,
      [$style.red]: value === BADLY,
    }]"></span>
    <span :class="$style.text">{{ title }}</span>
  </div>
</template>

<script>
import { EXCELLENT, SATISFACTORILY, BADLY } from '@/services/operations/constants';

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
  data() {
    return { EXCELLENT, SATISFACTORILY, BADLY };
  },
};
</script>

<style module>
.container {
  display: flex;
  align-items: center;
}

.marker {
  width: 20px;
  height: 10px;
  border-radius: 5px;
  background-color: #eee;
  margin-right: 10px;
}

.green {
  background-color: #66cc66;
}

.yellow {
  background-color: #ffe06d;
}

.red {
  background-color: #ff7360;
}

.text {
  font-size: 11px;
  line-height: 1;
}
</style>
