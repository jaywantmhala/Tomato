import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "What is La Tomatina Fest India?",
      answer: "La Tomatina Fest India is India's premier tomato festival inspired by Spain's famous La Tomatina celebration. It's a unique cultural event combining Spanish festival traditions with Indian hospitality, featuring eco-friendly tomato fights, live DJs, foam zones, and authentic entertainment in Pune.",
      category: "General"
    },
    {
      question: "When and where is La Tomatina Fest India 2025 happening?",
      answer: "La Tomatina Fest India 2025 is scheduled for Saturday, August 23rd, 2025, starting at 12:30 PM in Pune, Maharashtra. The exact venue will be announced soon. Follow our social media for the latest updates.",
      category: "Event Details"
    },
    {
      question: "How much do tickets cost for La Tomatina Fest India?",
      answer: "Ticket pricing will be announced soon! We're working on multiple ticket categories to suit different preferences and budgets. Early bird discounts and group packages will be available. Stay tuned for ticket launch announcements.",
      category: "Tickets"
    },
    {
      question: "Is La Tomatina Fest India eco-friendly?",
      answer: "Absolutely! We're committed to environmental sustainability. We use eco-friendly tomato alternatives, implement waste management systems, promote recycling, and ensure minimal environmental impact while maintaining the authentic festival experience.",
      category: "Environment"
    },
    {
      question: "What should I wear to La Tomatina Fest India?",
      answer: "Wear old clothes that you don't mind getting messy! We recommend white or light-colored clothing, closed-toe shoes with good grip, and bringing a change of clothes. Protective eyewear is also recommended. Avoid expensive jewelry or electronics.",
      category: "Preparation"
    },
    {
      question: "Are there age restrictions for La Tomatina Fest India?",
      answer: "The festival is designed for participants aged 18 and above. However, we may have family-friendly zones for younger attendees with parental supervision. Check our official guidelines for detailed age policies and safety requirements.",
      category: "Age Policy"
    },
    {
      question: "What activities are included in La Tomatina Fest India?",
      answer: "Experience tomato fights, massive foam zones, live DJ performances, themed bars, Instagram-worthy photo zones, traditional Indian music fusion, Spanish-inspired entertainment, food stalls, and much more in one epic celebration!",
      category: "Activities"
    },
    {
      question: "How do I get to the La Tomatina Fest India venue?",
      answer: "Detailed transportation information including public transport options, parking facilities, and shuttle services will be provided once the venue is announced. We'll ensure easy accessibility from all parts of Pune and surrounding areas.",
      category: "Transportation"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate FAQ structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  React.useEffect(() => {
    // Add FAQ structured data to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(faqStructuredData);
    script.id = 'faq-structured-data';
    
    // Remove existing FAQ structured data if any
    const existingScript = document.getElementById('faq-structured-data');
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);
    
    return () => {
      const scriptToRemove = document.getElementById('faq-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <section 
      id="faq" 
      className="section-padding bg-gradient-to-br from-gray-50 to-white"
      aria-labelledby="faq-heading"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-tomato-500 to-orange-500 rounded-full mb-6"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <HelpCircle className="w-8 h-8 text-white" />
          </motion.div>
          
          <h2 
            id="faq-heading"
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-tomato-500 to-orange-500 mx-auto mb-6"></div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about La Tomatina Fest India 2025 in Pune
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="max-w-4xl mx-auto space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-tomato-500 focus:ring-inset"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="font-semibold text-lg md:text-xl text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-tomato-500" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-tomato-500 to-orange-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
