import React from 'react'
import './Posts.css'

const Posts = ({photos, loading}) => {
    if (loading){
        return <h2>Loading...</h2>
    }
    return (
       <>
        <ul className="post-body">
            {photos.map(photos => (
                <li key={photos.id} className="List-group-item"><span>Sno.</span>
                  {photos.id} 
                  <>
                  <img src=  {photos.url}  alt="" /> 
                  </>
                     </li>
                     
                    
            ))}
             </ul>
             </>

    );
};
export default Posts;