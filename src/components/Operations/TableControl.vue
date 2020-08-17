<template>
  <th :class="$style.container">
    <button
      :class="$style.button"
      @click="$emit('order', {
        orderBy: type,
        asc: isActive ? !asc : false,
      })"
    >
      <slot />
      <svg
        viewBox="0 0 60 40"
        :class="[$style.triangle, { [$style.active]: isActive }]"
      >
        <polygon :points="points" />
      </svg>
    </button>
  </th>
</template>

<script>
export default {
  props: {
    asc: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    points() {
      if (this.isActive && this.asc) return '0,0 30,40 60,0';

      return '30,0 60,40 0,40';
    },
  },
};
</script>

<style module>
.container {
  padding: 0;
}

.button {
  width: 100%;
  height: 40px;
  font-size: 11px;
  line-height: 40px;
  font-family: var(--font-family);
  font-weight: 500;
  color: var(--color);
  padding-left: 12px;
  padding-right: 12px;
  text-align: left;
  border: none;
  background-color: #edeeee;
  cursor: pointer;
  position: relative;
  z-index: 1;
}

.button:focus {
  outline: 2px dotted var(--link-color);
  z-index: 2;
}

.triangle {
  width: 10px;
  fill: #a7a9ac;
  margin-left: 2px;
}

.active {
  fill: var(--link-color);
}
</style>
