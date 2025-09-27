import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import teamTranslations from '../translations/teamTranslations';

const TeamPage = styled.div`
  min-height: 100vh;
  background: var(--bg-primary);
  color: var(--text-primary);
`;

const TeamHero = styled.section`
  padding: 120px 0 80px;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 137, 6, 0.1);
  color: var(--primary);
  padding: 8px 20px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 20px;
  border: 1px solid rgba(255, 137, 6, 0.2);
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;

  .highlight {
    color: var(--primary);
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 40px;
  line-height: 1.6;

  .highlight {
    color: var(--primary);
    font-weight: 600;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const StatItem = styled.div`
  text-align: center;

  .stat-number {
    display: block;
    font-size: 3rem;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 10px;
  }

  .stat-label {
    color: var(--text-secondary);
    font-size: 1rem;
  }
`;

const TeamSection = styled.section`
  padding: 80px 0;
  background: var(--bg-secondary);
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const TeamCard = styled.div`
  background: var(--bg-primary);
  padding: 30px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  &.leadership {
    border-color: var(--primary);
    background: linear-gradient(135deg, rgba(255, 137, 6, 0.1) 0%, var(--bg-primary) 100%);

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, var(--primary), #e67c00);
      clip-path: polygon(100% 0, 0 0, 100% 100%);
    }
  }

  .team-avatar {
    width: 80px;
    height: 80px;
    background: rgba(255, 137, 6, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    font-size: 2rem;
    color: var(--primary);
    border: 2px solid rgba(255, 137, 6, 0.2);
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .team-role {
    color: var(--primary);
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 15px;
  }

  .team-bio {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 0.9rem;
  }
`;

const Team = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const translations = teamTranslations[currentLang] || teamTranslations.en;
  
  const teamIcons = [
    "fas fa-crown",
    "fas fa-handshake",
    "fas fa-server",
    "fas fa-database",
    "fas fa-laptop-code",
    "fas fa-laptop-code",
    "fas fa-palette",
    "fas fa-paint-brush",
    "fas fa-bullhorn",
    "fas fa-share-alt",
    "fas fa-pen-fancy",
    "fas fa-chess",
    "fas fa-project-diagram",
    "fas fa-cogs",
    "fas fa-shield-alt"
  ];

  return (
    <TeamPage>
      <TeamHero>
        <Container>
          <Badge>
            <i className="fas fa-users"></i>
            {translations.ourTeam}
          </Badge>
          <HeroTitle>
            {translations.title}
          </HeroTitle>
          <HeroSubtitle>
            {translations.subtitle}
          </HeroSubtitle>

          <StatsGrid>
            <StatItem>
              <span className="stat-number">15+</span>
              <span className="stat-label">{translations.teamMembers}</span>
            </StatItem>
            <StatItem>
              <span className="stat-number">5+</span>
              <span className="stat-label">{translations.yearsExperience}</span>
            </StatItem>
            <StatItem>
              <span className="stat-number">100+</span>
              <span className="stat-label">{translations.projectsDelivered}</span>
            </StatItem>
          </StatsGrid>
        </Container>
      </TeamHero>

      <TeamSection>
        <Container>
          <TeamGrid>
            {translations.members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TeamCard className={index === 0 ? 'leadership' : ''}>
                  <div className="team-avatar">
                    <i className={teamIcons[index]}></i>
                  </div>
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </TeamCard>
              </motion.div>
            ))}
          </TeamGrid>
        </Container>
      </TeamSection>
    </TeamPage>
  );
};

export default Team;