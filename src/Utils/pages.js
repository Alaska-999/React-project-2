//принимает общее количество елементов и возвращает количество страниц
export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

//функционал по заплонению массива
export const getPagesArray = (totalPages) => {
  let result = [];
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1);
  }
  return result;
};
