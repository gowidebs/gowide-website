import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  const teamMembers = [
    {
      name: "Ashique Ebrahim",
      role: "Founder",
      bio: "Visionary leader driving GoWide's strategic direction and ensuring project excellence.",
      icon: "fas fa-crown",
      isLeadership: true
    },
    {
      name: "Adish A",
      role: "Co-founder",
      bio: "Co-founder bringing technical expertise and innovative solutions to GoWide.",
      icon: "fas fa-handshake"
    },
    {
      name: "Askar Pattayil",
      role: "Full Stack Developer",
      bio: "Expert in both frontend and backend technologies, building scalable solutions.",
      icon: "fas fa-server"
    },
    {
      name: "Favas",
      role: "Backend Developer",
      bio: "Backend specialist ensuring robust, secure, and high-performance systems.",
      icon: "fas fa-database"
    },
    {
      name: "Sayana Fathima",
      role: "Frontend Developer",
      bio: "Creating beautiful, responsive user interfaces with modern web technologies.",
      icon: "fas fa-laptop-code"
    },
    {
      name: "Ayesha Fethin",
      role: "Frontend Developer",
      bio: "Crafting engaging user experiences with attention to detail and design.",
      icon: "fas fa-laptop-code"
    },
    {
      name: "Sarath Sasindran",
      role: "Creative Director",
      bio: "Leading creative vision and ensuring brand consistency across all projects.",
      icon: "fas fa-palette"
    },
    {
      name: "Muhammed Ameesh Radhi",
      role: "Graphic Designer",
      bio: "Creating stunning visual designs that communicate brand messages effectively.",
      icon: "fas fa-paint-brush"
    },
    {
      name: "Sinu Afsal",
      role: "Marketing Head",
      bio: "Driving marketing strategies that build brand awareness and generate leads.",
      icon: "fas fa-bullhorn"
    },
    {
      name: "Husna Niyas",
      role: "Social Media Head",
      bio: "Managing social media presence and engaging with our online community.",
      icon: "fas fa-share-alt"
    },
    {
      name: "Muhammed Rabeeh",
      role: "Content Creator",
      bio: "Crafting compelling content that tells our story and engages audiences.",
      icon: "fas fa-pen-fancy"
    },
    {
      name: "Fadhil Basheer",
      role: "Business Strategy Head",
      bio: "Developing strategic initiatives that drive business growth and success.",
      icon: "fas fa-chess"
    },
    {
      name: "Munas Moosa",
      role: "Project Head",
      bio: "Leading project execution and ensuring seamless delivery across all teams.",
      icon: "fas fa-project-diagram"
    },
    {
      name: "Mohammed Niyaz",
      role: "Technical Engineer",
      bio: "Technical expert ensuring robust engineering solutions and system optimization.",
      icon: "fas fa-cogs"
    },
    {
      name: "Naveed KM",
      role: "Cyber Security Director",
      bio: "Leading cybersecurity initiatives and protecting our systems from digital threats with strategic oversight.",
      icon: "fas fa-shield-alt"
    }
  ];

  return (
    <TeamPage>
      <TeamHero>
        <Container>
          <Badge>
            <i className="fas fa-users"></i>
            Our Team
          </Badge>
          <HeroTitle>
            Meet the <span className="highlight">Minds</span> Behind GoWide
          </HeroTitle>
          <HeroSubtitle>
            Our diverse team of passionate professionals brings together creativity, technical expertise, and <span className="highlight">innovative thinking</span>
          </HeroSubtitle>

          <StatsGrid>
            <StatItem>
              <span className="stat-number">15+</span>
              <span className="stat-label">Team Members</span>
            </StatItem>
            <StatItem>
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </StatItem>
            <StatItem>
              <span className="stat-number">100+</span>
              <span className="stat-label">Projects Delivered</span>
            </StatItem>
          </StatsGrid>
        </Container>
      </TeamHero>

      <TeamSection>
        <Container>
          <TeamGrid>
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TeamCard className={member.isLeadership ? 'leadership' : ''}>
                  <div className="team-avatar">
                    <i className={member.icon}></i>
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