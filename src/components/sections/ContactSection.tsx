import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Handshake, 
  Music, 
  Camera, 
  Coffee, 
  Megaphone,
  Users,
  Building
} from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const ContactSection: React.FC = () => {
  const collaborationTypes = [
    {
      icon: Music,
      title: 'Music Labels',
      description: 'Partner with us to showcase your artists and reach thousands of music lovers',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Building,
      title: 'Lifestyle Brands',
      description: 'Showcase your brand to our diverse, energetic audience through strategic partnerships',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Camera,
      title: 'Content Creators',
      description: 'Join us as official content partners and create amazing festival content',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
    },
    {
      icon: Coffee,
      title: 'Food Partners',
      description: 'Bring your culinary expertise to our festival and delight thousands of food enthusiasts',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Megaphone,
      title: 'Media Partners',
      description: 'Help us spread the word and be part of India\'s most exciting tomato festival',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Users,
      title: 'Community Partners',
      description: 'Connect your community with our festival and create memorable experiences together',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'info@latomatinafestindia.com',
      href: 'mailto:info@latomatinafestindia.com',
      description: 'For partnerships, sponsorships, and general inquiries',
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+91 98765 43210',
      href: 'tel:+919876543210',
      description: 'Available Monday to Friday, 10 AM - 6 PM',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Pune, Maharashtra',
      href: '#',
      description: 'Event venue details will be announced soon',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-tomato-100 rounded-full mb-6">
            <Handshake className="w-10 h-10 text-tomato-600" />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="gradient-text">Collaborate</span> With Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tomato-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join hands with us to create India's most spectacular tomato festival experience
          </p>
        </motion.div>

        {/* Collaboration Intro */}
        <motion.div
          className="bg-gradient-to-r from-tomato-500 to-orange-500 rounded-2xl p-8 md:p-12 text-white text-center mb-16 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 text-6xl">🤝</div>
            <div className="absolute top-8 right-8 text-4xl">🎯</div>
            <div className="absolute bottom-4 left-8 text-5xl">💼</div>
            <div className="absolute bottom-8 right-4 text-3xl">✨</div>
          </div>

          <div className="relative z-10">
            <h3 className="font-display font-bold text-3xl md:text-4xl mb-4">
              We're Joining Hands with Amazing Partners!
            </h3>
            <p className="text-xl mb-6 opacity-90 max-w-3xl mx-auto">
              We're partnering with music labels, lifestyle brands, content creators, food partners, 
              and more to create an unforgettable festival experience.
            </p>
            <p className="text-lg opacity-80">
              Want to collaborate or sponsor? Let's create something amazing together!
            </p>
          </div>
        </motion.div>

        {/* Collaboration Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {collaborationTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full group cursor-pointer">
                <motion.div
                  className={`w-16 h-16 ${type.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <type.icon className={`w-8 h-8 ${type.color}`} />
                </motion.div>
                <h4 className="font-display font-semibold text-xl mb-3 text-gray-800">
                  {type.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {type.description}
                </p>
                <motion.div
                  className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <span className={`text-sm font-medium ${type.color}`}>
                    Learn more →
                  </span>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-display font-bold text-3xl mb-8 text-gray-800">
              Get in Touch
            </h3>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-tomato-100 rounded-lg flex items-center justify-center group-hover:bg-tomato-200 transition-colors duration-200">
                    <contact.icon className="w-6 h-6 text-tomato-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 mb-1">
                      {contact.title}
                    </h4>
                    <p className="text-tomato-600 font-medium mb-1">
                      {contact.value}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {contact.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8 bg-gradient-to-br from-tomato-50 to-orange-50 border-tomato-100">
              <h4 className="font-display font-bold text-2xl mb-4 text-gray-800">
                Ready to Partner with Us?
              </h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether you're a brand looking to reach our audience, a content creator wanting to 
                capture the excitement, or a food partner ready to serve thousands of festival-goers, 
                we'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.location.href = 'mailto:info@latomatinafestindia.com'}
                >
                  Send Partnership Inquiry
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full"
                >
                  Download Partnership Deck
                </Button>
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg border border-tomato-200">
                <p className="text-sm text-gray-600 text-center">
                  <strong className="text-tomato-600">Quick Response Guaranteed:</strong> We'll get back to you within 24 hours!
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
