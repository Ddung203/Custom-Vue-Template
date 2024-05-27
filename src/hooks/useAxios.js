// src/hooks/useAxios.js
import { ref } from "vue";
import axios from "axios";

function useAxios() {
  const baseURL = "https://jsonplaceholder.typicode.com";
  const loading = ref(false);
  const uploadProgress = ref(0);
  // const retryCount = ref(0);
  // const maxRetries = ref(3);
  const timeout = ref(10000); // default timeout of 10 seconds
  const token = ref(null);

  function initWithoutFiles() {
    const headers = {};
    if (token.value) {
      headers["Authorization"] = `Bearer ${token.value}`;
    }

    return axios.create({
      baseURL,
      timeout: timeout.value,
      headers,
    });
  }

  function initWithFiles() {
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    if (token.value) {
      headers["Authorization"] = `Bearer ${token.value}`;
    }

    return axios.create({
      baseURL,
      headers,
      onUploadProgress: progressHandler,
      timeout: timeout.value,
    });
  }

  function progressHandler(progressEvent) {
    uploadProgress.value = parseInt(
      Math.round((progressEvent.loaded * 100) / progressEvent.total).toString(),
      10
    );
  }

  async function exec(options, isUploadingFiles = false) {
    const result = {
      response: null,
      error: null,
      loading: true,
      uploadProgress: 0,
    };

    const instance = !isUploadingFiles ? initWithoutFiles() : initWithFiles();

    try {
      const axiosResponse = await instance(options);
      result.response = axiosResponse;
    } catch (issue) {
      result.error = issue.response;
    } finally {
      result.loading = false;
    }

    return result;
  }

  return {
    exec,
    loading,
    uploadProgress,
    token,
  };
}

export default useAxios;
