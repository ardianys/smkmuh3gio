import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { SCHOOL_INFO } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Tentang Kami</h3>
            <p className="text-sm leading-relaxed mb-4">
              SMK Muhammadiyah 3 Giriwoyo adalah lembaga pendidikan vokasi yang berkomitmen mencetak lulusan berkarakter Islami, kompeten di bidang bisnis manajemen, dan siap kerja.
            </p>
            <div className="flex space-x-4">
              <a href={SCHOOL_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-muhammadiyah-secondary transition">
                <Facebook size={24} />
              </a>
              <a href={SCHOOL_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-muhammadiyah-secondary transition">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="flex-shrink-0 mr-2 text-muhammadiyah-secondary" size={20} />
                <span className="text-sm">{SCHOOL_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="flex-shrink-0 mr-2 text-muhammadiyah-secondary" size={20} />
                <span className="text-sm">{SCHOOL_INFO.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="flex-shrink-0 mr-2 text-muhammadiyah-secondary" size={20} />
                <span className="text-sm">{SCHOOL_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links / Status */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Identitas Sekolah</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between border-b border-gray-700 pb-2">
                <span>NPSN</span>
                <span className="text-white font-medium">{SCHOOL_INFO.npsn}</span>
              </li>
              <li className="flex justify-between border-b border-gray-700 pb-2">
                <span>Akreditasi</span>
                <span className="text-white font-medium bg-muhammadiyah-primary px-2 py-0.5 rounded">{SCHOOL_INFO.accreditation}</span>
              </li>
              <li className="flex justify-between border-b border-gray-700 pb-2">
                <span>Kepala Sekolah</span>
                <span className="text-white font-medium">{SCHOOL_INFO.headmaster}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SMK Muhammadiyah 3 Giriwoyo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;