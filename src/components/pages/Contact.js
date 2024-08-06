import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../theme'; // Import your theme

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [faq, setFaq] = useState([
    {
      question: 'How can I contact support?',
      answer: 'You can contact support via the form below or email us at support@example.com.'
    },
    {
      question: 'What are your business hours?',
      answer: 'We are available from 9 AM to 5 PM, Monday through Friday.'
    },
    {
      question: 'Where are you located?',
      answer: 'Our office is located at 123 Main Street, Anytown, USA.'
    },
    // Add more FAQ items as needed
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Your message has been sent!');
  };

  return (
    <MainContainer>
      <Title>Contact Us</Title>
      <ContactSection>
        <ContactDetails>
          <h2>Get in Touch</h2>
          <p>If you have any questions or need further information, feel free to contact us using the form below or reach us directly.</p>
          <ContactInfo>
            <p><strong>Email:</strong> support@example.com</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Address:</strong> 123 Main Street, Anytown, USA</p>
          </ContactInfo>
        </ContactDetails>
        <ContactForm onSubmit={handleSubmit}>
          <FormField>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormField>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </ContactSection>
      <FAQSection>
        <h2>Frequently Asked Questions</h2>
        {faq.map((item, index) => (
          <FAQItem key={index}>
            <Question>{item.question}</Question>
            <Answer>{item.answer}</Answer>
          </FAQItem>
        ))}
      </FAQSection>
    </MainContainer>
  );
};

// Styled Components
const MainContainer = styled.div`
  padding: 20px;
  background-color: ${theme.colors.background};
  min-height: 100vh;
`;

const Title = styled.h1`
  text-align: center;
  color: ${theme.colors.yelloColor};
  margin-bottom: 30px;
  font-size: 2.5em;
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

const ContactDetails = styled.div`
  text-align: center;
  margin-bottom: 30px;

  h2 {
    color: ${theme.colors.whiteColor};
    margin-bottom: 15px;
  }

  p {
    color: ${theme.colors.whiteColor};
    font-size: 1.1em;
  }
`;

const ContactInfo = styled.div`
  margin-top: 20px;
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 600px;
  background-color: ${theme.colors.whiteColor};
  border: 1px solid ${theme.colors.background};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormField = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
    color: ${theme.colors.primary};
    font-weight: bold;
  }

  input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid ${theme.colors.lightGrey};
    border-radius: 5px;
    font-size: 1em;
  }

  textarea {
    height: 150px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background-color: ${theme.colors.neonMahneta};
  color: ${theme.colors.whiteColor};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1em;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;

const FAQSection = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  margin-bottom: 20px;
`;

const Question = styled.h3`
  color: ${theme.colors.whiteColor};
  margin-bottom: 5px;
`;

const Answer = styled.p`
  color: ${theme.colors.whiteColor};
  font-size: 1.1em;
`;

export default Contact;
