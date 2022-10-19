<template>
    <div>
   <!--  <h1>{{$store.state.isAuth ? 'Користувач авторизований' : 'Авторизуйтесь будь-ласка'}}</h1>
      <h1>{{$store.getters.dobleLikes}}</h1>
      <div>
         <my-button @click="$store.commit('incrementLikes')">+</my-button>
         <my-button @click="$store.commit('decrementLikes')">-</my-button>
      </div> -->


      <h1>Vue.js</h1>
      <my-input :model-value="serchQuery" @update:model-value="setSearchQuery"></my-input>
      <div class="management-post">
         <my-button @click="openModal">Створити новий пост</my-button>
         <!-- <my-selected v-model="selectedSort" :options="sortOptions" /> -->
      </div>
      <my-dialog v-model:show="dialogVisible">
         <post-form @create="createPost" />
      </my-dialog>
      <post-list :posts="sortedAndSearchPost" @remove="removePost" v-if="!isPostLoading" />
      <div v-else>Loading post...</div>
      <div v-intersection='loadPosts' class="observer"></div>
   </div>
</template>


<script scoped>
import PostForm from '@/Components/PostForm.vue';
import PostList from '@/Components/PostList.vue';
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
   components: {
      PostForm, PostList
   },
   data() {
      return {
         dialogVisible: false,
      }
   },
   methods: {
      ...mapMutations({
         setPage: 'post/setPage',
         setSearchQuery: 'post/setSearchQuery'
      }),
      ...mapActions({
         fetchPosts: 'post/fetchPosts',
         loadPosts: 'post/loadPosts',
      }),
      createPost(post) {
         this.posts.push(post);
         this.dialogVisible = false;
      },
      removePost(post) {
         this.posts = this.posts.filter(el => el.id !== post.id)
      },
      openModal() {
         this.dialogVisible = true;
      },

      changePages(pageNumber) {
         this.page = pageNumber;
      },
   },
   mounted() {
      this.fetchPosts();
   },
   watch: {
   },
   computed: {
      ...mapState({
         posts: state => state.post.posts,
         isPostLoading: state => state.post.isPostLoading,
         selectedSort: state => state.post.selectedSort,
         sortOptions: state => state.post.sortOptions,
         serchQuery: state => state.post.serchQuery,
         page: state => state.post.page,
         limit: state => state.post.limit,
         totalPage: state => state.post.totalPage,
      }),
      ...mapGetters({
         sortedPost: 'post/sortedPost',
         sortedAndSearchPost: 'post/sortedAndSearchPost',
      }),
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

/* .observer{
   height: 30px;
   background-color: green;
} */
</style>