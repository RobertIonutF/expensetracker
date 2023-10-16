import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white-900 text-dark py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Menu Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-dark-300 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-dark-300 hover:text-white">About</Link></li>
              <li><Link to="/contact" className="text-dark-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
                <li><Link to="/privacy" className="text-dark-300 hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-dark-300 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Blog Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Blog</h3>
            <ul className="space-y-2">
                <li><a href="#" className="text-dark-300 hover:text-white">Engineering Blog</a></li>
                <li><a href="#" className="text-dark-300 hover:text-white">Product Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-dark-300">123 Main St, Anytown, USA</p>
            <p className="text-dark-300">info@example.com</p>
            <p className="text-dark-300">(555) 555-5555</p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;