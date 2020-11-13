import React, { useState, useEffect } from "react";

export default () => {
  const [mydata, setData] = useState("Default Hello");

  useEffect(() => {
    console.log("useEffect Called");
    fetch(`/.netlify/functions/hello`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log("Data: " + JSON.stringify(data));
      });
  }, []);
  console.log(mydata);

  return (
    <div>
      <h1>Hello world with Gatsby from Netlify!</h1>
      <h2>{mydata.message}</h2>
    </div>
  );
};
