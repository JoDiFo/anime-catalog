import { useState, useEffect, useRef } from "react";

function useFetch(url: string) {
  const [items, setItems] = useState(null);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

    const cancelRequest = useRef<boolean>(false);

    const fetchItems = async (url: string) => {
        cancelRequest.current = false;
      setPending(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (cancelRequest.current) return;
        setItems(data);
        setPending(false);
      } catch (err: any) {
        if (cancelRequest.current) return;
        setPending(false);
        setError(err);
      }
    };

  useEffect(() => {
    fetchItems(url);

    return () => {
        cancelRequest.current = true;
    }
  }, [url]);

  return [items, pending, error];
}

export default useFetch;
