// src/stores/PostStore.js
import { ref } from "vue";
import { defineStore } from "pinia";
import useAxios from "../hooks/useAxios.js";

const usePostStore = defineStore("post", () => {
  const { exec, token } = useAxios();

  // State
  const posts = ref([]);
  const post = ref(null);

  const postError = ref(null);
  const postLoading = ref(false);

  const postsError = ref(null);
  const postsLoading = ref(false);

  // Actions
  function setToken(newToken) {
    token.value = newToken;
  }

  async function getPostsData() {
    postsLoading.value = true;

    const options = {
      method: "GET",
      url: "/posts",
    };
    const result = await exec(options);

    postsLoading.value = result.loading;
    postsError.value = result.error;

    if (result.response) {
      posts.value = result.response.data;
    }
  }

  async function getOnePostData() {
    postLoading.value = true;
    const options = {
      method: "GET",
      url: "/posts/1",
    };
    const result = await exec(options);

    postLoading.value = result.loading;
    postError.value = result.error;

    if (result.response) {
      post.value = result.response.data;
    }
  }

  return {
    posts,
    post,
    postError,
    postLoading,
    postsError,
    postsLoading,
    setToken,
    getPostsData,
    getOnePostData,
  };
});

export default usePostStore;
