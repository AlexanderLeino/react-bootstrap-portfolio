import React, { useEffect, useState } from "react";
import { GET_BLOG_POSTS } from "../utils/queries";
import { Container,  Col } from "react-bootstrap";

function Articles() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    gql(GET_BLOG_POSTS);
  }, []);

  async function gql(query) {
    setIsLoading("Loading...")
    const data = await fetch("https://api.hashnode.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    });

    const apiResponse = await data.json();
    if(apiResponse) setIsLoading(false)
    setBlogPosts(apiResponse.data.user.publication.posts);
  }

  if(isLoading){
    return <div style={{display: 'flex', justifyContent: 'center', fontSize: '30px'}}>{isLoading}</div>
  }
  return (
    <>
      {blogPosts.map((post) => {
        return (
          <Container className="mt-5" key={post.slug}>
            <Col
              className="p-4 ms-3 me-3 text-container"
              style={{
                boxShadow: "5px 5px 5px 1px #888888",
                padding: "20px",
                border: "2px solid black",
                maxWidth: "fit-content",
                borderRadius: "25px",
              }}
            >
              <h5 style={{ fontWeight: "600", fontSize: "20px" }}>
                {post.title}
              </h5>
              <p style={{ fontSize: "18px" }}>{post.brief}</p>
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://alexanderleino.hashnode.dev/${post.slug}/`}
              >
                Read More..
              </a>
            </Col>
          </Container>
        );
      })}
    </>
  );
}

export default Articles;
