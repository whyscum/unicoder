import React, {FC} from "react";
import MyButton from "../shared/ui/button/MyButton";
import {PostFilterProps} from "../shared/interfaces/interfaces";

export enum FilterNames {
    'Alphabetically'='A-Z',
    'DateDown'='Date↓',
    'DateUp'='Date↑'
}

const PostFilter: FC<PostFilterProps> = ({sort, sortIdDown, sortIdUp}) => {

    return (
        <div>
            <MyButton onClick={sort}>{FilterNames.Alphabetically}</MyButton>
            <MyButton onClick={sortIdDown}>{FilterNames.DateDown}</MyButton>
            <MyButton onClick={sortIdUp}>{FilterNames.DateUp}</MyButton>
        </div>
    )
}

export default PostFilter;