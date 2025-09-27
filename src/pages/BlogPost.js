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
          `*[_type == "blogPost" && slug.current == $slug][0]{
            _id,
            title,
            slug,
            content,
            category,
            author,
            publishedDate,
            "featuredImage": featuredImage.asset->url
          }`,
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
          {post.publishedDate && new Date(post.publishedDate).toLocaleDateString()} • {post.category} • By {post.author}
        </p>
        <div style={{color: 'var(--text-primary)', lineHeight: '1.6', fontSize: '1.1rem'}}>
          {post.content && post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.trim() === '') return null;
            
            // Check if it's a heading (starts with capital letters and is short)
            const isHeading = paragraph.length < 100 && !paragraph.includes('.') && paragraph === paragraph.trim();
            
            if (isHeading) {
              return (
                <h2 key={index} style={{
                  color: 'var(--primary-orange)',
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  margin: '2rem 0 1rem 0'
                }}>
                  {paragraph}
                </h2>
              );
            }
            
            return (
              <p key={index} style={{
                marginBottom: '1.5rem',
                textAlign: 'justify'
              }}>
                {paragraph.split('\n').map((line, lineIndex) => (
                  <span key={lineIndex}>
                    {line}
                    {lineIndex < paragraph.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </p>
            );
          })}
        </div>
      </Container>
    </BlogPostContainer>
  );
};

export default BlogPost;