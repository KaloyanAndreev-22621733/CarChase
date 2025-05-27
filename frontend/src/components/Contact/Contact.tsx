import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-2 mt-10">
        <div className="flex items-center text-sm text-gray-500">
          <a href="/" className="hover:text-gray-700">Home</a>
          <span className="mx-2">/</span>
          <span>Contact</span>
        </div>
      </div>

      {/* Title */}
      <h1 className="max-w-7xl mx-auto px-4 text-3xl font-bold mb-8">Contact</h1>

      {/* Map Section */}
      <div className="w-full h-[300px] mb-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19868.687203276665!2d-0.1477033!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce37bbdb95%3A0xb1723ca76def2b!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1645909987654!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Contact Form */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm text-gray-600 mb-1">First Name*</label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ali"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm text-gray-600 mb-1">Last Name*</label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tufan"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm text-gray-600 mb-1">Email*</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="example@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm text-gray-600 mb-1">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+90 123 456 789"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-gray-600 mb-1">Message</label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact details</h2>
          <div className="space-y-6">
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1">📍</div>
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-gray-600">123 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1">✉️</div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">info@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1">📞</div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-600">+35 968 123 456</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">Follow us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-pink-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18.5c-4.694 0-8.5-3.806-8.5-8.5S7.306 3.5 12 3.5s8.5 3.806 8.5 8.5-3.806 8.5-8.5 8.5zm0-13c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5zm0 7.5c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-800">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Offices */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold mb-8">Our Offices</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">San Francisco</h3>
            <p className="text-gray-600">495 Henry St, San Francisco,<br />CA 94016, USA</p>
            <div className="flex items-center gap-2">
              <a href="#" className="text-blue-600 hover:underline text-sm">See on Map</a>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <a href="mailto:info@example.com" className="text-gray-600">info@example.com</a>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span className="text-gray-600">+88 656 123 456</span>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">New York</h3>
            <p className="text-gray-600">232-240 Wilson Ave, Brooklyn,<br />NY 10023, USA</p>
            <div className="flex items-center gap-2">
              <a href="#" className="text-blue-600 hover:underline text-sm">See on Map</a>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <a href="mailto:info@example.com" className="text-gray-600">info@example.com</a>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span className="text-gray-600">+88 656 123 456</span>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">London</h3>
            <p className="text-gray-600">97-148 Borough High St,<br />London SE1 1JX, UK</p>
            <div className="flex items-center gap-2">
              <a href="#" className="text-blue-600 hover:underline text-sm">See on Map</a>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <a href="mailto:info@example.com" className="text-gray-600">info@example.com</a>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span className="text-gray-600">+88 222 333 888</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 