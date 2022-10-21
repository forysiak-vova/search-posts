import { ref, computed } from "vue";

export default function useSelected(posts) {
  const selectedSort = ref("");
  const sortedPost = computed(() => {
    return [...posts.value].sort((post1, post2) => {
      return post1[selectedSort.value]?.localeCompare(
        post2[selectedSort.value]
      );
    });
  });
  return {
    selectedSort,
    sortedPost,
  };
}
