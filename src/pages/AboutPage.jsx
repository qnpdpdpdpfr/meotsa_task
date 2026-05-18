// src/pages/AboutPage.jsx
import './AboutPage.css'

export default function AboutPage() {
    return (
        <div className="about-page-container">

            <h1 className="about-title">소개 페이지</h1>
            
            <div className="about-card">
                <p className="myname">홍소담</p>
                
                <div className="info-tags">
                    <span className="inftag">Social Science & AI 융합전공</span>
                    <span className="info-tag">3학년</span>
                    <span className="info-tag mbti">INTP</span>
                </div>
                
                <p className="about-description">
                    프론트엔드 개발을 배우고 있습니다. 
                </p>
            </div>
        </div>
    );
}