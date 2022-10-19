import axios from "axios";

export const postModule = {
  state: () => ({
    posts: [],
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
  }),
  getters: {
    sortedPost(state) {
      return [...state.posts].sort((post1, post2) => {
        return post1[state.selectedSort]?.localeCompare(
          post2[state.selectedSort]
        );
      });
    },
    sortedAndSearchPost(state, getters) {
      return getters.sortedPost.filter((post) =>
        post.title.toLowerCase().includes(state.serchQuery.toLowerCase())
      );
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoading(state, bool) {
      state.isPostLoading = bool;
    },
    setPage(state, page) {
      state.page = page;
    },
    setSelectorSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setSearchQuery(state, serchQuery) {
      state.serchQuery = serchQuery;
    },
    setTotalPage(state, totalPage) {
      state.totalPage = totalPage;
    },
  },
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        commit("setLoading", true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit("setPosts", response.data);
        commit("setLoading", false);
        commit(
          "setTotalPage",
          Math.ceil(response.headers["x-total-count"] / state.limit)
        );
      } catch (error) {
        alert(`${error}`);
        console.log(error);
      }
    },
    async loadPosts({ state, commit }) {
      try {
        commit("setPage", state.page + 1);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit("setPosts", [...state.posts, ...response.data]);
        commit(
          "setTotalPage",
          Math.ceil(response.headers["x-total-count"] / state.limit)
        );
      } catch (error) {
        alert(`${error}`);
        console.log(error);
      }
    },
  },
  namespaced: true,
};
