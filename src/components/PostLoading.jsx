import React from "react";
import { useState, useEffect } from "react";
import DeletePosts from "./DeletePosts";
const URL = "https://robertuibar.pythonanywhere.com/api/get/";

function PostLoading() {
  const [data, setData] = useState(0);

  //getting the data from the api and storing in the variable data
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL);
      result.json().then((json) => {
        setData(json);
      });
    };
    fetchData();
  }, [data]);

  if (data === 0) return <p>Just a sec</p>;
  return (
    <div className=" flex justify-center items-center">
      <div className="grid grid-cols-3 gap-4">
        {data.map((data) => {
          return (
            <div className="bg-[#4A525A] max-w-[10em] text-3xl p-4 flex flex-col justify-center items-center rounded-3xl">
              <p>{data.id}</p>
              <p>{data.titlu}</p>
              <p>{data.continut}</p>
              <DeletePosts id={data.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default PostLoading;
