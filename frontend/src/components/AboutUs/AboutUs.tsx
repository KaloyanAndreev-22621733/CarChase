import React from 'react';
import Header from '../../Header';

const AboutUs: React.FC = () => {
  <Header />
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-5 mt-10">About</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="text-4xl">🚀</div>
            <h2 className="text-2xl font-semibold">Our Team</h2>
          </div>
          <p className="mb-4">Meet the people behind the platform. Our team includes:</p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span>👨‍💻</span> Automotive experts
            </li>
            <li className="flex items-center gap-2">
              <span>🎨</span> UI/UX designers
            </li>
            <li className="flex items-center gap-2">
              <span>👨‍💻</span> Developers
            </li>
            <li className="flex items-center gap-2">
              <span>😊</span> Customer support specialists
            </li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Together, we work with one shared goal: to create the best car search experience possible.
          </p>
        </div>

        {/* Our Values Section */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="text-4xl">💡</div>
            <h2 className="text-2xl font-semibold">Our Values</h2>
          </div>
          <ul className="space-y-4">
            <li>
              <p className="font-medium">Transparency</p>
              <p className="text-sm text-gray-600">Clear, honest, and up-to-date information</p>
            </li>
            <li>
              <p className="font-medium">Security</p>
              <p className="text-sm text-gray-600">A safe space for transactions</p>
            </li>
            <li>
              <p className="font-medium">Simplicity</p>
              <p className="text-sm text-gray-600">Intuitive design and navigation</p>
            </li>
            <li>
              <p className="font-medium">Support</p>
              <p className="text-sm text-gray-600">Real people behind the screen, ready to help</p>
            </li>
          </ul>
        </div>

        {/* Why Choose Us Section */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="text-4xl">🎯</div>
            <h2 className="text-2xl font-semibold">Why Choose Us</h2>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Modern, user-friendly platform
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Advanced filtering options by price, brand, model, fuel type, and more
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Vehicle history transparency
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Support team ready to assist
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Focus on safety and trustworthiness
            </li>
          </ul>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <p className="text-gray-700 leading-relaxed">
            We are an innovative platform designed to connect car buyers and sellers in a fast, secure, and 
            transparent way. Our team is made up of passionate professionals with experience in the 
            automotive industry, UI/UX design, and software development. Our mission is to simplify and 
            improve the car-buying experience for everyone.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {/* Image placeholders - you'll need to add actual images */}
            <div className="bg-gray-200 rounded-lg aspect-square"></div>
            <div className="bg-gray-200 rounded-lg aspect-square"></div>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <div className="bg-gray-50 p-8 rounded-xl">
          <p className="text-gray-700 leading-relaxed">
            Our goal is to provide an easy-to-use and accessible car search system that helps users find 
            the perfect vehicle based on their preferences—whether it's price, brand, mileage, or fuel type. 
            We believe every car purchase should be well-informed and stress-free.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 