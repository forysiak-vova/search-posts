<template>
   <div class="post">
      <div>
         <div><strong>Title:</strong>{{post.title}}</div>
         <div><strong>Description:</strong>{{post.body}}</div>
         <div><strong>Id:</strong>{{post.id}}</div>
      </div>
      <div class="block-btn-item">
         <my-button style="margin-right: 10px" @click="$router.push(`/post/${post.id}`)">Open</my-button>
         <my-button @click="$emit('remove', post)">Delete</my-button>
      </div>
   </div>
</template>
<script>
export default {
   props: {
      post: {
         type: Object,
         required: true,
      }
   },
}
</script>
<style scoped>
.post {
      padding: 10px;
      border: 2px solid green;
      margin-top: 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 5px;
   }
   .block-btn-item{
      display: flex;
   }
</style>