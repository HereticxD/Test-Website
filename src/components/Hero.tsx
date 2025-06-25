import React from 'react';
import styled from 'styled-components';
import { FaTruck, FaShieldAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const HeroSection = styled.section`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 120px;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroText = styled.div`
  color: white;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.9;
  line-height: 1.6;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled.button`
  background: #ffd700;
  color: #1e3c72;
  padding: 15px 30px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: #ffed4e;
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(255, 215, 0, 0.3);
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: white;
  padding: 15px 30px;
  border: 2px solid white;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    color: #1e3c72;
    transform: translateY(-3px);
  }
`;

const HeroImage = styled.div`
  position: relative;
  height: 500px;
  background: url('https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80') center/cover;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const FeatureIcon = styled.div`
  font-size: 2rem;
  color: #ffd700;
`;

const FeatureText = styled.div`
  color: white;
`;

const FeatureTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 5px;
`;

const FeatureDescription = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
`;

const Hero: React.FC = () => {
  return (
    <HeroSection id="home">
      <HeroOverlay />
      <HeroContent>
        <HeroText>
          <HeroTitle>Güvenilir Nakliyat Hizmetleri</HeroTitle>
          <HeroSubtitle>
            Eşyalarınızı güvenle taşıyoruz. 20 yıllık deneyimimizle Türkiye'nin her yerine 
            profesyonel nakliyat hizmeti sunuyoruz.
          </HeroSubtitle>
          
          <HeroButtons>
            <PrimaryButton>Ücretsiz Teklif Al</PrimaryButton>
            <SecondaryButton>Hizmetlerimiz</SecondaryButton>
          </HeroButtons>

          <FeaturesGrid>
            <FeatureCard>
              <FeatureIcon>
                <FaTruck />
              </FeatureIcon>
              <FeatureText>
                <FeatureTitle>Hızlı Teslimat</FeatureTitle>
                <FeatureDescription>Zamanında ve güvenli teslimat</FeatureDescription>
              </FeatureText>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>
                <FaShieldAlt />
              </FeatureIcon>
              <FeatureText>
                <FeatureTitle>Sigortalı Taşıma</FeatureTitle>
                <FeatureDescription>Tam sigorta güvencesi</FeatureDescription>
              </FeatureText>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>
                <FaClock />
              </FeatureIcon>
              <FeatureText>
                <FeatureTitle>7/24 Hizmet</FeatureTitle>
                <FeatureDescription>Her zaman yanınızdayız</FeatureDescription>
              </FeatureText>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>
                <FaMapMarkerAlt />
              </FeatureIcon>
              <FeatureText>
                <FeatureTitle>Türkiye Geneli</FeatureTitle>
                <FeatureDescription>Tüm şehirlere hizmet</FeatureDescription>
              </FeatureText>
            </FeatureCard>
          </FeaturesGrid>
        </HeroText>

        <HeroImage />
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 