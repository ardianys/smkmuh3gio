import React from 'react';
import { ArrowRight, CheckCircle, TrendingUp, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../types';
import ImageWithFallback from '../components/ImageWithFallback';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <div className="relative h-[600px] w-full overflow-hidden bg-gray-900">
        <div className="absolute inset-0 opacity-60">
            <ImageWithFallback 
                src={IMAGES.GATE} 
                fallbackSrc={IMAGES.PLACEHOLDER_GATE}
                alt="Gerbang SMK Muhammadiyah 3 Giriwoyo" 
                className="w-full h-full object-cover"
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded bg-muhammadiyah-secondary text-gray-900 font-bold text-sm mb-4">
              TERAKREDITASI B
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Mencetak Kader Bangsa <span className="text-muhammadiyah-secondary">Berkemajuan</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              SMK Muhammadiyah 3 Giriwoyo menyeimbangkan kompetensi bisnis modern dengan nilai-nilai spiritualitas yang kokoh. Siap kerja, santun, dan mandiri.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/jurusan" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-muhammadiyah-primary hover:bg-emerald-700 md:text-lg transition-all shadow-lg hover:shadow-xl">
                Lihat Jurusan
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link to="/kontak" className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 md:text-lg transition-all">
                Daftar Sekarang
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features / Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Kenapa Memilih Kami?</h2>
            <p className="mt-4 text-lg text-gray-500">Transformasi pendidikan kejuruan berbasis nilai di Wonogiri.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-muhammadiyah-primary mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pendidikan Karakter</h3>
              <p className="text-gray-600">Integrasi nilai Imtaq dan Iptek. Mencetak lulusan yang jujur, amanah, dan memiliki etos kerja Islami.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-4">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Siap Kerja & Wirausaha</h3>
              <p className="text-gray-600">Fokus pada Bisnis dan Manajemen. Lulusan siap terjun ke industri ritel, keuangan, atau memulai bisnis digital.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kurikulum Adaptif</h3>
              <p className="text-gray-600">Warisan SMEA yang kuat dengan adaptasi teknologi digital dan fasilitas laboratorium komputer yang memadai.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats/Highlights */}
      <section className="py-16 bg-muhammadiyah-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div className="p-4">
                    <div className="text-5xl font-bold mb-2">B</div>
                    <div className="text-emerald-200 font-medium">Terakreditasi BAN-SM</div>
                </div>
                <div className="p-4">
                    <div className="text-5xl font-bold mb-2">2</div>
                    <div className="text-emerald-200 font-medium">Program Keahlian Utama</div>
                </div>
                <div className="p-4">
                    <div className="text-5xl font-bold mb-2">40+</div>
                    <div className="text-emerald-200 font-medium">Siswa Per Angkatan (Eksklusif)</div>
                </div>
                <div className="p-4">
                    <div className="text-5xl font-bold mb-2">100%</div>
                    <div className="text-emerald-200 font-medium">Berbasis Kompetensi</div>
                </div>
            </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-64 md:h-auto">
                    <ImageWithFallback 
                        src={IMAGES.LAB} 
                        fallbackSrc={IMAGES.PLACEHOLDER_CLASS}
                        alt="Suasana Belajar" 
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Bergabunglah Bersama Keluarga Besar Kami</h3>
                      <p className="text-gray-600 mb-8">
                          Jadilah bagian dari generasi muda yang cerdas, terampil, dan berakhlak mulia. Pendaftaran peserta didik baru telah dibuka.
                      </p>
                      <div>
                        <Link to="/kontak" className="inline-block bg-muhammadiyah-secondary text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-400 transition transform hover:-translate-y-1">
                            Hubungi Kami
                        </Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>

    </div>
  );
};

export default Home;