import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #1a1a1a;
  color: white;
  padding: 60px 0 20px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const FooterSection = styled.div``;

const FooterTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #ffd700;
`;

const FooterText = styled.p`
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const FooterLink = styled.a`
  color: #ccc;
  text-decoration: none;
  display: block;
  margin-bottom: 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #ffd700;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  color: #ccc;
`;

const ContactIcon = styled.div`
  color: #ffd700;
  min-width: 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background: #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;

  &:hover {
    background: #ffd700;
    color: #1a1a1a;
    transform: translateY(-3px);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #333;
  padding-top: 20px;
  text-align: center;
  color: #999;
  font-size: 0.9rem;
`;

const FooterBottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.div``;

const FooterLinks = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterSection>
            <FooterTitle>Güvenilir Nakliyat</FooterTitle>
            <FooterText>
              20 yıllık deneyimimizle Türkiye'nin önde gelen nakliyat şirketlerinden biriyiz. 
              Müşteri memnuniyeti odaklı hizmet anlayışımızla eşyalarınızı güvenle taşıyoruz.
            </FooterText>
            <SocialLinks>
              <SocialLink href="#" target="_blank">
                <FaFacebook />
              </SocialLink>
              <SocialLink href="#" target="_blank">
                <FaTwitter />
              </SocialLink>
              <SocialLink href="#" target="_blank">
                <FaInstagram />
              </SocialLink>
              <SocialLink href="#" target="_blank">
                <FaLinkedin />
              </SocialLink>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Hizmetlerimiz</FooterTitle>
            <FooterLink href="#services">Evden Eve Nakliyat</FooterLink>
            <FooterLink href="#services">Ofis Taşıma</FooterLink>
            <FooterLink href="#services">Şehirler Arası Nakliyat</FooterLink>
            <FooterLink href="#services">Depolama Hizmetleri</FooterLink>
            <FooterLink href="#services">Özel Eşya Taşıma</FooterLink>
            <FooterLink href="#services">Uluslararası Nakliyat</FooterLink>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Hızlı Linkler</FooterTitle>
            <FooterLink href="#home">Ana Sayfa</FooterLink>
            <FooterLink href="#about">Hakkımızda</FooterLink>
            <FooterLink href="#services">Hizmetler</FooterLink>
            <FooterLink href="#contact">İletişim</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">SSS</FooterLink>
          </FooterSection>

          <FooterSection>
            <FooterTitle>İletişim Bilgileri</FooterTitle>
            <ContactInfo>
              <ContactIcon>
                <FaPhone />
              </ContactIcon>
              <span>+90 555 123 45 67</span>
            </ContactInfo>
            <ContactInfo>
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <span>info@güvenilirnakliyat.com</span>
            </ContactInfo>
            <ContactInfo>
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              <span>Merkez Mahallesi, Nakliyat Caddesi No:123, İstanbul</span>
            </ContactInfo>
            <FooterText style={{ marginTop: '20px' }}>
              <strong>Çalışma Saatleri:</strong><br />
              Pazartesi - Cumartesi: 08:00 - 18:00<br />
              Pazar: 09:00 - 16:00
            </FooterText>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <FooterBottomContent>
            <Copyright>
              © {currentYear} Güvenilir Nakliyat. Tüm hakları saklıdır.
            </Copyright>
            <FooterLinks>
              <FooterLink href="#">Gizlilik Politikası</FooterLink>
              <FooterLink href="#">Kullanım Şartları</FooterLink>
              <FooterLink href="#">KVKK</FooterLink>
            </FooterLinks>
          </FooterBottomContent>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 