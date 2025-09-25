import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialContainer = styled.section`
  padding: 100px 0;
  background: var(--bg-primary);
  position: relative;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  color: var(--primary-orange);
  margin-bottom: 60px;
  font-weight: 700;
`;

const TestimonialCard = styled(motion.div)`
  background: transparent;
  border-radius: 20px;
  padding: 50px 40px;
  border: 2px solid rgba(255, 137, 6, 0.4);
  position: relative;
  margin: 0 20px;
  backdrop-filter: blur(10px);
  
  &::before {
    content: '"';
    position: absolute;
    top: -20px;
    left: 30px;
    font-size: 6rem;
    color: var(--primary-orange);
    font-family: serif;
    opacity: 0.3;
  }
`;

const TestimonialText = styled.p`
  font-size: 1.3rem;
  line-height: 1.8;
  color: var(--text-primary);
  margin-bottom: 30px;
  font-style: italic;
`;

const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const ClientAvatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-orange), var(--secondary-orange));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
`;

const ClientDetails = styled.div`
  text-align: left;
  
  @media (max-width: 768px) {
    text-align: center;
  }
  
  .client-name {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--primary-orange);
    margin-bottom: 5px;
  }
  
  .client-position {
    color: var(--text-secondary);
    font-size: 0.9rem;
  }
`;

const NavigationDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 40px;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? 'var(--primary-orange)' : 'rgba(255, 137, 6, 0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--primary-orange);
    transform: scale(1.2);
  }
`;

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "GoWide transformed our digital presence completely. Their innovative approach and attention to detail exceeded our expectations. The team's expertise in both design and technology is remarkable.",
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      avatar: "SJ"
    },
    {
      text: "Working with GoWide was a game-changer for our business. They delivered a stunning website that not only looks amazing but also drives real results. Highly recommended!",
      name: "Ahmed Al-Rashid",
      position: "Founder, Digital Solutions",
      avatar: "AR"
    },
    {
      text: "The level of professionalism and creativity from GoWide is outstanding. They understood our vision and brought it to life with cutting-edge technology and beautiful design.",
      name: "Maria Rodriguez",
      position: "Marketing Director, InnovateCorp",
      avatar: "MR"
    },
    {
      text: "GoWide's team is incredibly talented and responsive. They delivered our project on time and within budget, with exceptional quality that impressed our entire organization.",
      name: "David Chen",
      position: "CTO, FutureTech",
      avatar: "DC"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <TestimonialContainer>
      <Container>
        <SectionTitle>What Our Clients Say</SectionTitle>
        
        <AnimatePresence mode="wait">
          <TestimonialCard
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <TestimonialText>
              {testimonials[currentIndex].text}
            </TestimonialText>
            
            <ClientInfo>
              <ClientAvatar>
                {testimonials[currentIndex].avatar}
              </ClientAvatar>
              <ClientDetails>
                <div className="client-name">
                  {testimonials[currentIndex].name}
                </div>
                <div className="client-position">
                  {testimonials[currentIndex].position}
                </div>
              </ClientDetails>
            </ClientInfo>
          </TestimonialCard>
        </AnimatePresence>
        
        <NavigationDots>
          {testimonials.map((_, index) => (
            <Dot
              key={index}
              active={index === currentIndex}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </NavigationDots>
      </Container>
    </TestimonialContainer>
  );
};

export default TestimonialSlider;