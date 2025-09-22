import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container } from '../styles/GlobalStyles';

const TeamContainer = styled.section`
  padding: 6rem 2rem;
  background: transparent;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 70%, rgba(255, 137, 6, 0.03), transparent 50%);
    pointer-events: none;
  }
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
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const TeamCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 137, 6, 0.2);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 137, 6, 0.05), transparent);
    transition: left 0.6s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(255, 137, 6, 0.4);
    box-shadow: 0 20px 40px rgba(255, 137, 6, 0.15);
  }

  &.leadership {
    border-color: rgba(255, 137, 6, 0.5);
    background: rgba(255, 137, 6, 0.05);
  }

  body.light-theme & {
    background: rgba(255, 255, 255, 0.8);
  }
`;

const TeamImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-orange), var(--secondary-orange));
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 3rem;
  color: var(--text-primary);
  font-weight: 800;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  ${TeamCard}:hover &::before {
    transform: translateX(100%);
  }

  ${TeamCard}:hover & {
    transform: scale(1.1);
    box-shadow: 0 10px 25px rgba(255, 137, 6, 0.3);
  }
`;

const TeamInfo = styled.div`
  h3 {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.5rem;

    body.light-theme & {
      color: var(--bg-primary);
    }
  }
`;

const TeamRole = styled.div`
  color: var(--primary-orange);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const TeamBio = styled.p`
  color: var(--text-primary);
  opacity: 0.8;
  font-size: 0.9rem;
  line-height: 1.5;

  body.light-theme & {
    color: var(--bg-primary);
  }
`;

const TeamStats = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin: 3rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }
`;

const TeamStat = styled.div`
  text-align: center;

  .stat-number {
    display: block;
    font-size: 2rem;
    font-weight: 800;
    color: var(--primary-orange);
    margin-bottom: 0.3rem;
    line-height: 1;
  }

  .stat-label {
    color: var(--text-primary);
    opacity: 0.8;
    font-weight: 500;

    body.light-theme & {
      color: var(--bg-primary);
    }
  }
`;

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Creative Team',
      role: 'Design & Branding',
      bio: 'Our creative professionals bring your brand vision to life with innovative design solutions.',
      initial: 'C',
      leadership: false
    },
    {
      id: 2,
      name: 'Tech Team',
      role: 'Development & Technology',
      bio: 'Expert developers who build scalable, modern solutions using cutting-edge technologies.',
      initial: 'T',
      leadership: false
    },
    {
      id: 3,
      name: 'Marketing Team',
      role: 'Digital Marketing',
      bio: 'Strategic marketers who drive growth through data-driven campaigns and optimization.',
      initial: 'M',
      leadership: true
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
      <TeamContainer id="team">
        <SectionHeader>
          <SectionTitle>Meet Our <span className="highlight">Team</span></SectionTitle>
          <SectionSubtitle>
            Passionate professionals dedicated to your success
          </SectionSubtitle>
        </SectionHeader>

        <TeamStats>
          <TeamStat>
            <span className="stat-number">15+</span>
            <span className="stat-label">Team Members</span>
          </TeamStat>
          <TeamStat>
            <span className="stat-number">8+</span>
            <span className="stat-label">Specializations</span>
          </TeamStat>
          <TeamStat>
            <span className="stat-number">100%</span>
            <span className="stat-label">Dedication</span>
          </TeamStat>
        </TeamStats>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <TeamGrid>
            {teamMembers.map((member) => (
              <TeamCard
                key={member.id}
                variants={cardVariants}
                className={member.leadership ? 'leadership' : ''}
                whileHover={{ scale: 1.02 }}
              >
                <TeamImage>
                  {member.initial}
                </TeamImage>
                <TeamInfo>
                  <h3>{member.name}</h3>
                  <TeamRole>{member.role}</TeamRole>
                  <TeamBio>{member.bio}</TeamBio>
                </TeamInfo>
              </TeamCard>
            ))}
          </TeamGrid>
        </motion.div>
      </TeamContainer>
    </Container>
  );
};

export default TeamSection;