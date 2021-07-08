import axios from "axios";

export const getPosts = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    return response.data;
  } catch (error) {
    console.log(`error`, error);
  }
};

export const getPostId = async () => {
  const posts = await getPosts();

  return posts.map((post) => ({
    params: { id: `${post.id}` },
  }));
  //   return posts.map((post) => `/posts/${post.id}`);
};

export const getPostsById = async (id) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response.data;
  } catch (error) {
    console.log("error :>> ", error);
  }
};
