import * as React from "react";
import {ReactNode} from "react";

export interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export interface MyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

export interface MyModalProps {
    children: ReactNode
    onClose: () => void
    visible: boolean
}

export interface PostFilterProps {
    sort: () => void
    sortIdDown: () => void
    sortIdUp: () => void
}

export interface Post {
    title: string
    body: string
    ans: string
    id: number
}

export interface MyFormProps {
    create: (newPost: Post) => void
}

export interface PinnedPostItemsProps {
    post: Post
    number: number
    unpin: (post: Post) => void
}

export interface PostItemsProps {
    post: Post
    number: number
    remove: (post: Post) => void
    pin: (post: Post) => void
}

export interface PostListProps {
    posts: Array<Post>
    remove: (post: Post) => void
    pinned: Array<Post>
    pin: (post: Post) => void
    unpin: (post: Post) => void
}