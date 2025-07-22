// import React, { useEffect, useState } from 'react'

// function Home() {
//   let API_URL = "https://fakestoreapi.com/products"
//   const [loading , setLoading] = useState(false);
//   const [posts , setPosts] = useState([]);
//   async function fetchProductData() {
//     setLoading(true);
//     try{
//       let res = await fetch(API_URL);
//       let data = await res.json();
//       setPosts(data);
//     }
//     catch(error){
//       console.log("Error 404: Data not Found");
//       setPosts([]);
//     }
//     setLoading(false);
//   }

//   useEffect(()=>{
//     fetchProductData();
//   } , [])
//   return (
//     <div>
//       {
//         loading  ? <Spinner></Spinner> : 
//         posts.length > 0 ? <div>
//           posts.map((post)={<Product key={posts.id} posts={posts}></Product>})
//         </div> : <div><p>Data Not found</p></div>
//       }
//     </div>
//   )
// }

// export default Home





import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import Spinner from '../components/Spinner';

function Home() {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log("Error 404: Data not Found");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className="products-container">
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="no-data">
          <p>Data Not Found</p>
        </div>
      )}
    </div>
  );
}

export default Home;
