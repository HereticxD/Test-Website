import React from 'react';
import styled from 'styled-components';
import { FaUsers, FaAward, FaTruck, FaHeart } from 'react-icons/fa';

const AboutSection = styled.section`
  padding: 100px 0;
  background: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const AboutText = styled.div``;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e3c72;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const AboutDescription = styled.p`
  color: #666;
  line-height: 1.8;
  margin-bottom: 30px;
  font-size: 1rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  text-align: center;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 15px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const StatIcon = styled.div`
  font-size: 2.5rem;
  color: #1e3c72;
  margin-bottom: 15px;
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #1e3c72;
  margin-bottom: 5px;
`;

const StatLabel = styled.div`
  color: #666;
  font-weight: 500;
`;

const AboutImage = styled.div`
  position: relative;
  height: 500px;
  background: url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80') center/cover;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 300px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    border: 3px solid #1e3c72;
    border-radius: 15px;
    z-index: -1;
  }
`;

const ExperienceBadge = styled.div`
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 20px;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 10px 25px rgba(30, 60, 114, 0.3);

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    bottom: -15px;
    right: -15px;
    padding: 15px;
  }
`;

const ExperienceYears = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ExperienceText = styled.div`
  font-size: 0.8rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const About: React.FC = () => {
  const stats = [
    {
      icon: <FaUsers />,
      number: '5000+',
      label: 'Mutlu Müşteri'
    },
    {
      icon: <FaTruck />,
      number: '15000+',
      label: 'Başarılı Taşıma'
    },
    {
      icon: <FaAward />,
      number: '20+',
      label: 'Yıllık Deneyim'
    },
    {
      icon: <FaHeart />,
      number: '100%',
      label: 'Müşteri Memnuniyeti'
    }
  ];

  return (
    <AboutSection id="about">
      <Container>
        <AboutContent>
          <AboutText>
            <SectionTitle>Hakkımızda</SectionTitle>
            <SectionSubtitle>
              20 yılı aşkın deneyimimizle Türkiye'nin önde gelen nakliyat şirketlerinden biriyiz.
            </SectionSubtitle>
            
            <AboutDescription>
              2003 yılında kurulan şirketimiz, müşteri memnuniyetini ön planda tutarak 
              profesyonel nakliyat hizmetleri sunmaktadır. Modern filomuz ve uzman ekibimizle 
              eşyalarınızı güvenle taşıyoruz.
            </AboutDescription>

            <AboutDescription>
              Kaliteli hizmet anlayışımız, şeffaf fiyatlandırma politikamız ve 
              müşteri odaklı yaklaşımımızla sektörde güvenilir bir marka haline geldik. 
              Her projede mükemmellik hedefiyle çalışıyoruz.
            </AboutDescription>

            <StatsGrid>
              {stats.map((stat, index) => (
                <StatCard key={index}>
                  <StatIcon>{stat.icon}</StatIcon>
                  <StatNumber>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              ))}
            </StatsGrid>
          </AboutText>

          <AboutImage>
            <ExperienceBadge>
              <ExperienceYears>20+</ExperienceYears>
              <ExperienceText>Yıl</ExperienceText>
            </ExperienceBadge>
          </AboutImage>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About; 