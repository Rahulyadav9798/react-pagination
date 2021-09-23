import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Posts from './Posts';
import Pagination from './Pagination';


const App = () => {
  //Get current posts
  const [photos, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] =useState(1);
  const [postsPerPage] = useState(500);

  //current page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/photos');

      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
}, []);
//Get current posts
const indexOfLastPost = currentPage * postsPerPage; 
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = photos.slice(indexOfFirstPost, indexOfLastPost);

return (
  
  <>
  <h1 style={{color:"royalblue", textAlign:"center"}}>React Feed Page With Pagination</h1>
    <Posts photos={currentPosts} loading={loading}/>
    <Pagination  postsPerPage={postsPerPage} totalPosts={photos.length}
    paginate={paginate}/>
    </>
  );
}

export default App;
