export const getLatestNews = async (searchQuery) => {
  const res = await fetch(
    `https://hn.algolia.com/api/v1/search?query=${searchQuery}react&hitsPerPage=10&page=0`,
  );
  return await res.json();
};
export const getPopularNews = async () => {
  const res = await fetch('https://hn.algolia.com/api/v1/search?query=react&hitsPerPage=10&page=0');
  return await res.json();
};
