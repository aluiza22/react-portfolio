import React from "react";
import styled from "styled-components";
import "../App.css";


const Post = styled.div`
  h3 {color: var(--links);}
  small {color: var(--main_color);}
`;

export class Blog extends React.Component {
    constructor() {
        super();
        this.state = {
          posts: []
        }
    }
    componentDidMount() {
        let dataURL = "https://frontmap.anadev.com.br/wp-json/wp/v2/posts";
        fetch(dataURL)
          .then(res => res.json())
          .then(res => {
            this.setState({
              posts: res
            })
          })
    }
    render() {
        return (   
            <section id="BlogPage" className="page">
              <h2>My Frontend Roadmap</h2>
              {this.state.posts.map((post) => {
                  let post_date = new Date(post.date);
                  return (<Post key={post.id}>
                    <h3>{post.title.rendered}</h3>
                    <small>{post_date.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</small>
                    <div dangerouslySetInnerHTML={ {__html: post.excerpt.rendered } }></div>
                  </Post>);
              })}
            </section>
        );
    }

  
}

export default Blog;
