import { Navigate, Route, Routes } from "react-router-dom"
import UsersPage from "../../pages/users"
import PostsPage from "../../pages/posts"
import CommentsPage from "../../pages/comments"
import TasksPage from "../../pages/tasks"
import GalleriesPage from "../../pages/gallery"

const Content = ()=>{
    return(
        <div className='fixed top-0 left-0 w-full h-screen pt-16 pr-64 dark:bg-gray-800'>
            <div className="w-full h-full p-4">
                <Routes>
                    <Route path="/users" element={<UsersPage/>}/>
                    <Route path="/posts" element={<PostsPage/>}/>
                    <Route path="/comments" element={<CommentsPage/>}/>
                    <Route path="/tasks" element={<TasksPage/>}/>
                    <Route path="gallery" element={<GalleriesPage/>}/>
                    <Route path="/" element={<Navigate to={'/users'}/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default Content