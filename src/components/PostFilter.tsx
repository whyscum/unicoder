import React, {FC} from "react";
import Button from "../shared/ui/button/Button";
import {PostFilterProps} from "../shared/interfaces/interfaces";
import {FilterNames} from "../shared/enums/enum";

const PostFilter: FC<PostFilterProps> = props => {
    const {sort, sortIdDown, sortIdUp} = props

    return (
        <div>
            <Button onClick={sort}>{FilterNames.Alphabetically}</Button>
            <Button onClick={sortIdDown}>{FilterNames.DateDown}</Button>
            <Button onClick={sortIdUp}>{FilterNames.DateUp}</Button>
        </div>
    )
}

export default PostFilter;