import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
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
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ContactInfo = styled.div``;

const ContactInfoTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 30px;
`;

const ContactInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateX(10px);
  }
`;

const ContactIcon = styled.div`
  font-size: 1.5rem;
  color: #ffd700;
  min-width: 40px;
`;

const ContactText = styled.div``;

const ContactLabel = styled.div`
  font-weight: 600;
  margin-bottom: 5px;
`;

const ContactValue = styled.div`
  opacity: 0.9;
  font-size: 0.95rem;
`;

const ContactForm = styled.form`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const FormTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 30px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    outline: none;
    border-color: #ffd700;
    background: rgba(255, 255, 255, 0.15);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 15px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    outline: none;
    border-color: #ffd700;
    background: rgba(255, 255, 255, 0.15);
  }
`;

const SubmitButton = styled.button`
  background: #ffd700;
  color: #1e3c72;
  padding: 15px 30px;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 600;
  width: 100%;
  transition: all 0.3s ease;

  &:hover {
    background: #ffed4e;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(255, 215, 0, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const WhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #25d366;
  color: white;
  padding: 15px 30px;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 20px;
  transition: all 0.3s ease;

  &:hover {
    background: #128c7e;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(37, 211, 102, 0.3);
  }
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    console.log('Form data:', formData);
    alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      label: 'Telefon',
      value: '+90 555 123 45 67'
    },
    {
      icon: <FaEnvelope />,
      label: 'E-posta',
      value: 'info@güvenilirnakliyat.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Adres',
      value: 'Merkez Mahallesi, Nakliyat Caddesi No:123, İstanbul'
    },
    {
      icon: <FaClock />,
      label: 'Çalışma Saatleri',
      value: 'Pazartesi - Cumartesi: 08:00 - 18:00'
    }
  ];

  return (
    <ContactSection id="contact">
      <Container>
        <SectionHeader>
          <SectionTitle>İletişim</SectionTitle>
          <SectionSubtitle>
            Ücretsiz teklif almak veya sorularınız için bizimle iletişime geçin. 
            7/24 hizmetinizdeyiz.
          </SectionSubtitle>
        </SectionHeader>

        <ContactContent>
          <ContactInfo>
            <ContactInfoTitle>İletişim Bilgileri</ContactInfoTitle>
            <ContactInfoList>
              {contactInfo.map((info, index) => (
                <ContactInfoItem key={index}>
                  <ContactIcon>{info.icon}</ContactIcon>
                  <ContactText>
                    <ContactLabel>{info.label}</ContactLabel>
                    <ContactValue>{info.value}</ContactValue>
                  </ContactText>
                </ContactInfoItem>
              ))}
            </ContactInfoList>

            <WhatsAppButton href="https://wa.me/905551234567" target="_blank">
              <FaWhatsapp />
              WhatsApp'tan Mesaj Gönder
            </WhatsAppButton>
          </ContactInfo>

          <ContactForm onSubmit={handleSubmit}>
            <FormTitle>Ücretsiz Teklif Alın</FormTitle>
            
            <FormGroup>
              <FormLabel>Ad Soyad *</FormLabel>
              <FormInput
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Adınız ve soyadınız"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>E-posta *</FormLabel>
              <FormInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="E-posta adresiniz"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Telefon *</FormLabel>
              <FormInput
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Telefon numaranız"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Hizmet Türü</FormLabel>
              <FormInput
                type="text"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                placeholder="Evden eve, ofis taşıma vb."
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Mesajınız</FormLabel>
              <FormTextarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Detayları buraya yazabilirsiniz..."
              />
            </FormGroup>

            <SubmitButton type="submit">
              Teklif Al
            </SubmitButton>
          </ContactForm>
        </ContactContent>
      </Container>
    </ContactSection>
  );
};

export default Contact; 