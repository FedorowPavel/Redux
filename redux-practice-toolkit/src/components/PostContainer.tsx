import React, {useEffect, useState} from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";


const PostContainer = () => {
    const [limit, setLimit] = useState(100)
    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit, {
      // pollingInterval: 1000
    })
    const [createPost, {error: createError}] = postAPI.useCreatePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()

    useEffect(() => {
      // setTimeout(() => {
      //   setLimit(3)
      // }, 2000)
    }, [])

    const handleCreate = async () => {
      const title = prompt()
      await createPost({title, body: title} as IPost)
    }

    function handleRemove(post: IPost) {
      deletePost(post)
    }

    function handleUpdate(post: IPost) {
      updatePost(post)
    }

    return (
      <div>
        <div>
          <button onClick={handleCreate}>Add post</button>
          <button onClick={() => refetch()}>REFETCH</button>
          {isLoading && <h1>Loading...</h1>}
          {error && <h1>error</h1>}
          {posts?.map(post => {
            return <PostItem
              remove={handleRemove}
              update={handleUpdate}
              key={post.id}
              post={post}
            />
          })}
        </div>
      </div>
    );
  }
;

export default PostContainer;
