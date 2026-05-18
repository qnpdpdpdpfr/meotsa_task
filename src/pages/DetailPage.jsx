// src/pages/DetailPage.jsx
import { useParams, useNavigate } from 'react-router';   // useNavigate 추가
import { useState, useEffect } from 'react';

export default function DetailPage({ posts }) {
    const { id } = useParams();
    const navigate = useNavigate();                       // 추가
    const [post, setPost] = useState(null);

    useEffect(() => {
        const matched = posts.filter((p) => p.id === Number(id))[0];
        setPost(matched);
    }, [id]);

    if (!post) {
        return <div style={{ padding: '20px' }}>로딩 중...</div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <button onClick={() => navigate(-1)}>← 뒤로</button>   {/* 추가 */}
            <h1>{post.title}</h1>
            <p style={{ color: '#6b7280' }}>
                {post.author} · {post.createdAt} · ❤️ {post.likeCount}
            </p>
            <hr />
            <p>{post.description}</p>
        </div>
    );
}