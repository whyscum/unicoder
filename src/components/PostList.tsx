import PostItem from "./PostItem";
import PinnedPostItems from "./PinnedPostItem";
import styled from "styled-components"
import React, {FC} from "react";
import {PostListProps} from "../shared/interfaces/interfaces";

const HrStyled = styled.hr`
    margin: 20px 0;
    padding: 0;
    height: 10px;
    border: none;
    border-top: 1px solid #333;
    box-shadow: 0 10px 10px -10px #8c8b8b inset;
`

const PostList:FC<PostListProps> = ({posts, remove, pinned, pin, unpin}) => {
    return (
        <div>
            {pinned.length ? <p>Pinned Post</p> : null}
            {pinned.map((post, index) =>
                <PinnedPostItems unpin={unpin} number={index + 1} post={post} key={'pin'+post.id}/>
            )}
            {pinned.length ? <HrStyled/> : null}
            {posts.map((post, index) =>
                <PostItem remove={remove} pin={pin} number={index + 1} post={post} key={post.id}/>
            )}
        </div>
    )
}

export default PostList;