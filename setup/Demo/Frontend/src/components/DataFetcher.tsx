import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<{ message: string }>({ message: "" });

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  console.log(data);

  return (
    <div>
      <h1>{data.message}</h1>
    </div>
  );
};

export default DataFetcher;
