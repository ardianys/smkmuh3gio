import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SCHOOL_INFO } from '../types';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-muhammadiyah-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold">Hubungi Kami</h1>
            <p className="mt-2 text-emerald-200">Kami siap melayani pertanyaan Anda mengenai pendaftaran dan akademik.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Info Column */}
            <div className="space-y-8">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h2>
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="bg-emerald-100 p-3 rounded-full mr-4 text-muhammadiyah-primary">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Alamat Sekolah</h3>
                                <p className="text-gray-600 mt-1">{SCHOOL_INFO.address}</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-emerald-100 p-3 rounded-full mr-4 text-muhammadiyah-primary">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Telepon</h3>
                                <p className="text-gray-600 mt-1">{SCHOOL_INFO.phone}</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-emerald-100 p-3 rounded-full mr-4 text-muhammadiyah-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Email</h3>
                                <p className="text-gray-600 mt-1">{SCHOOL_INFO.email}</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-emerald-100 p-3 rounded-full mr-4 text-muhammadiyah-primary">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Jam Operasional</h3>
                                <p className="text-gray-600 mt-1">Senin - Jumat: 07:00 - 15:00 WIB</p>
                                <p className="text-gray-600">Sabtu: 07:00 - 12:00 WIB</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-2">Lokasi Strategis</h3>
                    <p className="text-gray-600 text-sm">
                        Terletak di pusat kecamatan Giriwoyo, mudah diakses dari berbagai desa sekitar dan menjadi titik temu pergerakan ekonomi selatan Wonogiri.
                    </p>
                </div>
            </div>

            {/* Map Column */}
            <div className="bg-gray-200 rounded-xl overflow-hidden h-96 shadow-inner relative">
                <iframe 
                    title="Lokasi SMK Muhammadiyah 3 Giriwoyo"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.366479708785!2d110.923456!3d-7.961012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a31a686888889%3A0x6888888888888888!2sSMK%20Muhammadiyah%203%20Giriwoyo!5e0!3m2!1sid!2sid!4v1620000000000!5m2!1sid!2sid" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy"
                ></iframe>
                <div className="absolute bottom-4 left-4 bg-white p-2 text-xs rounded shadow opacity-90">
                    *Tampilan Peta Ilustrasi
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;