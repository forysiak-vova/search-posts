<template>
  <div>
    <h1>Vue.js</h1>
    <my-input v-model="serchQuery"></my-input>
    <div class="management-post">
      <my-button @click="openModal">Створити новий пост</my-button>
      <my-selected v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list
      :posts="sortedAndSearchPost"
      @remove="removePost"
      v-if="!isPostLoading"
    />
    <div v-else>Loading post...</div>
    <div v-intersection="loadPosts" class="observer"></div>
    <!-- <div class="page-wrapper">
         <div class="page" v-for="pageNumber in totalPage" :key="pageNumber" :class="{
                    'current-page': page === pageNumber
                 }" @click="changePages(pageNumber)">
            {{pageNumber}}
         </div>
      </div> -->
  </div>
</template>

<script scoped>
import PostForm from "@/Components/PostForm.vue";
import PostList from "@/Components/PostList.vue";
import axios from "axios";
export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "По назві" },
        { value: "body", name: "По описі" },
      ],
      serchQuery: "",
      page: 1,
      limit: 10,
      totalPage: 0,
    };
  },
  methods: {
    createPost(post) {
      this.posts.unshift(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((el) => el.id !== post.id);
    },
    openModal() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        this.isPostLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.posts = response.data;
        this.isPostLoading = false;
        this.totalPage = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
      } catch (error) {
        alert(`${error}`);
      }
    },
    async loadPosts() {
      try {
        this.page += 1;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.posts = [...this.posts, ...response.data];
        this.totalPage = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
      } catch (error) {
        alert(`${error}`);
      }
    },
    changePages(pageNumber) {
      this.page = pageNumber;
      // this.fetchPosts();
    },
  },
  mounted() {
    this.fetchPosts();
  },
  watch: {
    // page() {
    //    this.fetchPosts()
    // }
  },
  computed: {
    sortedPost() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(
          post2[this.selectedSort]
        );
      });
    },
    sortedAndSearchPost() {
      return this.sortedPost.filter((post) =>
        post.title.toLowerCase().includes(this.serchQuery.toLowerCase())
      );
    },
  },
};
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
