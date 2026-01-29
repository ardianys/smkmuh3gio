import React from 'react';
import { IMAGES } from '../types';
import ImageWithFallback from '../components/ImageWithFallback';

const Gallery: React.FC = () => {
  const galleryItems = [
    {
      src: IMAGES.GATE,
      fallback: IMAGES.PLACEHOLDER_GATE,
      title: "Gedung Sekolah",
      desc: "Tampak depan SMK Muhammadiyah 3 Giriwoyo, identitas kebanggaan warga sekolah."
    },
    {
      src: IMAGES.COMMUNITY,
      fallback: IMAGES.PLACEHOLDER_ACTIVITY,
      title: "Bakti Sosial",
      desc: "Siswa terlibat langsung dalam penyaluran bantuan air bersih, menanamkan jiwa sosial."
    },
    {
      src: IMAGES.RELIGIOUS,
      fallback: IMAGES.PLACEHOLDER_ACTIVITY,
      title: "Kegiatan Keagamaan",
      desc: "Praktik ibadah Qurban melatih keikhlasan dan kepedulian berbagi sesama."
    },
    {
      src: IMAGES.LAB,
      fallback: IMAGES.PLACEHOLDER_CLASS,
      title: "Fasilitas Belajar",
      desc: "Laboratorium komputer yang mendukung pembelajaran berbasis teknologi."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900">Galeri Kegiatan</h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Dokumentasi aktivitas akademik, sosial, dan keagamaan yang membentuk karakter siswa SMK Muhammadiyah 3 Giriwoyo.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {galleryItems.map((item, index) => (
                <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="h-64 sm:h-80 overflow-hidden relative">
                         <ImageWithFallback 
                            src={item.src} 
                            fallbackSrc={item.fallback}
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-xl font-bold">{item.title}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-muhammadiyah-primary transition-colors">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
        
        {/* Extra Curricular Section */}
        <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-2">Ekstrakurikuler & Organisasi</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {['Ikatan Pelajar Muhammadiyah (IPM)', 'Hizbul Wathan (HW)', 'Olahraga', 'Seni & Kaligrafi'].map((ex, i) => (
                    <div key={i} className="bg-white p-6 rounded-lg shadow border border-gray-100 text-center hover:bg-emerald-50 transition">
                        <span className="font-semibold text-gray-800">{ex}</span>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default Gallery;