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
      <span :class="[$style.marker, { [$style.active]: isActive }]">
        {{(isActive && asc) ? '+' : '-' }}
      </span>
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
};
</script>

<style module>
.marker {
}

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

.active {
  font-weight: 700;
}
</style>
