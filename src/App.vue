<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
<div>
  <div class="routes">
    <router-link to="/test">Test</router-link>
    <router-link to="/test2">Test2</router-link>
  </div>
</div>
    <router-view></router-view>
  </div>
</template>

<script>
/*
 * Root component
 */
export default {}
</script>

<style></style>
