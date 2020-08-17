<template>
  <div :class="$style.outerContainer">
    <header :class="$style.header">
      <!-- Heder content here -->
    </header>
    <main :class="$style.innerContainer">
      <router-view/>
    </main>
  </div>
</template>

<style module>
.header {
  background-color: #091C28;
  height: 80px;
}

.outerContainer {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.innerContainer {
  display: flex;
  justify-content: center;
  flex-grow: 1;
}
</style>
