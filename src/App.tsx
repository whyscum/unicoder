import {useState,useMemo} from "react";
import MyModal from "./shared/ui/modalka/MyModal";
import MyForm from "./components/MyForm";
import PostList from "./components/PostList";
import MyButton from "./shared/ui/button/MyButton";
import PostFilter from "./components/PostFilter";
import styled from "styled-components"

const AppStyled = styled.div`
    width: 800px;
`

function App() {

    const[posts, setPosts] = useState(localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts'), ) : [])
    const[pinned, setPinned] = useState(localStorage.getItem('pinnedPost') ? JSON.parse(localStorage.getItem('pinnedPost'), ) : [])
    const[modal, setModal] = useState(false)
    const[modalTwo, setModalTwo] = useState(false)

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
        localStorage.setItem('posts', JSON.stringify([...posts, newPost]))
    }

    const removePost = (post) => {
        const getRemove = posts.filter(p => p.id !== post.id)
        setPosts(getRemove)
        unpinPost(post)
        localStorage.setItem('posts', JSON.stringify(getRemove))
    }

    const pinPost = (post) => {
        const getPin = pinned.find(p => p.id === post.id)
        if(getPin){
            return
        }
        const getPinned = posts.find(p => p.id === post.id)
        setPinned([...pinned, getPinned])
        localStorage.setItem('pinnedPost', JSON.stringify([...pinned, getPinned]))
    }

    const unpinPost = (post) => {
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
            <PostList remove={removePost} pin={pinPost} pinned={pinned} posts={posts} unpin={unpinPost}/>
            <MyModal visible={modalTwo} setVisible={setModalTwo}>
                <PostFilter />
            </MyModal>
        </AppStyled>
    )
}

export default App