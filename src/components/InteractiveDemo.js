import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const DemoContainer = styled.section`
  padding: 100px 0;
  background: var(--bg-secondary);
  text-align: center;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;

const DemoBox = styled.div`
  background: var(--bg-primary);
  border: 2px solid var(--primary-orange);
  border-radius: 20px;
  padding: 40px;
  margin: 40px 0;
  position: relative;
  overflow: hidden;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 30px 0;
`;

const DemoButton = styled(motion.button)`
  background: ${props => props.active ? 'var(--primary-orange)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--primary-orange)'};
  border: 2px solid var(--primary-orange);
  padding: 15px 25px;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
`;

const CodeDisplay = styled.div`
  background: #0a0a0a;
  border-radius: 15px;
  padding: 30px;
  margin: 30px 0;
  font-family: 'Courier New', monospace;
  text-align: left;
  position: relative;
  
  &::before {
    content: '● ● ●';
    position: absolute;
    top: 10px;
    left: 15px;
    color: #ff5f56;
    font-size: 1.2rem;
  }
  
  .line {
    margin: 8px 0;
    padding-left: 20px;
  }
  
  .comment { color: #6a9955; }
  .keyword { color: #569cd6; }
  .string { color: #ce9178; }
  .function { color: #dcdcaa; }
`;

const InteractiveDemo = () => {
  const [activeDemo, setActiveDemo] = useState('theme');

  const demos = {
    theme: {
      title: '🎨 Dynamic Theme System',
      code: `// Advanced Theme Context
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    document.body.className = theme + '-theme';
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};`
    },
    animation: {
      title: '⚡ Physics-Based Animations',
      code: `// Framer Motion Advanced Usage
const variants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 300,
      staggerChildren: 0.1
    }
  }
};

<motion.div variants={variants} whileInView="visible" />`
    },
    api: {
      title: '🚀 Real-Time API Integration',
      code: `// Sanity CMS + SendGrid Integration
export const submitContactForm = async (data) => {
  try {
    // Save to Sanity CMS
    const result = await writeClient.create({
      _type: 'contactEnquiry',
      ...data
    });
    
    // Send automated email
    await fetch('/api/send-email', {
      method: 'POST',
      body: JSON.stringify({ type: 'contact', data })
    });
    
    return result;
  } catch (error) {
    throw error;
  }
};`
    }
  };

  return (
    <DemoContainer>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: '3rem', color: 'var(--primary-orange)', marginBottom: '20px' }}>
            🛠️ Interactive Code Showcase
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
            See the actual code powering this website
          </p>
        </motion.div>

        <DemoBox>
          <ButtonGrid>
            {Object.entries(demos).map(([key, demo]) => (
              <DemoButton
                key={key}
                active={activeDemo === key}
                onClick={() => setActiveDemo(key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {demo.title}
              </DemoButton>
            ))}
          </ButtonGrid>

          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CodeDisplay>
              <div style={{ marginTop: '30px' }}>
                {demos[activeDemo].code.split('\n').map((line, index) => (
                  <div key={index} className="line">
                    <span 
                      dangerouslySetInnerHTML={{
                        __html: line
                          .replace(/\/\/.*/g, '<span class="comment">$&</span>')
                          .replace(/\b(const|let|var|function|return|if|else|try|catch|async|await|export|import)\b/g, '<span class="keyword">$&</span>')
                          .replace(/'[^']*'/g, '<span class="string">$&</span>')
                          .replace(/\b(\w+)(?=\()/g, '<span class="function">$&</span>')
                      }}
                    />
                  </div>
                ))}
              </div>
            </CodeDisplay>
          </motion.div>
        </DemoBox>
      </Container>
    </DemoContainer>
  );
};

export default InteractiveDemo;