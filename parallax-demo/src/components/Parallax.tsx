// src/components/Parallax.tsx
import React, { useEffect, useState } from 'react';
import styles from './Parallax.module.css';
import background from '../images/background.jpeg';
import foreground from '../images/buildings.jpeg';

const Parallax: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.layer}
        style={{
          backgroundImage: `url(${background})`,
          transform: `translateY(${offsetY * 0.5}px)`,
        }}
      />
      <div
        className={styles.layer}
        style={{
          backgroundImage: `url(${foreground})`,
          transform: `translateY(${offsetY * 0.8}px)`,
        }}
      />
    </div>
  );
};

export default Parallax;
