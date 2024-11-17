import React, { useState } from 'react';
import styled from 'styled-components';
import { Send, Phone, Mail, User } from 'lucide-react';

// Styled Components
const PageContainer = styled.div`
  ${'' /* min-height: 25vh; */}
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 1rem 4rem 1rem;
`;

const FormContainer = styled.div`
  max-width: 28rem;
  width: 100%;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

const DecorativeElement1 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 5rem;
  height: 5rem;
  background-color: #dbeafe;
  border-bottom-left-radius: 100%;
  opacity: 0.5;
`;

const DecorativeElement2 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 5rem;
  height: 5rem;
  background-color: #f3e8ff;
  border-top-right-radius: 100%;
  opacity: 0.5;
`;

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  text-align: center;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #4b5563;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const InputIcon = styled.div`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  color: #9ca3af;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  outline: none;
  transition: all 0.2s;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  outline: none;
  resize: none;
  transition: all 0.2s;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <PageContainer>
      <FormContainer>
        <DecorativeElement1 />
        <DecorativeElement2 />
        
        <Title>Contact Us</Title>
        <Subtitle>We'd love to hear from you!</Subtitle>

        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <InputIcon>
              <User size={20} />
            </InputIcon>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </InputWrapper>

          <InputWrapper>
            <InputIcon>
              <Phone size={20} />
            </InputIcon>
            <Input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </InputWrapper>

          <InputWrapper>
            <InputIcon>
              <Mail size={20} />
            </InputIcon>
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </InputWrapper>

          <TextArea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          />

          <SubmitButton type="submit">
            <span>Send Message</span>
            <Send size={20} />
          </SubmitButton>
        </Form>
      </FormContainer>
    </PageContainer>
  );
};

export default Contact;