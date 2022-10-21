<template>
   <div>
      <h1>Vue.js</h1>
      <my-input v-model="serchQuery"></my-input>
      <div class="management-post">
         <my-button @click="openModal">Створити новий пост</my-button>
         <my-selected v-model="selectedSort" :options="sortOptions" />
      </div>
      <my-dialog v-model:show="dialogVisible">
         <post-form  />
      </my-dialog>
      <post-list :posts="sortedAndSearchPosts" v-if="!isPostLoading" />
      <div v-else>Loading post...</div>
   </div>
</template>


<script scoped>
import PostForm from '@/Components/PostForm.vue';
import PostList from '@/Components/PostList.vue';
import usePost from '../hooks/usePost';
import sortedAndSearchPost from '@/hooks/sortedAndSearchPost';
import useSelected from '@/hooks/useSelected'

export default {
   components: {
      PostForm, PostList
   },
   data() {
      return {
         dialogVisible: false,
         sortOptions: [
            { value: 'title', name: 'По назві' },
            { value: 'body', name: 'По описі' }
         ],
      }
   },
   setup(props) {

      const { posts, totalPage, isPostLoading, } = usePost(10);
      const { sortedPost, selectedSort, } = useSelected(posts);
      const { sortedAndSearchPosts, serchQuery, } = sortedAndSearchPost(sortedPost);
      
      return {
         posts,
         totalPage,
         isPostLoading,
         selectedSort,
         sortedPost,
         serchQuery,
         sortedAndSearchPosts
      }
   }
}
</script>

<style>
.management-post {
   display: flex;
   justify-content: space-between;
   margin: 10px 0;
}

.page-wrapper {
   display: flex;
   justify-content: center;
   margin-top: 25px;
}

.page {
   margin-right: 5px;
   cursor: pointer;
   border: 1px solid black;
   padding: 5px 10px;
}

.current-page {
   border: 5px solid blue;
}
</style>