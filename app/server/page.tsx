import React from "react";
// ham di lay du lieu bang cach goi api
async function getPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
  }
async function getUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
}
export default async function page() {
  const users = await getUser();
  const posts=await getPosts();
  return (
    <div>
      server
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
      {/* {users.map((item: any) => {
        return <li>{item.name}</li>;
      })} */}
     {posts.map((item: any) => {
        return <li>{item.title}</li>;
      })}
    </div>
  );
}
