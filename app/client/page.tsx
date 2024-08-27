"use client";
import React, { useEffect, useState } from "react";

export default function page() {
  // goi api lay du lieu de di render
  const [users,setUser]=useState([]);
  useEffect(() => {
    // di goi api
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUser(data)
    };
    getData();
  }, []);
  return (
    <div>
      render du lieu phia client !
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
      {users.map((item: any) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </div>
  );
}
