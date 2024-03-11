import { useState, useEffect } from "react";
import axios from "axios";

//suspense에게 프로미스 진행상황을 알려주는 함수?
const promiseWrapper = (promise) => {
  let status = "pending";
  let result;

  const s = promise.then(
    (value) => {
      status = "success";
      result = value;
    },
    (error) => {
      status = "error";
      result = error;
    }
  );

  return () => {
    switch (status) {
      case "pending":
        throw s;
      case "success":
        return result;
      case "error":
        throw result;
      default:
        throw new Error("Unknown status");
    }
  };
};

//토니가 만든 커스텀 훅
function useGetData(url, setData = (data) => data) {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const promise = axios.get(url).then((response) => setData(response.data));
      setResource(promiseWrapper(promise));
    };


    getData();
  }, [url]);

  return resource;
}

export default useGetData;
