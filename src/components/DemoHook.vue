<script setup>
  import { storeToRefs } from "pinia";
  import usePostStore from "@/stores/PostStore";

  const postStore = usePostStore();
  // postStore.setToken("your-token-here");

  const makeRequest = async () => {
    await postStore.getPostsData();
    await postStore.getOnePostData();
  };

  const { posts, post, postError, postLoading, postsError, postsLoading } =
    storeToRefs(postStore);
</script>

<template>
  <div>
    <div class="p-6">
      <Button @click="makeRequest">Make Request</Button>
      <div v-if="postLoading">Loading post...</div>
      <div v-if="postsLoading">Loading posts...</div>

      <div v-if="postError">Error loading post: {{ postError }}</div>
      <div v-if="postsError">Error loading posts: {{ postsError }}</div>

      <p v-if="posts.length !== 0">POST LIST: {{ posts }}</p>
      <p>=========</p>
      <p v-if="post">POST: {{ post }}</p>
    </div>
  </div>
</template>
