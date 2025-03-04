import React, {FC} from "react";
import MyButton from "../shared/ui/button/MyButton";
import styled from "styled-components"
import {PostItemsProps} from "../shared/interfaces/interfaces";

export const PostStyled = styled.div `
    display: flex;
    padding: 15px;
    border: 2px solid dimgray;
    border-radius: 5px;
    margin-top: 15px;
    justify-content: space-between;
    align-items: center;
`

const PostItem: FC<PostItemsProps> = (props) => {
    return (
        <PostStyled>
            <div>
                <strong>{props.number}. {props.post.title}({props.post.body})</strong>
            </div>
            <div>
                {props.post.ans}
            </div>
            <div>
                <MyButton onClick ={()=> props.remove(props.post)}>
                    Delete
                </MyButton>
                <MyButton onClick ={()=> props.pin(props.post)}>
                    Pin
                </MyButton>
            </div>
        </PostStyled>
    )
}

export default PostItem;