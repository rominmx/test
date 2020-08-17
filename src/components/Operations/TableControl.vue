<template>
  <th>
    <button @click="$emit('order', {
      orderBy: type,
      asc: isActive ? !asc : false,
    })">
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

.active {
  font-weight: 700;
}
</style>
