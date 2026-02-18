import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText = 'Get Started',
  onCtaClick,
}) => {
  return (
    <section className="flex items-center justify-center px-4">
    </section>
  );
};

export default Hero;
