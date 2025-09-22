import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container } from '../styles/GlobalStyles';

const ProductsContainer = styled.section`
  padding: 6rem 2rem;
  background: transparent;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  line-height: 1.2;

  body.light-theme & {
    color: var(--bg-primary);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-primary);
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;

  body.light-theme & {
    color: var(--bg-primary);
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProductCard = styled(motion.div)`
  height: 320px;
  perspective: 1000px;
  cursor: pointer;
`;

const ProductCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;

  ${ProductCard}:hover & {
    transform: rotateY(180deg);
  }
`;

const ProductCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 15px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 137, 6, 0.3);
  background: transparent;
  backdrop-filter: blur(10px);
`;

const ProductCardBack = styled(ProductCardFront)`
  transform: rotateY(180deg);
`;

const ProductIcon = styled.div`
  font-size: 3rem;
  color: var(--primary-orange);
  margin: 1rem 0;
`;

const ProductTitle = styled.h3`
  color: var(--text-primary);
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-weight: 600;

  body.light-theme & {
    color: var(--bg-primary);
  }
`;

const ProductTagline = styled.p`
  color: var(--primary-orange);
  font-size: 0.9rem;
  margin-top: 1rem;
  font-style: italic;
`;

const ProductDescription = styled.p`
  color: var(--text-primary);
  font-size: 0.85rem;
  line-height: 1.4;
  margin-bottom: 1.5rem;
  text-align: center;

  body.light-theme & {
    color: var(--bg-primary);
  }
`;

const LearnMoreBtn = styled.a`
  background: var(--primary-orange);
  color: var(--text-primary);
  padding: 0.7rem 1.5rem;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s;
  margin-top: auto;

  &:hover {
    background: var(--secondary-orange);
    transform: translateY(-2px);
  }
`;

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      title: "UpFlyOver",
      icon: "fas fa-globe-americas",
      tagline: "Global B2B Networking",
      description: "Connect with verified businesses worldwide through AI-powered matching and intelligent networking platform.",
      link: "/upflyover"
    },
    {
      id: 2,
      title: "Gymestry",
      icon: "fas fa-dumbbell",
      tagline: "Fitness Management",
      description: "Complete gym management solution with member tracking, workout plans, and business analytics.",
      link: "/gymestry"
    },
    {
      id: 3,
      title: "Rendre",
      icon: "fas fa-paint-brush",
      tagline: "Creative Solutions",
      description: "Professional design and creative services platform for modern businesses and brands.",
      link: "#contact",
      comingSoon: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <Container>
      <ProductsContainer id="products">
        <SectionHeader>
          <SectionTitle>Our <span className="highlight">Products</span></SectionTitle>
          <SectionSubtitle>
            Innovative digital solutions designed to transform your business
          </SectionSubtitle>
        </SectionHeader>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ProductsGrid>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
              >
                <ProductCardInner>
                  <ProductCardFront>
                    <ProductIcon>
                      <i className={product.icon}></i>
                    </ProductIcon>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductTagline>{product.tagline}</ProductTagline>
                  </ProductCardFront>
                  
                  <ProductCardBack>
                    <ProductDescription>
                      {product.description}
                    </ProductDescription>
                    <LearnMoreBtn href={product.link}>
                      {product.comingSoon ? 'Coming Soon' : 'Learn More'}
                    </LearnMoreBtn>
                  </ProductCardBack>
                </ProductCardInner>
              </ProductCard>
            ))}
          </ProductsGrid>
        </motion.div>
      </ProductsContainer>
    </Container>
  );
};

export default ProductsSection;