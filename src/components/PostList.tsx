import PostItem from "./PostItem";
import PinnedPostItems from "./PinnedPostItem";
import React, {FC} from "react";
import {PostListProps} from "../shared/interfaces/interfaces";
import {HrStyled} from "../shared/styled/styled-components";

const PostList: FC<PostListProps> = props => {
    const {posts, remove, pinned, pin, unpin} = props

    return (
        <div>
            {pinned.length ? <p>Pinned Post</p> : null}
            {pinned.map((post, index) =>
                <PinnedPostItems unpin={unpin} number={index + 1} post={post} key={'pin' + post.id}/>
            )}
            {pinned.length ? <HrStyled/> : null}
            {posts.map((post, index) =>
                <PostItem remove={remove} pin={pin} number={index + 1} post={post} key={post.id}/>
            )}
        </div>
    )
}

export default PostList;