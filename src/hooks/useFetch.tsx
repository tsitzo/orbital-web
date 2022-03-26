import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = <T,>(
  url: string
): {
  response: T | null;
  error: boolean;
  loading: boolean;
} => {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);
        const response = await axios.get(url);
        setResponse(response.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { response, error, loading };
};
