import { ArrowUp } from 'lucide-react';
import { SiFacebook, SiTiktok } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import logoImage from '@/assets/celina-logo.webp';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Foundation Info */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg bg-white/50 p-1">
                  <img 
                    src={logoImage} 
                    alt="Celina's Goodwill Foundation Logo" 
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold">Celina's Goodwill Foundation</h3>
              </div>
              
              <p className="text-gray-400 leading-relaxed text-sm">
                Breaking mental health stigma through compassion and community support
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('story')}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                    data-testid="footer-link-our-story"
                  >
                    Our Story
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('mission')}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                    data-testid="footer-link-mission"
                  >
                    Mission
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('partnership')}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                    data-testid="footer-link-get-involved"
                  >
                    Get Involved
                  </button>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Support</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('partnership')}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                    data-testid="footer-link-contact-us"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('partnership')}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                    data-testid="footer-link-get-help"
                  >
                    Get Help
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
              <div className="space-y-3">
                <p className="text-gray-400 text-sm">celinasgoodwillfoundation@gmail.com</p>
                <p className="text-gray-400 text-sm">+234 911 022 1031</p>
              </div>
            </div>
          </div>
        </div>

        {/* Memorial Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="text-center">
            <p className="text-gray-500 italic text-sm">
              In loving memory of Celina Mbgogo Okwuokei
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                Copyright © {currentYear} Celina's Goodwill Foundation. All rights reserved.
              </p>
            </div>

            {/* Social Icons and Top Button */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-8 h-8 bg-white/50 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook - Joyful Healing Hub"
                data-testid="link-facebook-footer"
              >
                <SiFacebook className="w-4 h-4 text-black hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/50 hover:bg-black rounded-full flex items-center justify-center transition-colors"
                aria-label="TikTok - @joyfulhealinghub"
                data-testid="link-tiktok-footer"
              >
                <SiTiktok className="w-4 h-4 text-black hover:text-white transition-colors" />
              </a>
              
              <Button
                onClick={scrollToTop}
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white px-3 py-1 text-sm"
                data-testid="button-scroll-to-top"
              >
                <ArrowUp className="w-4 h-4 mr-1" />
                Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}