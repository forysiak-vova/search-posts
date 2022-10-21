import { ref, computed } from "vue";

export default function sortedAndSearchPosts(sortedPost) {
  const serchQuery = ref("");
  const sortedAndSearchPosts = computed(() => {
    return sortedPost.value.filter((post) =>
      post.title.toLowerCase().includes(serchQuery.value.toLowerCase())
    );
  });
  return {
    serchQuery,
    sortedAndSearchPosts,
  };
}
