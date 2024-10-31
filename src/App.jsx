import React, { useState , useEffect } from 'react';
import { Mail, Phone, Calendar, Star, Shield, Users, CheckCircle, Instagram, Facebook } from 'lucide-react';


const MitshuStoreSPA = () => {
  const [activePage, setActivePage] = useState('about');

  // Navigation items
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'joki', label: 'Joki Blox Fruit' },
    { id: 'stock', label: 'Stock Akun' },
    { id: 'testi', label: 'Testi' }
  ];

  // Content components
  const AboutContent = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Mitshu Store</h1>
        
        {/* New image added here */}
        <img
  src="src/download.png" // Replace with the actual path to your image
  alt="Mitshu Store Banner"
  className="mx-auto mb-4 w-25 max-w-sm rounded-lg" // Change max-w-md to max-w-sm
/>

  
        <p className="text-gray-300">
          Store Ini Sudah Berdiri Sejak Oktober 2023, Dan Sudah Melayani Lebih Dari 1000 Customer
        </p>
        <p className="text-gray-300">
          Joki Disini 100% Aman, Karena Dikerjakan Oleh Penjoki Professional Dan Akun Kalian Bakal Aman
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800/50 p-6 rounded-lg">
          <Shield className="w-12 h-12 text-purple-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">100% Aman</h3>
          <p className="text-gray-400">Garansi keamanan akun anda</p>
        </div>
        <div className="bg-gray-800/50 p-6 rounded-lg">
          <Users className="w-12 h-12 text-purple-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">Professional</h3>
          <p className="text-gray-400">Tim berpengalaman & terpercaya</p>
        </div>
        <div className="bg-gray-800/50 p-6 rounded-lg">
          <Star className="w-12 h-12 text-purple-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">Terpercaya</h3>
          <p className="text-gray-400">1000+ pelanggan puas</p>
        </div>
      </div>
    </div>
  );

  const JokiContent = () => (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center">Joki Blox Fruit</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800/50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Layanan Joki</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
              Level Up Service
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
              Farming Materials
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
              Quest Completion
            </li>
          </ul>
        </div>
        <div className="bg-gray-800/50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Keuntungan</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
              Proses Cepat
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
              Harga Bersaing
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
              Aman Terpercaya
            </li>
          </ul>
        </div>
      </div>

      <h3 className="text-3xl font-bold mb-4 text-center">Produk Jasa Joki</h3>
  
      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-gray-800/50 p-6 rounded-lg">
          <h4 className="text-lg font-bold">Paket Bronze</h4>
          <p className="text-purple-400 text-2xl font-semibold mt-2">Rp50.000</p>
          <p className="text-gray-300 mt-4">Level up hingga level 100 dengan proses cepat dan aman.</p>
          <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
            Pesan Sekarang
          </button>
        </div>
  
        <div className="bg-gray-800/50 p-6 rounded-lg">
          <h4 className="text-lg font-bold">Paket Silver</h4>
          <p className="text-purple-400 text-2xl font-semibold mt-2">Rp100.000</p>
          <p className="text-gray-300 mt-4">Level up hingga level 300, lengkap dengan farming materials.</p>
          <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
            Pesan Sekarang
          </button>
        </div>
  
        <div className="bg-gray-800/50 p-6 rounded-lg">
          <h4 className="text-lg font-bold">Paket Gold</h4>
          <p className="text-purple-400 text-2xl font-semibold mt-2">Rp150.000</p>
          <p className="text-gray-300 mt-4">Level up hingga level 500, plus semua layanan khusus kami.</p>
          <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
            Pesan Sekarang
          </button>
        </div>
      </div>
    </div>
  );

  const StockContent = () => (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center">Stock Akun</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Account Card */}
        <div className="bg-gray-800/50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Akun Random</h3>
          <p className="mb-4">
            Akun ini cocok untuk pemula yang ingin memulai perjalanan mereka dengan item dasar dan level awal.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
              Level 1000+
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
              Basic Items
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
              Support for Beginners
            </li>
            <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
            Pesan Sekarang
          </button>
          </ul>
        </div>
  
        {/* Premium Account Card */}
        <div className="bg-gray-800/50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Akun Premium</h3>
          <p className="mb-4">
            Akun ini dirancang untuk pemain serius dengan akses ke item langka dan level yang lebih tinggi.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
              Level 2000+
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
              Rare Items
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
              Exclusive Access to Events
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const TestiContent = () => {
    // Load testimonials from local storage or set default testimonials
    const [testimonials, setTestimonials] = useState(() => {
      const savedTestimonials = localStorage.getItem('testimonials');
      return savedTestimonials ? JSON.parse(savedTestimonials) : [
        { name: "John Doe", role: "Customer", comment: "Pelayanan cepat dan profesional, recommended!", rating: 5 },
        { name: "Jane Smith", role: "Customer", comment: "Harga bersahabat, hasil memuaskan!", rating: 5 },
      ];
    });
  
    // State for new testimonial form
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(5);
  
    // Function to save testimonials to local storage whenever testimonials change
    useEffect(() => {
      localStorage.setItem('testimonials', JSON.stringify(testimonials));
    }, [testimonials]);
  
    // Function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Add new testimonial to the list
      const newTestimonial = { name, role: "Customer", comment, rating };
      setTestimonials([newTestimonial, ...testimonials]);
  
      // Clear form fields
      setName('');
      setComment('');
      setRating(5);
    };
  
    return (
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Testimoni</h2>
  
        {/* Testimonial Form */}
        <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-gray-700 rounded-lg">
          <h3 className="text-xl font-bold">Tambahkan Testimoni</h3>
          <input
            type="text"
            placeholder="Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded-lg bg-gray-800 text-white"
            required
          />
          <textarea
            placeholder="Komentar"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-2 rounded-lg bg-gray-800 text-white"
            required
          />
          <label className="flex items-center space-x-2">
            <span>Rating:</span>
            <select
              value={rating}
              onChange={(e) => setRating(parseInt(e.target.value))}
              className="p-1 rounded bg-gray-800 text-white"
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <option key={star} value={star}>{star}</option>
              ))}
            </select>
          </label>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Kirim</button>
        </form>
  
        {/* Display Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testi, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-lg">
              <p className="italic mb-4">"{testi.comment}"</p>
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="font-bold">{testi.name}</p>
                  <p className="text-sm text-gray-400">{testi.role}</p>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

  // Render content based on active page
  const renderContent = () => {
    switch (activePage) {
      case 'about':
        return <AboutContent />;
      case 'joki':
        return <JokiContent />;
      case 'stock':
        return <StockContent />;
      case 'testi':
        return <TestiContent />;
      default:
        return <AboutContent />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="bg-gray-800/80 backdrop-blur-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
          <span className="text-sm md:text-lg font-bold">Mitshu Store</span>
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`text-[15px] px-3 py-1 md:py-4 rounded-md transition-colors ${
                    activePage === item.id
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800/50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Kontak</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>iyansembarang1929@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <a href="https://wa.me/085864474973?text=Hallo
"><span>085864474973</span></a>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Since 2 Oktober 2023</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Layanan</h3>
              <ul className="space-y-2">
                <li>Joki Blox Fruit</li>
                <li>Stock Akun</li>
                <li>Customer Support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Jam Operasional</h3>
              <p>Senin - Minggu</p>
              <p>09:00 - 21:00 WIB</p>
              <div className="flex space-x-1 mt-1">
          <a href="https://www.instagram.com/fervianoo/" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6 text-white hover:text-purple-400 transition" />
          </a>
          <a href="https://www.facebook.com/share/1ERgrCSEsb" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-6 h-6 text-white hover:text-purple-400 transition" />
          </a>
        </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>© 2024 Mitshuka Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MitshuStoreSPA;
