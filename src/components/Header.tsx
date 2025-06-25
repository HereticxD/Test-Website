import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const TopBar = styled.div`
  background: rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  font-size: 14px;
`;

const TopBarContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const MainHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #fff;
`;

const Nav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    background: #1e3c72;
    flex-direction: column;
    padding: 20px;
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease;
  }
`;

const NavLink = styled.a`
  color: white;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #ffd700;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  color: white;
  font-size: 24px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const CTAButton = styled.button`
  background: #ffd700;
  color: #1e3c72;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: #ffed4e;
    transform: translateY(-2px);
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <TopBar>
        <TopBarContent>
          <ContactInfo>
            <ContactItem>
              <FaPhone />
              <span>+90 555 123 45 67</span>
            </ContactItem>
            <ContactItem>
              <FaEnvelope />
              <span>info@güvenilirnakliyat.com</span>
            </ContactItem>
          </ContactInfo>
        </TopBarContent>
      </TopBar>
      
      <MainHeader>
        <Logo>Güvenilir Nakliyat</Logo>
        
        <Nav isOpen={isMenuOpen}>
          <NavLink onClick={() => scrollToSection('home')}>Ana Sayfa</NavLink>
          <NavLink onClick={() => scrollToSection('services')}>Hizmetler</NavLink>
          <NavLink onClick={() => scrollToSection('about')}>Hakkımızda</NavLink>
          <NavLink onClick={() => scrollToSection('contact')}>İletişim</NavLink>
          <CTAButton>Teklif Al</CTAButton>
        </Nav>

        <MobileMenuButton onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </MainHeader>
    </HeaderContainer>
  );
};

export default Header; 