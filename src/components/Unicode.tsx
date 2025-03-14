import React, {useCallback, useState} from "react";
import {AppStyled} from "../shared/styled/styled-components";
import Button from "../shared/ui/button/Button";
import Modal from "../shared/ui/modalka/Modal";
import PostForm from "./PostForm";
import PostList from "./PostList";
import PostFilter from "./PostFilter"
import {Post} from "../shared/interfaces/interfaces";


/*const postsApi = new PostsApi()*/

const Unicode = () => {

    const [posts, setPosts] = useState<Post[]>([])
    const [pinned, setPinned] = useState<Post[]>([])
    const [modal, setModal] = useState(false)
    const [modalTwo, setModalTwo] = useState(false)

    const sortedPost = useCallback(() => {
        setPosts(prev => ([...prev].sort((a, b) => a.title.localeCompare(b.title))))
    }, [])

    const sortedPostByIdDown = useCallback(() => {
        setPosts(prev => ([...prev].sort((a, b) => a.id - b.id)))
    }, [])

    const sortedPostByIdUp = useCallback(() => {
        setPosts(prev => ([...prev].sort((a, b) => b.id - a.id)))
        /*localStorage.setItem("posts")*/
    }, [posts])

    const createPost = useCallback((newPost: Post) => {
        setPosts([...posts, newPost])
        setModal(false)
        /*localStorage.setItem("posts")*/
    }, [posts])

    const removePost = useCallback((post: Post) => {
        const getRemove = posts.filter(el => el.id !== post.id)
        setPosts(getRemove)
        unpinPost(post)
        /*localStorage.setItem("posts")*/
    }, [posts])

    const pinPost = useCallback((post: Post) => {
        const getPin = pinned.find(el => el.id === post.id)
        if (getPin) {
            return
        }
        const getPinned = posts.find(el => el.id === post.id)
        if (!getPinned) {
            return
        }
        setPinned([...pinned, getPinned])
        /*localStorage.setItem('pinnedPost', JSON.stringify([...pinned, getPinned]))*/
    }, [posts])

    const unpinPost = useCallback((post: Post) => {
        const getUnpin = pinned.filter(el => el.id !== post.id)
        setPinned(getUnpin)
        /*localStorage.setItem('pinnedPost', JSON.stringify(getUnpin))*/
    }, [pinned])

    /*useEffect(() => {
        localStorage.setItem("posts")
        const res = postsApi.getAll()
        setPosts(JSON.stringify(res))
    }, [])*/

    return (
        <AppStyled>
            <Button onClick={() => setModal(true)}>Create</Button>
            <Button onClick={() => setModalTwo(true)}>Sort</Button>
            <Modal visible={modal} onClose={() => setModal(false)}>
                <PostForm create={createPost}/>
            </Modal>
            {posts.length
                ? <PostList remove={removePost} pin={pinPost} pinned={pinned} posts={posts} unpin={unpinPost}/>
                : <h1 style={{textAlign: 'center'}}>Posts is not defined!</h1>}
            <Modal visible={modalTwo} onClose={() => setModalTwo(false)}>
                <PostFilter sort={sortedPost} sortIdDown={sortedPostByIdDown} sortIdUp={sortedPostByIdUp}/>
            </Modal>
        </AppStyled>)
}

export default Unicode