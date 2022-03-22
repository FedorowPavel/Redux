import React from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";



const PostContainer2 = () => {
  const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(100)

  return (
    <div>
      <div>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>error</h1>}
        {posts?.map(post => {
          // return <PostItem key={post.id} post={post} remove={}/>
        })}
      </div>
    </div>
  );
}
;

export default PostContainer2;
