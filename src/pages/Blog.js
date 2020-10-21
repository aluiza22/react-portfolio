import React from "react";
import styled from "styled-components";
import "../App.css";

const PostGrid = styled.div`
  position: relative;
  max-width: 100%;
  border: none;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const Post = styled.div`
  position: relative;
  padding: 30px 20px 20px;
  border: 2px solid var(--roxin);
  h3 a {color: var(--links); font-size: 1.4rem;}
  p {margin:0;font-size: .8rem; color: var(--cinza)}
  time {background: var(--roxin); color: #fff; position:absolute; top: 0; left:0; 
      font-size: .6rem; padding: .1rem 10px; font-weight: bold;} 
`;

const LoadingText = styled.div`
  color: var(--verde);
`;
export const Blog = (props) => {
    
        return (   
            <section id="BlogPage" className="page">
              <h2>My Frontend Roadmap</h2>
              <LoadingText>{props.posts.length > 0 ? '': `loading...`}</LoadingText>
              <PostGrid>                
                {props.posts.map((post) => {
                    let post_date = new Date(post.date);
                    return (<Post key={post.id} style={{ backgroundImage: `linear-gradient(rgba(var(--image_mask_start),.79), rgba(var(--image_mask_start),.99)), url('${post._embedded['wp:featuredmedia'][0].source_url}')` }}>
                      <h3><a rel="noopener noreferrer" target="_blank" href={post.link}>{post.title.rendered}</a></h3>
                      <time>{post_date.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                      <div dangerouslySetInnerHTML={ {__html: post.excerpt.rendered } }></div>
                    </Post>);
                })}
              </PostGrid>
            </section>
        );  
}

export default Blog;
