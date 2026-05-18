// src/pages/PostsPage.jsx
import { Link } from 'react-router';
import './PostsPage.css';

export default function PostsPage({ posts }) {
    return (
        <div className="posts-container">
            <h2 className="posts-header">전체 글 ({posts.length}개)</h2>
            <div className="posts-grid">
                {posts.map((post) => (
                    <Link key={post.id} to={`/detail/${post.id}`} className="post-card-link">
                        <div className="post-card">
                            <h3 className="post-card-title">{post.title}</h3>
                            <small className="post-card-meta">
                                {post.author} · {post.createdAt} · ❤️ {post.likeCount}
                            </small>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}