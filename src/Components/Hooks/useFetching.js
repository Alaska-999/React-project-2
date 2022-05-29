import { useState } from "react";
//обработка индикатора загрузки, обработа ошибки
//будет принимать коллбек (запрос) перед которым крутилка
// будет показываться а поссле выполнения крутилку надо скрыть
export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  //на случай ошибки будем помещать текст ошибки в сетерор

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };
  return [fetching, isLoading, error];
};
