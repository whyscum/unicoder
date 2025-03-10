import React, {FC} from "react";
import Button from "../shared/ui/button/Button";
import {PinnedPostItemsProps} from "../shared/interfaces/interfaces";
import {PostStyled} from "../shared/styled/styled-components";

const PinnedPostItems: FC<PinnedPostItemsProps> = props => {
    const {post, number, unpin} = props

    return (
        <PostStyled>
            <div>
                <strong>{number}. {post.title}({post.body})</strong>
            </div>
            <div>
                {post.ans}
            </div>
            <div>
                <Button onClick={() => unpin(post)}>
                    Unpin
                </Button>
            </div>
        </PostStyled>
    )
}

export default PinnedPostItems;