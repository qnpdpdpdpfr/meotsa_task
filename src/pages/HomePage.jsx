// src/pages/HomePage.jsx
import { Link } from 'react-router';
import './HomePage.css';
import PostsPage from './PostsPage'; 

export default function HomePage({ posts }) {
    return (
        <div className="home-container">
            <h1 className="home-title">
                안녕하세요, 김멋사의 블로그에 오신 것을 환영합니다 👋
            </h1>
            
            <div className="home-intro">
                <p>블로그에서 여러 정보를 얻어가세요.</p>
            </div>


            <div className="home-posts-section">
                <PostsPage posts={posts} />
            </div>
        </div>
    );
}