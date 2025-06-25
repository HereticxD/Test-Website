import React from 'react';
import styled from 'styled-components';
import { FaHome, FaBuilding, FaWarehouse, FaTruck, FaBoxes, FaGlobe } from 'react-icons/fa';

const ServicesSection = styled.section`
  padding: 100px 0;
  background: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

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
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: white;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-align: center;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  font-size: 2rem;
  color: white;
  transition: all 0.3s ease;

  ${ServiceCard}:hover & {
    transform: scale(1.1);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e3c72;
  margin-bottom: 15px;
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  text-align: left;
  margin: 0;
  padding: 0;
`;

const ServiceFeature = styled.li`
  color: #666;
  margin-bottom: 8px;
  position: relative;
  padding-left: 20px;

  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #1e3c72;
    font-weight: bold;
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 12px 25px;
  border-radius: 25px;
  font-weight: 600;
  margin-top: 20px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(30, 60, 114, 0.3);
  }
`;

const Services: React.FC = () => {
  const services = [
    {
      icon: <FaHome />,
      title: 'Evden Eve Nakliyat',
      description: 'Evinizi güvenle taşıyoruz. Paketleme, taşıma ve kurulum hizmetleri.',
      features: [
        'Profesyonel paketleme',
        'Sigortalı taşıma',
        'Kurulum hizmeti',
        'Temizlik hizmeti'
      ]
    },
    {
      icon: <FaBuilding />,
      title: 'Ofis Taşıma',
      description: 'İşyerinizi minimum kesinti ile yeni adresine taşıyoruz.',
      features: [
        'Hızlı taşıma',
        'Ekipman koruması',
        'Dosya organizasyonu',
        'Teknik destek'
      ]
    },
    {
      icon: <FaWarehouse />,
      title: 'Depolama Hizmetleri',
      description: 'Güvenli ve iklim kontrollü depolama çözümleri.',
      features: [
        '24/7 güvenlik',
        'İklim kontrolü',
        'Sigortalı depolama',
        'Kolay erişim'
      ]
    },
    {
      icon: <FaTruck />,
      title: 'Şehirler Arası Nakliyat',
      description: 'Türkiye\'nin her yerine güvenli ve hızlı taşımacılık.',
      features: [
        'GPS takip sistemi',
        'Zamanında teslimat',
        'Tam sigorta',
        '7/24 destek'
      ]
    },
    {
      icon: <FaBoxes />,
      title: 'Özel Eşya Taşıma',
      description: 'Antika, sanat eseri ve hassas eşyalarınızı özel koruma ile taşıyoruz.',
      features: [
        'Özel ambalajlama',
        'Hassas taşıma',
        'Sigorta kapsamı',
        'Uzman ekip'
      ]
    },
    {
      icon: <FaGlobe />,
      title: 'Uluslararası Nakliyat',
      description: 'Dünya genelinde güvenilir uluslararası taşımacılık hizmetleri.',
      features: [
        'Gümrük işlemleri',
        'Hızlı teslimat',
        'Tam sigorta',
        'Çok dilli destek'
      ]
    }
  ];

  return (
    <ServicesSection id="services">
      <Container>
        <SectionHeader>
          <SectionTitle>Hizmetlerimiz</SectionTitle>
          <SectionSubtitle>
            20 yıllık deneyimimizle sunduğumuz kapsamlı nakliyat hizmetleri. 
            Her ihtiyacınız için özel çözümler üretiyoruz.
          </SectionSubtitle>
        </SectionHeader>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon>
                {service.icon}
              </ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceFeatures>
                {service.features.map((feature, featureIndex) => (
                  <ServiceFeature key={featureIndex}>{feature}</ServiceFeature>
                ))}
              </ServiceFeatures>
              <CTAButton>Detayları Gör</CTAButton>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services; 