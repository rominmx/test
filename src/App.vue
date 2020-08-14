<template>
  <div>
    <header :class="$style.header">
      <h1>Header</h1>
    </header>
    <router-view/>
  </div>
</template>

<style module>
.header {
  background-color: #000;
  color: #fff;
}
</style>
