import LikeButton from './LikeButton/LikeButton';
import './List.css'


export default function List({ data, deletePost }) {


  return (
  <>

      <div className= 'list'>
        <div className= 'author'>
          <img 
            src={data.author.profileImg} 
            style={{ width: '50px', height: '50px', borderRadius: '50%' }} 
          />
          <span className= 'name'>{data.author.name}</span>
          <span>{data.author.role}</span>
        </div>
          <h3 className= 'title'>{data.title}</h3>
          <p>{data.content}</p>

        <div className='tags'>
          {data.tags.map((tag, index) => (
            <span key={index}>
              #{tag}
            </span>
          ))}
        </div>

          <p className='date'>{data.createdAt}</p>
          <LikeButton/>
          <button onClick={()=> deletePost(data.id)}>삭제</button>

      </div>
    </>
  );
}

