import React, {useState} from "react";
import MyModal from "./shared/ui/modalka/MyModal";
import MyForm from "./components/MyForm";
import PostList from "./components/PostList";
import MyButton from "./shared/ui/button/MyButton";
import PostFilter from "./components/PostFilter";
import styled from "styled-components"
import {Post} from "./shared/interfaces/interfaces";

const AppStyled = styled.div`
    width: 800px;
`

function App() {

    const[posts, setPosts] = useState<Post[]>(localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts') as string, ) : [])
    const[pinned, setPinned] = useState<Post[]>(localStorage.getItem('pinnedPost') ? JSON.parse(localStorage.getItem('pinnedPost') as string, ) : [])
    const[modal, setModal] = useState(false)
    const[modalTwo, setModalTwo] = useState(false)

    const sortedPost = () => {
        setPosts([...posts].sort((a, b) => a.title.localeCompare(b.title)))
    }

    const sortedPostByIdDown = () => {
        setPosts([...posts].sort((a, b) => a.id - b.id))
    }

    const sortedPostByIdUp = () => {
        setPosts([...posts].sort((a, b) => b.id - a.id))
    }

    const createPost = (newPost: Post) => {
        setPosts([...posts, newPost])
        setModal(false)
        localStorage.setItem('posts', JSON.stringify([...posts, newPost]))
    }

    const removePost = (post: Post) => {
        const getRemove = posts.filter(p => p.id !== post.id)
        setPosts(getRemove)
        unpinPost(post)
        localStorage.setItem('posts', JSON.stringify(getRemove))
    }

    const pinPost = (post: Post) => {
        const getPin = pinned.find(p => p.id === post.id)
        if(getPin){
            return
        }
        const getPinned = posts.find(p => p.id === post.id)
        if(!getPinned){
            return
        }
        setPinned([...pinned, getPinned])
        localStorage.setItem('pinnedPost', JSON.stringify([...pinned, getPinned]))
    }

    const unpinPost = (post: Post) => {
        const getUnpin = pinned.filter(p => p.id !== post.id)
        setPinned(getUnpin)
        localStorage.setItem('pinnedPost',JSON.stringify(getUnpin))
    }

    return (
        <AppStyled>
            <MyButton onClick={() => setModal(true)}>Create</MyButton>
            <MyButton onClick={() => setModalTwo(true)}>Sort</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <MyForm create={createPost}/>
            </MyModal>
            {posts.length
                ? <PostList remove={removePost} pin={pinPost} pinned={pinned} posts={posts} unpin={unpinPost}/>
                : <h1 style={{textAlign: 'center'}}>Posts is not defined!</h1>}
            <MyModal visible={modalTwo} setVisible={setModalTwo}>
                <PostFilter sort={sortedPost} sortIdDown={sortedPostByIdDown} sortIdUp={sortedPostByIdUp}/>
            </MyModal>
        </AppStyled>
    )
}

export default App