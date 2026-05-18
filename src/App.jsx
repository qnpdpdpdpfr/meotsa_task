// App.jsx (NavBar 추가)
import { Routes, Route } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage';
import data from './dummy/data';
import DetailPage from './pages/DetailPage';
import PostsPage from './pages/PostsPage';
import AboutPage from './pages/AboutPage'

function App() {
    return (
        <>
            <NavBar />        {/* ← Routes 바깥에! */}
            <Routes>
                <Route path="/" element={<HomePage posts={data} />} />
                <Route path="/detail/:id" element={<DetailPage posts={data} />} />
                <Route path="/posts" element={<PostsPage posts={data} />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </>
    );
}

export default App;