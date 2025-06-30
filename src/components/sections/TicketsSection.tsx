import React from 'react';
import { motion } from 'framer-motion';
import { 
  Ticket, 
  Users, 
  Waves, 
  Zap, 
  Crown, 
  Clock, 
  CheckCircle,
  Star
} from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const TicketsSection: React.FC = () => {
  const ticketTypes = [
    {
      name: 'General Entry',
      icon: Users,
      price: 'Coming Soon',
      features: [
        'Festival Entry',
        'Access to Food Stalls',
        'Live Music & Entertainment',
        'Basic Selfie Zones',
        'General Seating Area'
      ],
      color: 'from-gray-500 to-gray-600',
      bgColor: 'bg-gray-50',
      popular: false,
    },
    {
      name: 'Foam Zone Access',
      icon: Waves,
      price: 'Coming Soon',
      features: [
        'Everything in General Entry',
        'Foam Zone Access',
        'Water Slides',
        'Splash Activities',
        'Foam Party Participation'
      ],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      popular: false,
    },
    {
      name: 'Tomato War Zone Pass',
      icon: Zap,
      price: 'Coming Soon',
      features: [
        'Everything in Foam Zone',
        'Tomato War Zone Access',
        'Premium Battle Gear',
        'Priority Entry to Battles',
        'War Zone Exclusive Areas'
      ],
      color: 'from-tomato-500 to-red-500',
      bgColor: 'bg-red-50',
      popular: true,
    },
    {
      name: 'VIP Lounge & Perks',
      icon: Crown,
      price: 'Coming Soon',
      features: [
        'Everything in War Zone Pass',
        'VIP Lounge Access',
        'Premium Bar & Food',
        'Exclusive Viewing Areas',
        'VIP Parking',
        'Complimentary Merchandise'
      ],
      color: 'from-yellow-500 to-amber-500',
      bgColor: 'bg-yellow-50',
      popular: false,
    },
  ];

  return (
    <section id="tickets" className="section-padding bg-white">
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
            <Ticket className="w-10 h-10 text-tomato-600" />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="gradient-text">Tickets</span> Coming Soon!
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tomato-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose your adventure level and get ready for the ultimate tomato festival experience
          </p>
        </motion.div>

        {/* Early Bird Announcement */}
        <motion.div
          className="bg-gradient-to-r from-tomato-500 to-orange-500 rounded-2xl p-8 text-white text-center mb-16 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 text-6xl">🎫</div>
            <div className="absolute top-8 right-8 text-4xl">⏰</div>
            <div className="absolute bottom-4 left-8 text-5xl">🎉</div>
            <div className="absolute bottom-8 right-4 text-3xl">💫</div>
          </div>

          <div className="relative z-10">
            <motion.div
              className="flex items-center justify-center mb-4"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Clock className="w-8 h-8 mr-3" />
              <h3 className="font-display font-bold text-2xl md:text-3xl">
                Early Bird Access Drops Soon!
              </h3>
            </motion.div>
            <p className="text-xl mb-6 opacity-90">
              Be the first to know when tickets go live and get exclusive early bird pricing
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-tomato-500"
            >
              Notify Me When Available
            </Button>
          </div>
        </motion.div>

        {/* Ticket Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ticketTypes.map((ticket, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {ticket.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-tomato-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <Card className={`p-6 h-full ${ticket.popular ? 'ring-2 ring-tomato-500 ring-opacity-50' : ''}`}>
                {/* Header */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${ticket.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <ticket.icon className={`w-8 h-8 bg-gradient-to-r ${ticket.color} bg-clip-text text-transparent`} />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2 text-gray-800">
                    {ticket.name}
                  </h3>
                  <div className="text-2xl font-bold text-gray-600">
                    {ticket.price}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {ticket.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full" 
                  variant={ticket.popular ? 'primary' : 'outline'}
                  disabled
                >
                  Coming Soon
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stay Tuned Section */}
        <motion.div
          className="text-center bg-gray-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h4 className="font-display font-bold text-2xl md:text-3xl mb-4 text-gray-800">
            Stay Tuned for Ticket Launch!
          </h4>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            We're putting the finishing touches on our ticketing system. 
            Follow us on social media or subscribe to our newsletter to be the first to know when tickets go live.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg">
              Subscribe for Updates
            </Button>
            <Button variant="outline" size="lg">
              Follow on Social Media
            </Button>
          </div>

          <motion.div
            className="mt-8 flex justify-center items-center space-x-4 text-3xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span>🎫</span>
            <span className="text-tomato-500">💫</span>
            <span>🍅</span>
            <span className="text-orange-500">🎉</span>
            <span>🎵</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TicketsSection;
