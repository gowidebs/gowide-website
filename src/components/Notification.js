import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const NotificationContainer = styled(motion.div)`
  position: fixed;
  top: 2rem;
  right: 2rem;
  background: ${props => props.type === 'success' ? '#10b981' : '#ef4444'};
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  max-width: 400px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

let showNotificationGlobal = null;

const Notification = () => {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    showNotificationGlobal = (message, type = 'success') => {
      setNotification({ message, type });
      const timeoutId = setTimeout(() => setNotification(null), 4000);
      return () => clearTimeout(timeoutId);
    };
  }, []);

  return (
    <AnimatePresence>
      {notification && (
        <NotificationContainer
          type={notification.type}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
        >
          <i className={`fas ${notification.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
          {notification.message}
        </NotificationContainer>
      )}
    </AnimatePresence>
  );
};

export const showNotification = (message, type = 'success') => {
  if (showNotificationGlobal) {
    showNotificationGlobal(message, type);
  }
};

export default Notification;