import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getBlogPosts } from '../lib/sanity';

const BlogContainer = styled.div`
  padding-top: 120px;
  min-height: 100vh;
  background: transparent;
  
  body.light-theme & {
    background: rgba(255, 255, 254, 0.95);
  }
`;

const HeroSection = styled.section`
  padding: 6rem 2rem;
  text-align: center;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 480px) {
    padding: 4rem 1rem;
  }
  
  @media (max-width: 768px) {
    padding: 5rem 1.5rem;
  }
  
  @media (min-width: 1920px) {
    max-width: 1600px;
    padding: 8rem 2rem;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: var(--text-primary);
  
  .highlight {
    color: var(--primary-orange);
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  
  @media (min-width: 1920px) {
    font-size: 4.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 3rem;
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin: 0 auto 2rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: 0 auto 2.5rem;
  }
  
  @media (min-width: 1920px) {
    font-size: 1.3rem;
    max-width: 700px;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  @media (min-width: 1440px) {
    max-width: 1400px;
  }
  
  @media (min-width: 1920px) {
    max-width: 1600px;
    gap: 2.5rem;
  }
`;

const BlogCard = styled(motion.article)`
  background: var(--card-bg);
  border-radius: 20px;
  border: 1px solid rgba(255, 137, 6, 0.2);
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(255, 137, 6, 0.2);
  }
  
  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-5px);
    }
  }
  
  .blog-image {
    width: 100%;
    height: 200px;
    background: linear-gradient(135deg, var(--primary-orange), rgba(255, 137, 6, 0.8));
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .placeholder {
      color: white;
      font-size: 3rem;
    }
  }
  
  .blog-content {
    padding: 2rem;
    
    @media (max-width: 480px) {
      padding: 1.5rem;
    }
    
    .blog-meta {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
      font-size: 0.9rem;
      color: var(--text-secondary);
      
      .date {
        color: var(--primary-orange);
      }
    }
    
    h3 {
      color: var(--text-primary);
      font-size: 1.5rem;
      margin-bottom: 1rem;
      line-height: 1.3;
      
      @media (max-width: 480px) {
        font-size: 1.3rem;
      }
    }
    
    p {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }
    
    .read-more {
      color: var(--primary-orange);
      text-decoration: none;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateX(5px);
      }
    }
  }
`;

const LoadingState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-secondary);
`;

const Blog = () => {
  const { t } = useTranslation();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsData = await getBlogPosts();
        console.log('Fetched blogs data:', blogsData); // Debug log
        setBlogs(blogsData || []);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <BlogContainer>
        <LoadingState>
          <h2>{t('blog.loading')}</h2>
        </LoadingState>
      </BlogContainer>
    );
  }

  return (
    <BlogContainer>
      <HeroSection>
        <Title>
          {t('blog.title')}
        </Title>
        <Description>
          {t('blog.subtitle')}
        </Description>
      </HeroSection>

      <section style={{ padding: '0 0 6rem' }}>
        <BlogGrid>
          {blogs.map((blog, index) => (
            <BlogCard
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="blog-image">
                {blog.featuredImage ? (
                  <img src={blog.featuredImage} alt={blog.title || 'Blog post image'} />
                ) : (
                  <div className="placeholder">
                    <i className="fas fa-newspaper"></i>
                  </div>
                )}
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="date">{blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString() : t('blog.noDate')}</span>
                  <span>•</span>
                  <span>{blog.category || t('blog.general')}</span>
                </div>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                {blog.author && <p><strong>By:</strong> {blog.author}</p>}
                <Link to={`/blog/${blog.slug?.current}`} className="read-more">
                  {t('common.readMore')} <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </BlogCard>
          ))}
        </BlogGrid>
      </section>
    </BlogContainer>
  );
};

export default Blog;