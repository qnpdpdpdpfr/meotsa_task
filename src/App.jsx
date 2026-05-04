import './App.css'
import List from './components/List/List.jsx'
import {postData} from './constants/postData'
import {useState} from 'react'

export default function App() {

  var title = "LikeLion HUFS";
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');

    const [posts, setPosts]= useState(postData);

    const deletePost = (id) => {setPosts(posts.filter((post)=> post.id !== id));};
  

  return (
    <>
      {/* 여긴 nav바 부분임 */}
      <div className='navbar'>
        <span className='navbar-title'>{title} 블로그</span>
      </div>
      {/* 글 부분임 */}


      {posts.map(function (data) {
        return (
          <List
            data={data}
            key={data.id}
            deletePost= {deletePost}
          />
        );
      })}
      <div>
          <input placeholder="제목" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
          <input placeholder="내용" value={newContent} onChange={(e) => setNewContent(e.target.value)} />
          <button className= "chuga"
            onClick={() => {
              const newPost= {
                id: Date.now(),
                title: newTitle,
                content: newContent,
                author: {
                  name: '나',
                  role: '14기 아기사자',
                  profileImg: "/profile.png",
                },
                tags: [],
                likes:0,
                createdAt: '2026-05-04',
              };
              setPosts([...posts, newPost])

              setNewTitle('')
              setNewContent('')
            }}
          >
            글 추가
          </button>
        </div>
    </>
  )
}