import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'info@latomatinafestindia.com', href: 'mailto:info@latomatinafestindia.com' },
    { icon: Phone, text: '+91 98765 43210', href: 'tel:+919876543210' },
    { icon: MapPin, text: 'Pune, Maharashtra', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-tomato-500 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">🍅</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">La Tomatina</h3>
                <p className="text-sm text-gray-400">Fest India 2025</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Experience the wildest, juiciest celebration of the year with a desi twist!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-tomato-500 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  <contact.icon className="w-5 h-5" />
                  <span>{contact.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Event Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-display font-semibold text-lg mb-4">Event Details</h4>
            <div className="space-y-2 text-gray-400">
              <p><strong className="text-white">Date:</strong> Saturday, 23rd August 2025</p>
              <p><strong className="text-white">Time:</strong> 12:30 PM onwards</p>
              <p><strong className="text-white">Venue:</strong> TBA - Pune, Maharashtra</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p>&copy; 2025 La Tomatina Fest India. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Made with ❤️ for the ultimate tomato celebration experience
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
