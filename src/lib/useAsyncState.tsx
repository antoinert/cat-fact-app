import { useState, useEffect } from "react";
import { useFetch } from "use-http";

function useAsyncState<T>(
  url: string,
  options: Record<string, unknown>,
  defaultValue: T | undefined
): [
  T | undefined,
  React.Dispatch<React.SetStateAction<T | undefined>>,
  boolean,
  Error
] {
  const { data, loading, error } = useFetch<T>(url, options, []);
  const [asyncState, setAsyncState] = useState<T | undefined>(defaultValue);

  useEffect(() => {
    if (data) {
      setAsyncState(data);
    }
  }, [data]);

  return [asyncState, setAsyncState, loading, error];
}

export default useAsyncState;
