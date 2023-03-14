import axios from "axios";



const fetchArticlesWithQuery = async searchQuery => {
  const response = axios.get(`/search?query=${searchQuery}`);
  console.log('response :>> ', (await response).data.hits);
  return (await response).data.hits;
};

export {
    fetchArticlesWithQuery,
};