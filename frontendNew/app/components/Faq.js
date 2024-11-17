import React, { useState } from 'react';
import styled from 'styled-components';

const FAQContainer = styled.div`
    min-height: 100vh;
    padding: 5rem 3rem 0rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContentWrapper = styled.div`
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
`;

const Title = styled.h2`
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #2d3748;
    font-weight: 700;
    background: linear-gradient(120deg, #4a90e2, #8e44ad);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    
    &:after {
        content: '';
        display: block;
        width: 60px;
        height: 4px;
        background: linear-gradient(90deg, #4a90e2, #8e44ad);
        margin: 1rem auto;
        border-radius: 2px;
    }
`;

const Subtitle = styled.p`
    text-align: center;
    color: #718096;
    font-size: 1.1rem;
`;

const AccordionItem = styled.div`
    margin-bottom: 1.5rem;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    }
`;

const AccordionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    color: #2d3748;
    transition: all 0.3s ease;
    border-radius: 16px;
    
    &:hover {
        background: rgba(74, 144, 226, 0.05);
    }
`;

const QuestionWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const QuestionNumber = styled.span`
    background: linear-gradient(135deg, #4a90e2, #8e44ad);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
    font-size: 1rem;
`;

const AccordionArrow = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
    transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
    color: #4a90e2;
`;

const AccordionContent = styled.div`
    max-height: ${(props) => (props.isOpen ? '300px' : '0')};
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    padding: ${(props) => (props.isOpen ? '0 2rem 1.5rem 2rem' : '0 2rem')};
    color: #718096;
    font-size: 1rem;
    line-height: 1.8;
    opacity: ${(props) => (props.isOpen ? '1' : '0')};
`;

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: 'How do I apply for internships?',
            answer: 'Click the "Explore Internships" button on the homepage. Browse the available listings and submit your application directly through our streamlined application process. Make sure to complete all required fields and upload necessary documents.',
        },
        {
            question: 'Are internships paid?',
            answer: 'Some internships offer competitive stipends, while others may be unpaid but provide valuable experience. Details about compensation packages are clearly provided in each listing, including any additional benefits or perks.',
        },
        {
            question: 'Can I apply for multiple internships?',
            answer: 'Yes, you can apply for multiple internships simultaneously. We encourage exploring various opportunities, but make sure to tailor each application to the specific role and company you\'re applying to.',
        },
        {
            question: 'How will I know if I am selected?',
            answer: 'You will receive notifications via email and through your dashboard. Our system provides real-time updates on your application status, including interview schedules and final decisions.',
        },
        {
            question: 'What documents are required to apply?',
            answer: 'Required documents typically include your updated resume, a customized cover letter, and academic transcripts. Some positions may require additional materials like portfolios or writing samples.',
        },
    ];

    return (
        <FAQContainer>
            <ContentWrapper>
                <Title>Frequently Asked Questions</Title>
                <Subtitle>Find answers to common questions about our internship program</Subtitle>
                <div>
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index}>
                            <AccordionHeader onClick={() => toggleAccordion(index)}>
                                <QuestionWrapper>
                                    <QuestionNumber>Q{index + 1}.</QuestionNumber>
                                    {faq.question}
                                </QuestionWrapper>
                                <AccordionArrow isOpen={openIndex === index}>
                                    ▼
                                </AccordionArrow>
                            </AccordionHeader>
                            <AccordionContent isOpen={openIndex === index}>
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </div>
            </ContentWrapper>
        </FAQContainer>
    );
};

export default Faq;
