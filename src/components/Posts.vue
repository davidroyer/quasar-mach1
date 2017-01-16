<template>
  <div class="posts">

    <div class="list">
      <div class="item"v-for="post in dbPosts" :key="post['.key']">
        <div class="item-content">
          <h5 v-text="post.title"></h5>
          <!-- <div class="content" v-html="post.content"></div> -->
        </div>
      </div>
    </div>
    <!-- <div v-for="post in dbPosts" :key="post['.key']">

      <div class="post">
        <h5 v-text="post.title"></h5>
        <div class="content" v-html="post.content"></div>
      </div>
    </div> -->
  </div>
</template>
<script>
  import { db } from '../AppStore.js'
  let postsRef = db.ref('posts')
  export default {
    methods: {
      clickedOnItem (val) {
        console.log(val)
      },

      itemIsSelected () {
        console.log(this)
      }
    },

    firebase: {
      dbPosts: postsRef
    }
  }
</script>
<style lang="css">
</style>
