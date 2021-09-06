import React, { useEffect,useState } from 'react';
import {connect} from 'react-redux';
import Post from './components/posts';
import {getPosts as getPostsActions,deletePost as deletePostAction} from './redux/modules/post';
function App({posts,getPosts,deletePost}) {
  useEffect(()=>{
    getPosts();
  },[]);
  return (
    <div className="container">
    {posts.length && posts.map(item=><Post deletePost={deletePost} key={item.id} name={item.name} id={item.id} body={item.body}/>)}

  
    </div>
  );
}

export default connect(
({posts})=>({posts:posts.posts}),
{
getPosts:getPostsActions,
deletePost:deletePostAction
}
)(App);
