import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(
    function () {
      (async function () {
        try {
          const response = await fetch(url);
          const json = await response.json();
          setData(json);
          setIsLoading(false);
        } catch (error) {
          setError(error);
        }
      })();
    },
    [url]
  );

  return { data, isLoading, error };
};

export default useFetch;
