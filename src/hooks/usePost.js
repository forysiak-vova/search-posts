import axios from "axios";
import { ref, onMounted } from "vue";

export default function usePost(limit) {
  const posts = ref([]);
  const totalPage = ref(0);
  const isPostLoading = ref(true);
  const fetching = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _page: 1,
            _limit: limit,
          },
        }
      );
      totalPage.value = Math.ceil(response.headers["x-total-count"] / limit);
      posts.value = response.data;
      isPostLoading.value = false;
    } catch (error) {
      alert(`${error}`);
    }
  };
  onMounted(fetching);
  return {
    posts,
    totalPage,
    isPostLoading,
  };
}
