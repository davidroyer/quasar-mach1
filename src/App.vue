<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">

    <div slot="header" class="toolbar topNav">
      <!-- opens drawer below -->
<!-- $refs.drawer.open() -->
      <button class="hide-on-drawer-visible" @click="$refs.drawer.open() ">
        <i>menu</i>
      </button>

      <q-toolbar-title :padding="1">
        VueFire
      </q-toolbar-title>
    </div>
    <q-drawer ref="drawer">
      <div class="toolbar">
        <q-toolbar-title>
          Drawer Title
        </q-toolbar-title>
      </div>

      <div class="list no-border platform-delimiter">
        <q-drawer-link icon="home" :to="{path: '/', exact: true}">
          Home
        </q-drawer-link>
        <q-drawer-link icon="edit" :to="{path: '/posts'}">
          Posts
        </q-drawer-link>
        <q-drawer-link icon="add" :to="{path: '/new'}">
          New Post
        </q-drawer-link>
        <q-drawer-link icon="mail" :to="{path: '/test'}">
          Test
        </q-drawer-link>
        <q-drawer-link icon="edit" :to="{path: '/test'}">
          Test
        </q-drawer-link>
        <q-drawer-link icon="settings" :to="{path: '/test2'}">
          Test 2
        </q-drawer-link>
        <router-link to="/test">Test</router-link>
        <router-link to="/test2">Test2</router-link>
      </div>
    </q-drawer>
<!-- <div>
  <router-link to="/test">Test</router-link>
  <router-link to="/test2">Test2</router-link>
</div> -->
    <router-view></router-view>
  </div>
</template>
<script>
/*
 * Root component
 */

  export default {
    methods: {
    },

    mounted () {
    }
  }
</script>

<style>
.topNav {
  z-index: 99;
}
</style>
