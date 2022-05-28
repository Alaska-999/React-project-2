import { useMemo } from "react";
// хук будет принимать посты и метод сортировки
export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);
  // колбек будет вызван в том случае если какая то из зависимостей поменяет свое значение
  return sortedPosts;
};

//возвращает отфильтрованый и отсортированный массив
//принимает посты, метод сортировки и поисковую строку
export const usePosts = (posts, sort, query) => {
  //для того чтоб получить массив отсортированных постов
  const sortedPosts = useSortedPosts(posts, sort);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(query)
    );
  }, [query, sortedPosts]);

  return sortedAndSearchedPosts;
};
