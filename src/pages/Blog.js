import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BlogContainer = styled.div`
  padding-top: 120px;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, rgba(255, 137, 6, 0.1), rgba(255, 137, 6, 0.05));
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
  
  .highlight {
    color: var(--primary-orange);
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 2rem;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const BlogCard = styled(motion.div)`
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 137, 6, 0.2);
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(255, 137, 6, 0.2);
  }
`;

const BlogDate = styled.span`
  color: var(--primary-orange);
  font-size: 0.9rem;
  font-weight: 500;
`;

const BlogTitle = styled.h3`
  margin: 1rem 0;
  color: var(--text-primary);
`;

const BlogExcerpt = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Digital Marketing in 2024",
      excerpt: "Explore the latest trends and technologies shaping digital marketing strategies for businesses worldwide.",
      date: "March 15, 2024"
    },
    {
      title: "Building Scalable Web Applications",
      excerpt: "Best practices for developing web applications that can handle growth and maintain performance.",
      date: "March 10, 2024"
    },
    {
      title: "Brand Identity Design Principles",
      excerpt: "Essential principles for creating memorable and effective brand identities that resonate with audiences.",
      date: "March 5, 2024"
    }
  ];

  return (
    <BlogContainer>
      <HeroSection>
        <Title>
          Our <span className="highlight">Blog</span>
        </Title>
        <Description>
          Insights, tips, and industry knowledge from our team of experts.
        </Description>
      </HeroSection>

      <BlogGrid>
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <BlogDate>{post.date}</BlogDate>
            <BlogTitle>{post.title}</BlogTitle>
            <BlogExcerpt>{post.excerpt}</BlogExcerpt>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default Blog;