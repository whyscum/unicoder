import React, {FC} from "react";
import MyButton from "../shared/ui/button/MyButton";
import styled from "styled-components"
import {PinnedPostItemsProps} from "../shared/interfaces/interfaces";

export const PostStyled = styled.div `
    display: flex;
    padding: 15px;
    border: 2px solid dimgray;
    border-radius: 5px;
    margin-top: 15px;
    justify-content: space-between;
    align-items: center;
`

const PinnedPostItems: FC<PinnedPostItemsProps> = (props) => {
    return (
        <PostStyled>
            <div>
                <strong>{props.number}. {props.post.title}({props.post.body})</strong>
            </div>
            <div>
                {props.post.ans}
            </div>
            <div>
                <MyButton onClick ={()=> props.unpin(props.post)}>
                    Unpin
                </MyButton>
            </div>
        </PostStyled>
    )
}

export default PinnedPostItems;