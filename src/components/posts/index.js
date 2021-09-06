import React from 'react';
import { Card,button } from 'antd';
// https://jsonplaceholder.typicode.com/posts
export default function Post({name,body,deletePost,id}){
     return <Card>
     <h1>{name}</h1>
     <p>{body}</p>
     <button onClick={()=>deletePost(id)} type="primary">Delete</button>

           </Card>
}