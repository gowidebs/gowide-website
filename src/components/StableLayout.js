import styled from 'styled-components';

// Prevent layout shifts with fixed dimensions
export const StableContainer = styled.div`
  min-height: ${props => props.minHeight || 'auto'};
  width: 100%;
  
  &.loading {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }
  
  @keyframes shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`;

export const StableGrid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns || 'repeat(auto-fit, minmax(300px, 1fr))'};
  gap: ${props => props.gap || '2rem'};
  min-height: ${props => props.minHeight || '400px'};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const StableCard = styled.div`
  min-height: 300px;
  background: transparent;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;