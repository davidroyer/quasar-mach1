<template>
  <div class="newPost" :padding="1">
<div class="layout-padding">
  <h4>New Post</h4>
  <div class="floating-label">
    <input required class="full-width" v-model="title">
    <label>Post Title</label>
  </div>

  <div class="floating-label">
    <textarea required v-model="content" class="full-width"></textarea>
    <!-- <input class="full-width"> -->
    <label>Post Content</label>
  </div>
  <button class="primary outline" @click="savePost(title, content)">
  Save Post
</button>
</div>

  </div>
</template>

<script>
import { db } from '../AppStore.js'
let postsRef = db.ref('posts')
export default {
  data () {
    return {
      title: '',
      content: ''
    }
  },

  methods: {
    savePost (title, content) {
      postsRef.push({
        title: title,
        content: content
      })
      this.title = ''
      this.content = ''
    }
  }
}
</script>

<style lang="css">
</style>
