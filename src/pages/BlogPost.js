import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { client } from '../lib/sanity';

const BlogPostContainer = styled.div`
  padding-top: 120px;
  min-height: 100vh;
  background: transparent;
  
  body.light-theme & {
    background: rgba(255, 255, 254, 0.95);
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await client.fetch(
          `*[_type == "blogPost" && slug.current == $slug][0]`,
          { slug }
        );
        setPost(postData);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) return <BlogPostContainer><Container><h2>Loading...</h2></Container></BlogPostContainer>;
  if (!post) return <BlogPostContainer><Container><h2>Post not found</h2></Container></BlogPostContainer>;

  return (
    <BlogPostContainer>
      <Container>
        <h1 style={{color: 'var(--text-primary)', marginBottom: '1rem'}}>{post.title}</h1>
        <p style={{color: 'var(--text-secondary)', marginBottom: '2rem'}}>
          {post.publishedAt && new Date(post.publishedAt).toLocaleDateString()} • {post.category}
        </p>
        <div style={{color: 'var(--text-primary)', lineHeight: '1.6', fontSize: '1.1rem'}}>
          {post.content}
        </div>
      </Container>
    </BlogPostContainer>
  );
};

export default BlogPost;