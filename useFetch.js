import React, { useState, useEffect } from "react";

let controller = new AbortController();
// eslint-disable-next-line prefer-destructuring
let signal = controller.signal;
const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const callFetch = async (url, options) => {
    if (data) {
      setData(null);
    }
    if (error) {
      setError(null);
    }
    if (loading) {
      controller.abort();
      controller = new AbortController();
      signal = controller.signal;
    }
    if (!loading) {
      setLoading(true);
    }
    let status;
    await fetch(url, { signal, ...options })
      .then((res) => {
        status = res.status;
        return res.json();
      })
      .then((d) => {
        setData({ status, data: d });
        setLoading(false);
      })
      .catch((e) => {
        if (e.code !== 20) {
          setError(e);
          setLoading(false);
        }
      });
  };
  useEffect(() => {
    if (url) {
      callFetch(url, options);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [data, loading, error, callFetch];
};
export default useFetch;
