import React from 'react';
import { History, Target, Award, User } from 'lucide-react';
import { SCHOOL_INFO } from '../types';

const Profile: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-12">
      <div className="bg-gray-100 py-12 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900">Profil Sekolah</h1>
            <p className="mt-2 text-gray-600">Mengenal lebih dekat SMK Muhammadiyah 3 Giriwoyo.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
                
                {/* History */}
                <section>
                    <div className="flex items-center mb-4">
                        <div className="bg-muhammadiyah-primary p-2 rounded-lg text-white mr-4">
                            <History size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Sejarah & Identitas</h2>
                    </div>
                    <div className="prose text-gray-600 leading-relaxed text-justify">
                        <p className="mb-4">
                            SMK Muhammadiyah 3 Giriwoyo memiliki akar sejarah yang panjang dalam dunia pendidikan di Wonogiri. 
                            Sebelum dikenal dengan nomenklatur saat ini, masyarakat luas mengenalnya sebagai <strong>SMEA Muhammadiyah 3 Giriwoyo</strong>. 
                            Warisan ini memberikan fokus yang tajam pada bidang keahlian Bisnis dan Manajemen.
                        </p>
                        <p>
                            Berdiri di bawah naungan Persyarikatan Muhammadiyah, sekolah ini bukan sekadar tempat transfer ilmu teknis, 
                            melainkan ekosistem persemaian kader bangsa. Terletak strategis di Jalan Wijaya Kusuma, Giriwoyo, sekolah ini 
                            menjadi hub pendidikan bagi wilayah selatan Wonogiri, melayani masyarakat sub-urban dan pedesaan dengan pendidikan 
                            berkualitas yang terjangkau.
                        </p>
                    </div>
                </section>

                {/* Visi Misi */}
                <section>
                    <div className="flex items-center mb-4">
                        <div className="bg-muhammadiyah-primary p-2 rounded-lg text-white mr-4">
                            <Target size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Filosofi & Tujuan</h2>
                    </div>
                    <div className="bg-gray-50 border-l-4 border-muhammadiyah-secondary p-6 rounded-r-lg">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Semangat Tajdid</h3>
                        <p className="text-gray-600 mb-4">
                            Kami mengemban misi pembaruan (Tajdid), menyeimbangkan antara Iman & Taqwa (Imtaq) dengan Ilmu Pengetahuan & Teknologi (Iptek).
                        </p>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Profil Lulusan</h3>
                        <p className="text-gray-600">
                            Mencetak lulusan yang <strong>Islami, Nasionalis, dan Profesional</strong>. Lulusan kami dibekali tidak hanya hardskills akuntansi dan pemasaran, 
                            tapi juga softskills kejujuran (shiddiq) dan amanah.
                        </p>
                    </div>
                </section>
                
                {/* Facilities */}
                 <section>
                    <div className="flex items-center mb-4">
                        <div className="bg-muhammadiyah-primary p-2 rounded-lg text-white mr-4">
                            <Award size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Fasilitas & Keunggulan</h2>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Laboratorium Komputer & Simulasi Bisnis",
                            "Perpustakaan Lengkap",
                            "Masjid sebagai Pusat Ibadah",
                            "Ruang Kelas Kondusif (Rasio Siswa Ideal)",
                            "Area Parkir & Keamanan Terjamin",
                            "Lokasi Strategis & Mudah Diakses"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center bg-white shadow-sm p-3 rounded border border-gray-100">
                                <span className="w-2 h-2 bg-muhammadiyah-secondary rounded-full mr-3"></span>
                                <span className="text-gray-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            {/* Sidebar / Headmaster */}
            <div className="lg:col-span-1">
                <div className="bg-white shadow-lg rounded-xl overflow-hidden sticky top-24 border border-gray-200">
                    <div className="bg-muhammadiyah-primary h-24 relative">
                        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                            <div className="w-24 h-24 bg-gray-200 rounded-full border-4 border-white flex items-center justify-center overflow-hidden">
                                <User size={48} className="text-gray-400" />
                            </div>
                        </div>
                    </div>
                    <div className="pt-16 pb-8 px-6 text-center">
                        <h3 className="text-xl font-bold text-gray-900">{SCHOOL_INFO.headmaster}</h3>
                        <p className="text-muhammadiyah-primary font-medium text-sm">Kepala Sekolah</p>
                        
                        <div className="mt-6 text-sm text-gray-500 italic">
                            "Mewujudkan sekolah yang adaptif terhadap digitalisasi namun tetap memegang teguh identitas keislaman."
                        </div>
                        
                        <div className="mt-8 pt-6 border-t border-gray-100 w-full text-left">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Data Sekolah</h4>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">NPSN</span>
                                    <span className="font-semibold">{SCHOOL_INFO.npsn}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Akreditasi</span>
                                    <span className="font-semibold bg-emerald-100 text-emerald-800 px-2 rounded">{SCHOOL_INFO.accreditation}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Kepemilikan</span>
                                    <span className="font-semibold">Muhammadiyah</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;