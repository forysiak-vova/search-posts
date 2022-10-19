<template>
   <h4>Створення карточки</h4>
   <form @submit.prevent>
      <my-input 
      v-focus
      v-model="post.title"
      placeholder="Назва"/>
      <my-input 
       v-model="post.body"
      placeholder="Опис"/>
      <my-button @click="createPost">Створити</my-button>
   </form>
</template>
<script>

export default {
   data() {
      return {
         post: {
            title: '',
            body: '',
         }
      }
   },
   methods: {
      createPost() {
         this.post.id = Date.now();
         this.$emit('create', this.post)
         this.post = {
            title: '',
            body: '',
         }
      }
   },
   // watch: {
   //    post: {
   //       handler(newVal) {
   //          console.log(newVal)
   //       },
   //       deep: true,
   //  }
   // }
}
</script>
<style>
form {
   display: flex;
   flex-direction: column;
}
</style>