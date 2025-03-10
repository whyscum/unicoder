import React, {FC} from "react";
import Button from "../shared/ui/button/Button";
import {PostItemsProps} from "../shared/interfaces/interfaces";
import {PostStyled} from "../shared/styled/styled-components";

const PostItem: FC<PostItemsProps> = props => {
    const {post, number, remove, pin} = props

    return (
        <PostStyled>
            <div>
                <strong>{number}. {post.title}({post.body})</strong>
            </div>
            <div>
                {post.ans}
            </div>
            <div>
                <Button onClick={() => remove(post)}>
                    Delete
                </Button>
                <Button onClick={() => pin(post)}>
                    Pin
                </Button>
            </div>
        </PostStyled>
    )
}

export default PostItem;