import React from 'react';
import { Calculator, ShoppingBag, PieChart, MonitorPlay } from 'lucide-react';
import { IMAGES } from '../types';
import ImageWithFallback from '../components/ImageWithFallback';

const Programs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
       <div className="bg-muhammadiyah-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Program Keahlian</h1>
            <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
                Fokus pada rumpun Bisnis dan Manajemen untuk menjawab tantangan ekonomi digital dan kebutuhan industri modern.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* AKL Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-emerald-500">
                <div className="p-8">
                    <div className="flex items-center mb-6">
                        <div className="bg-emerald-100 p-3 rounded-full mr-4">
                            <Calculator className="text-emerald-600" size={32} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Akuntansi & Keuangan Lembaga</h2>
                            <p className="text-sm text-gray-500">Teknisi Akuntansi Profesional</p>
                        </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Mencetak tenaga ahli yang teliti, jujur, dan kompeten dalam pengelolaan keuangan. 
                        Siswa dibekali kemampuan software akuntansi (MYOB/Spreadsheet) dan pemahaman perpajakan. 
                        Sangat diminati siswa yang ingin berkarir sebagai Akuntan Publik atau staf keuangan.
                    </p>

                    <div className="space-y-4 mb-6">
                        <h3 className="font-semibold text-gray-900 flex items-center">
                            <PieChart size={18} className="mr-2 text-emerald-500" />
                            Materi Unggulan:
                        </h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-1 text-sm">
                            <li>Akuntansi Perusahaan Jasa, Dagang & Manufaktur</li>
                            <li>Akuntansi Lembaga Pemerintah</li>
                            <li>Komputer Akuntansi & Perpajakan</li>
                            <li>Etika Profesi & Budaya Kerja</li>
                        </ul>
                    </div>

                    <div className="bg-emerald-50 p-4 rounded-lg">
                        <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide">Prospek Karir</span>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {['Staff Akunting', 'Teller Bank', 'Pegawai Pajak', 'Admin Keuangan'].map(job => (
                                <span key={job} className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs shadow-sm border border-emerald-100">{job}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Pemasaran Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-yellow-500">
                <div className="p-8">
                    <div className="flex items-center mb-6">
                        <div className="bg-yellow-100 p-3 rounded-full mr-4">
                            <ShoppingBag className="text-yellow-600" size={32} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Pemasaran (Bisnis Digital)</h2>
                            <p className="text-sm text-gray-500">Digital Marketer & Entrepreneur</p>
                        </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Transformasi kompetensi pemasaran menuju era digital. Siswa diajarkan strategi branding, 
                        e-commerce, dan analisis pasar. Program ini juga menanamkan jiwa kewirausahaan yang kuat 
                        untuk mengangkat potensi ekonomi lokal Wonogiri.
                    </p>

                    <div className="space-y-4 mb-6">
                        <h3 className="font-semibold text-gray-900 flex items-center">
                            <MonitorPlay size={18} className="mr-2 text-yellow-500" />
                            Materi Unggulan:
                        </h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-1 text-sm">
                            <li>Digital Marketing & Social Media Branding</li>
                            <li>Riset Pasar & Perilaku Konsumen</li>
                            <li>Bisnis Ritel Modern</li>
                            <li>Perencanaan Bisnis (Business Plan)</li>
                        </ul>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                        <span className="text-xs font-bold text-yellow-600 uppercase tracking-wide">Prospek Karir</span>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {['Digital Marketer', 'Content Creator', 'Entrepreneur', 'Sales Executive'].map(job => (
                                <span key={job} className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs shadow-sm border border-yellow-100">{job}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>

        {/* Feature Image Section */}
        <div className="mt-16 bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="h-64 md:h-80 rounded-xl overflow-hidden relative">
                     <ImageWithFallback 
                        src={IMAGES.LAB} 
                        fallbackSrc={IMAGES.PLACEHOLDER_CLASS}
                        alt="Laboratorium Komputer" 
                        className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Pembelajaran Berbasis Praktik</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Di SMK Muhammadiyah 3 Giriwoyo, teori langsung diaplikasikan di Laboratorium Komputer dan unit simulasi bisnis. 
                        Rasio siswa yang ideal (sekitar 20 siswa per kelas) memungkinkan guru membimbing setiap siswa secara personal, 
                        memastikan tidak ada yang tertinggal dalam penguasaan teknologi.
                    </p>
                    <div className="flex items-center space-x-2 text-muhammadiyah-primary font-medium">
                        <CheckCircleIcon /> <span>Fasilitas Komputer Modern</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muhammadiyah-primary font-medium mt-2">
                        <CheckCircleIcon /> <span>Akses Internet Cepat</span>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

const CheckCircleIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

export default Programs;