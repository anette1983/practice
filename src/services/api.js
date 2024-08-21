import axios from 'axios';

// axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

const fetchArticlesWithQuery = async searchQuery => {
  const response = axios.get(
    `https://hn.algolia.com/api/v1/search?query=${searchQuery}`
  );
  console.log('response :>> ', (await response).data.hits);
  return (await response).data.hits;
};

export { fetchArticlesWithQuery };
