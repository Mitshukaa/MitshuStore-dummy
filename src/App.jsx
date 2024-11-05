import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Calendar,
  Star,
  Shield,
  Users,
  CheckCircle,
  Instagram,
  Facebook,
} from "lucide-react";


const MitshuStoreSPA = () => {
  const [activePage, setActivePage] = useState("about");

  // Navigation items
  const navItems = [
    { id: "about", label: "About" },
    { id: "joki", label: "Joki Blox Fruit" },
    { id: "stock", label: "Stock Akun" },
    { id: "testi", label: "Testi" },
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
          Store Ini Sudah Berdiri Sejak Oktober 2023, Dan Sudah Melayani Lebih
          Dari 1000 Customer
        </p>
        <p className="text-gray-300">
          Joki Disini 100% Aman, Karena Dikerjakan Oleh Penjoki Professional Dan
          Akun Kalian Bakal Aman
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

  const [dropdownRaceOpen, setDropdownRaceOpen] = useState(false);
  const [dropdownBossOpen, setDropdownBossOpen] = useState(false);
  const [dropdownMasteryOpen, setDropdownMasteryOpen] = useState(false);
  const [dropdownUnlockraceOpen, setDropdownUnlockraceOpen] = useState(false);
  const [dropdownSwordOpen, setDropdownSwordOpen] = useState(false);
  const [dropdownMaterialOpen, setDropdownMaterialOpen] = useState(false);
  const [dropdownKitsuneOpen, setDropdownKitsuneOpen] = useState(false);
  const [dropdownAccountOpen, setDropdownAccountOpen] = useState(false);

  const [selectedRace, setSelectedRace] = useState(null);
  const [selectedBoss, setSelectedBoss] = useState(null);
  const [selectedMastery, setSelectedMastery] = useState(null);
  const [selectedUnlockrace, setSelectedUnlockrace] = useState(null);
  const [selectedSword, setSelectedSword] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [selectedKitsune, setSelectedKitsune] = useState(null);
  const [selectedAccount, setSelectedAccount] = useState(null);

  const races = [
    {
      name: "Race V2",
      description: "Level 800",
      price: "Rp2.000",
      link: "https://itemku.com/t/mitshu-store-2",
    },
    {
      name: "Race V3",
      description: "Level 1000",
      price: "Rp4.000",
      estimatedTime: "5-7 hari",
      link: "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%20Race%20V3",
    },
    {
      name: "Trial Race V4",
      description: "Level 1500+",
      price: "Rp7.000",
      estimatedTime: "7-10 hari",
      link: "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%20Trial%20Race%20V4",
    },
    {
      name: "Race V4 FULL GEAR",
      description: "Level 1500+",
      price: "Rp35.000",
      estimatedTime: "7-10 hari",
      link: "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%20Race%20V4%20FULL%20GEAR",
    },
  ];
  
  const bosses = [
    {
      name: "Darkbeard",
      price: "Rp7.000",
      link: "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%20kill%20Darkbeard",
    },
    {
      name: "RIP Indra",
      description: "Level 1500+",
      price: "Rp10.000",
      estimatedTime: "5-7 hari",
      link: "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%20kill%20RIP%20Indra",
    },
    {
      name: "Dough King",
      description: "Level 1500+",
      price: "Rp10.000",
      estimatedTime: "7-10 hari",
      link: "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%20kill%20Dough%20King",
    },
  ];
  
  const masteries = [
    {
      name: "Mastery fruit",
      price: "Rp2.200",
      link: "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%20Mastery%20fruit",
    },
    {
      name: "Mastery gun",
      description: "Level 1500+",
      price: "Rp2.200",
      link: "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%20Mastery%20gun",
    },
    {
      name: "Mastery sword",
      description: "Level 1500+",
      price: "Rp1.300",
      link: "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%20Mastery%20sword",
    },
    {
      name: "Mastery mele",
      description: "Level 1500+",
      price: "Rp1.300",
      link: "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%20Mastery%20mele",
    },
  ];
  
  const unlockraces = [
    {
      name: "Ghoul",
      price: "Rp13.000",
      link: "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%20unlock%20Cyborg",
    },
    {
      name: "Cyborg",
      price: "Rp20.000",
      link: "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%20unlock%20Ghoul",
    },
  ];
  
  const materials = [
    {
      name: "Angel Wings, Leather, Magma Ore, Scrap Metal, Wooden Plank, Yeti Fur, Fish Tail, Mystic Droplet, Radioactive, Vampire Fang, Gunpowder, Mini Tusk",
      description: "25 material",
      price: "Rp2.500",
      link: "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%2025%20material%20Uncommon/common:",
    },
    {
      name: "Meteorite, Conjured Cocoa, Demonic Wisp, Dragon Scale",
      description: "10 material",
      price: "Rp2.500",
      link: "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%2010%20material%20Rare:",
    },
    {
      name: "Bones",
      description: "Bones",
      price: "Rp2.000",
      link: "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%20Bones",
    },
    {
      name: "Ectoplasm",
      description: "100 Ectoplasm",
      price: "Rp1.000",
      link: "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%20100%20Ectoplasm",
    },
  ];
  
  const swords = [
    {
      name: "Yama",
      price: "Rp10.000",
      link: "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%20Yama",
    },
    {
      name: "Tushita",
      price: "Rp10.000",
      link: "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%20Tushita",
    },
    {
      name: "Hallow scythe",
      price: "Rp15.000",
      link: "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%20Hallow%20scythe",
    },
    {
      name: "Rengoku",
      price: "Rp5.000",
      link: "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%20Rengoku",
    },
    {
      name: "Wando, Shisui, Saddi",
      price: "Rp3.000",
      link: "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%20Wando,%20Shisui,%20Saddi%20PILIH:",
    },
  ];
  
  const kitsunes = [
    {
      name: "Paket dapet FOX LAMP",
      price: "Rp25.000",
      link: "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%20Paket%20FOX%20LAMP",
    },
    {
      name: "Gacha kitsune shirine",
      price: "Rp5.000",
      link: "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%20paket%20Gacha",
    },
  ];
  
  const accounts = [
    {
      name: "Akun race Human",
      price: "Rp21.000",
      link: "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%20Akun%20race%20Human",
      stock: "0",
    },
    {
      name: "Akun race Rabbit",
      price: "Rp21.000",
      link: "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%20Akun%20race%20Rabbit",
      stock: "0",
    },
    {
      name: "Akun race Angel",
      price: "Rp21.000",
      link: "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%20Akun%20race%20Angel",
      stock: "0",
    },
    {
      name: "Akun race Shark",
      price: "Rp21.000",
      link: "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%20Akun%20race%20Shark",
      stock: "0",
    },
    {
      name: "Akun race Cyborg",
      price: "Rp21.000",
      link: "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%20Akun%20race%20Cyborg",
      stock: "0",
    },
    {
      name: "Akun race Ghou;",
      price: "Rp21.000",
      link: "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%20Akun%20race%20Ghoul",
      stock: "0"
    }
  ];

  const toggleDropdownRace = () => setDropdownRaceOpen(!dropdownRaceOpen);
  const toggleDropdownBoss = () => setDropdownBossOpen(!dropdownBossOpen);
  const toggleDropdownMastery = () => setDropdownMasteryOpen(!dropdownMasteryOpen);
  const toggleDropdownUnlockrace = () => setDropdownUnlockraceOpen(!dropdownUnlockraceOpen);
  const toggleDropdownSword = () => setDropdownSwordOpen(!dropdownSwordOpen);
  const toggleDropdownMaterial = () => setDropdownMaterialOpen(!dropdownMaterialOpen);
  const toggleDropdownKitsune = () => setDropdownKitsuneOpen(!dropdownKitsuneOpen);
  const toggleDropdownAccount = () => setDropdownAccountOpen(!dropdownAccountOpen);

  const handleRaceSelect = (race) => {
    setSelectedRace(race);
    setDropdownRaceOpen(false); // Fixed: Changed setDropdownOpen to setDropdownRaceOpen
  };

  const handleBossSelect = (boss) => {
    setSelectedBoss(boss); // Fixed: Changed setSelectedRace to setSelectedBoss
    setDropdownBossOpen(false); // Fixed: Changed setDropdownOpen to setDropdownBossOpen
  };

  const handleMasterySelect = (mastery) => {
    setSelectedMastery(mastery); // Fixed: Changed setSelectedRace to setSelectedBoss
    setDropdownMasteryOpen(false); // Fixed: Changed setDropdownOpen to setDropdownBossOpen
  };

  const handleUnlockraceSelect = (unlockrace) => {
    setSelectedUnlockrace(unlockrace); // Fixed: Changed setSelectedRace to setSelectedBoss
    setDropdownUnlockraceOpen(false); // Fixed: Changed setDropdownOpen to setDropdownBossOpen
  };

  const handleSwordSelect = (sword) => {
    setSelectedSword(sword); // Fixed: Changed setSelectedRace to setSelectedBoss
    setDropdownSwordOpen(false); // Fixed: Changed setDropdownOpen to setDropdownBossOpen
  };

  const handleMaterialSelect = (material) => {
    setSelectedMaterial(material); // Fixed: Changed setSelectedRace to setSelectedBoss
    setDropdownMaterialOpen(false); // Fixed: Changed setDropdownOpen to setDropdownBossOpen
  };

  const handleKitsuneSelect = (kitsune) => {
    setSelectedKitsune(kitsune); // Fixed: Changed setSelectedRace to setSelectedBoss
    setDropdownKitsuneOpen(false); // Fixed: Changed setDropdownOpen to setDropdownBossOpen
  };

  const handleAccountSelect = (account) => {
    setSelectedAccount(account); // Fixed: Changed setSelectedRace to setSelectedBoss
    setDropdownAccountOpen(false); // Fixed: Changed setDropdownOpen to setDropdownBossOpen
  };


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
      <div className="bg-gray-800/50 p-5 rounded-lg">
          <h4 className="text-lg font-bold text-center mb-2">Sanguane Art</h4>
          <img
            src="src/image/SA.jpg" // Replace with your image URL
            alt="Package Image"
            className="w-full h-90 object-cover rounded-lg grayscale hover:grayscale-0 transition duration-300"
          />
          <p className="text-purple-400 text-2xl font-semibold mt-2">
            Rp35.000
          </p>
          <p className="text-gray-300 mt-4">
  <strong>WAJIB DIBACA SEBELUM MEMBELI</strong>
  <br /><br />
  - Sudah berlevel 1600 dan sudah di SEA 3<br />
  - Semua skill sudah terbuka (Unlock all skill)<br />
  - Sudah termasuk material seperti Leviathan Heart, Dark Fragment, Vampire Fang, dan Demonic Wisp
  (jika sudah memiliki semua, akan tetap dicari lagi)<br />
  - Memiliki 5M Belly dan 5K Fragment<br />
  - Stat wajib ada di Defense dan Devil Fruit selain Portal dan Control (disarankan Magma atau Light)<br />
  - Tidak mengganti apa pun seperti aksesori, Fighting Style, dll.<br />
  - Aman, proses cepat, terpercaya<br />
  - Diproses sesuai antrian<br /><br />
  
  Setelah pembelian selesai, silakan klik "Konfirmasi Pesanan Selesai"
  dan beri rating ⭐⭐⭐⭐⭐<br /><br />
  
  Selamat berbelanja & terima kasih!
</p>
<button
  onClick={() => window.location.href = "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%20Sanguine%20art"}
  className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
>
  Pesan Sekarang
</button>
        </div>

      <div className="bg-gray-800/50 p-5 rounded-lg">
          <h4 className="text-lg font-bold text-center mb-2">Leviathan Heart</h4>
          <img
            src="src/image/leviheart.jpg" // Replace with your image URL
            alt="Package Image"
            className="w-full h-90 object-cover rounded-lg grayscale hover:grayscale-0 transition duration-300"
          />
          <p className="text-purple-400 text-2xl font-semibold mt-2">
            Rp28.000
          </p>
          <p className="text-gray-300 mt-4">
  <strong>WAJIB DIBACA SEBELUM MEMBELI</strong>
  <br /><br />
  - Sudah berlevel 1600 dan sudah di SEA 3<br />
  - Stat wajib ada di Defense dan Devil Fruit selain Portal dan Control (disarankan Magma atau Light)<br />
  - Tidak mengganti apa pun seperti aksesori, Fighting Style, dll.<br />
  - Aman, proses cepat, terpercaya<br />
  - Diproses sesuai antrian<br /><br />
  
  Setelah pembelian selesai, silakan klik "Konfirmasi Pesanan Selesai"
  dan beri rating ⭐⭐⭐⭐⭐<br /><br />
  
  Selamat berbelanja & terima kasih!
</p>
<button
  onClick={() => window.location.href = "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%20Leviathan%20heart"}
  className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
>
  Pesan Sekarang
</button>
        </div>

        <div className="bg-gray-800/50 p-5 rounded-lg">
          <h4 className="text-lg font-bold text-center mb-2">Belly</h4>

          <img
            src="src/image/Belly.jpg" // Replace with your image URL
            alt="Package Image"
            className="w-full h-90 object-cover rounded-lg grayscale hover:grayscale-0 transition duration-300"
          />
          <p className="text-purple-400 text-2xl font-semibold mt-2">
            Rp1.500
          </p>
          <p className="text-gray-300 mt-4">
  <strong>WAJIB DIBACA SEBELUM MEMBELI</strong>
  <br /><br />
  - Khusus Sea 2 & 3<br />
  - Mendapatkan 1M Belly<br />
  - Tidak mengganti apa pun seperti aksesori, Fighting Style, dll.<br />
  - Aman, proses cepat, terpercaya<br />
  - Diproses sesuai antrian<br /><br />
  
  Setelah pembelian selesai, silakan klik "Konfirmasi Pesanan Selesai"
  dan beri rating ⭐⭐⭐⭐⭐<br /><br />
  
  Selamat berbelanja & terima kasih!
</p><button
  onClick={() => window.location.href = "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order:%20(jumlah)%20belly"}
  className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
>
  Pesan Sekarang
</button>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg">
        <h4 className="text-lg font-bold text-center mb-2">Leveling</h4>
          <img
            src="src/image/level.jpg" // Replace with your image URL
            alt="Package Image"
            className="w-full h-90 object-cover rounded-lg grayscale hover:grayscale-0 transition duration-300"
          />
          <p className="text-purple-400 text-2xl font-semibold mt-2">
            Rp2.000
          </p>
          <p className="text-gray-300 mt-4">
  <strong>WAJIB DIBACA SEBELUM MEMBELI</strong>
  <br /><br />
  - Mendapatkan 100 Belly<br />
  - Tidak mengganti apa pun seperti aksesori, Fighting Style, dll.<br />
  - Aman, proses cepat, terpercaya<br />
  - Diproses sesuai antrian<br /><br />
  
  Setelah pembelian selesai, silakan klik "Konfirmasi Pesanan Selesai"
  dan beri rating ⭐⭐⭐⭐⭐<br /><br />
  
  Selamat berbelanja & terima kasih!
</p><button
  onClick={() => window.location.href = "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order:%20(jumlah)%20level"}
  className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
>
  Pesan Sekarang
</button>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg">
        <h4 className="text-lg font-bold text-center mb-2">Cursed dual katana</h4>
          <img
            src="src/image/cdk.jpg" // Replace with your image URL
            alt="Package Image"
            className="w-full h-90 object-cover rounded-lg grayscale hover:grayscale-0 transition duration-300"
          />
          <p className="text-purple-400 text-2xl font-semibold mt-2">
            Rp15.000
          </p>
          <p className="text-gray-300 mt-4">
  <strong>WAJIB DIBACA SEBELUM MEMBELI</strong>
  <br /><br />
  - Sudah Yama & Tushita(Sudah 350 Mastery)<br />
  - Unlock all skill<br />
  - Tidak mengganti apa pun seperti aksesori, Fighting Style, dll.<br />
  - Aman, proses cepat, terpercaya<br />
  - Diproses sesuai antrian<br /><br />
  
  Setelah pembelian selesai, silakan klik "Konfirmasi Pesanan Selesai"
  dan beri rating ⭐⭐⭐⭐⭐<br /><br />
  
  Selamat berbelanja & terima kasih!
</p><button
  onClick={() => window.location.href = "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%20Cursed%20dual%20katana"}
  className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
>
  Pesan Sekarang
</button>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg">
        <h4 className="text-lg font-bold text-center mb-2">True triple katana</h4>
          <img
            src="src/image/ttk.jpg" // Replace with your image URL
            alt="Package Image"
            className="w-full h-90 object-cover rounded-lg grayscale hover:grayscale-0 transition duration-300"
          />
          <p className="text-purple-400 text-2xl font-semibold mt-2">
            Rp15.000
          </p>
          <p className="text-gray-300 mt-4">
  <strong>WAJIB DIBACA SEBELUM MEMBELI</strong>
  <br /><br />
  - Memiliki 8m belly<br />
  - Sudah Termasuk Pencarian 3 Sword & 350 Mastery<br />
  - Tidak mengganti apa pun seperti aksesori, Fighting Style, dll.<br />
  - Aman, proses cepat, terpercaya<br />
  - Diproses sesuai antrian<br /><br />
  
  Setelah pembelian selesai, silakan klik "Konfirmasi Pesanan Selesai"
  dan beri rating ⭐⭐⭐⭐⭐<br /><br />
  
  Selamat berbelanja & terima kasih!
</p>
<button
  onClick={() => window.location.href = "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%20True%20triple%20katana"}
  className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
>
  Pesan Sekarang
</button>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg">
        <h4 className="text-lg font-bold text-center mb-2">Shark Anchor</h4>
          <img
            src="src/image/sharkanchor.jpg" // Replace with your image URL
            alt="Package Image"
            className="w-full h-90 object-cover rounded-lg grayscale hover:grayscale-0 transition duration-300"
          />
          <p className="text-purple-400 text-2xl font-semibold mt-2">
            Rp30.000
          </p>
          <p className="text-gray-300 mt-4">
  <strong>WAJIB DIBACA SEBELUM MEMBELI</strong>
  <br /><br />
  - Sudah berlevel 1600 dan sudah di SEA. 3<br />
  - Material akan kami carkan.<br />
  - Tidak mengganti apa pun seperti aksesori, Fighting Style, dll.<br />
  - Aman, proses cepat, terpercaya<br />
  - Diproses sesuai antrian<br /><br />
  
  Setelah pembelian selesai, silakan klik "Konfirmasi Pesanan Selesai"
  dan beri rating ⭐⭐⭐⭐⭐<br /><br />
  
  Selamat berbelanja & terima kasih!
</p>
<button
  onClick={() => window.location.href = "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%20Shark%20anchor"}
  className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
>
  Pesan Sekarang
</button>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg">
        <h4 className="text-lg font-bold text-center mb-2">Soul Guitar</h4>
          <img
            src="src/image/soulguitar.jpg" // Replace with your image URL
            alt="Package Image"
            className="w-full h-90 object-cover rounded-lg grayscale hover:grayscale-0 transition duration-300"
          />
          <p className="text-purple-400 text-2xl font-semibold mt-2">
            Rp14.000
          </p>
          <p className="text-gray-300 mt-4">
  <strong>WAJIB DIBACA SEBELUM MEMBELI</strong>
  <br /><br />
  - Sudah di SEA 3<br />
  - Material akan kami carkan dark fragment,ectoplasm,dan bones<br />
  - Tidak mengganti apa pun seperti aksesori, Fighting Style, dll.<br />
  - Aman, proses cepat, terpercaya<br />
  - Diproses sesuai antrian<br /><br />
  
  Setelah pembelian selesai, silakan klik "Konfirmasi Pesanan Selesai"
  dan beri rating ⭐⭐⭐⭐⭐<br /><br />
  
  Selamat berbelanja & terima kasih!
</p>
<button
  onClick={() => window.location.href = "https://wa.me/6285864474973?text=Halo%20saya%20ingin%20order%20Soul%20guitar"}
  className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
>
  Pesan Sekarang
</button>
        </div>

        <div className="relative bg-gray-800/50 p-6 rounded-lg">
        <h4 className="text-lg font-bold text-center mb-2">Material</h4>
        <img
          src="src/image/race.jpg"
          alt="Package Image"
          className="w-full h-90 object-cover rounded-lg grayscale hover:grayscale-0 transition duration-300"
        />
        <p className="text-purple-400 text-2xl font-semibold mt-2">
          {selectedMaterial ? selectedMaterial.price : "Pilih Material"}
        </p>
        <p className="text-gray-300 mt-4">
          <strong>WAJIB DIBACA SEBELUM MEMBELI</strong>
          <br /><br />
          - Mastery fruit & gun hanya bisa order sampai 400 mastery<br />
          - Mastery mele & sword bisa sampai max<br />
          - Pastikan stat mastery sesuai agar pengerjaan cepat<br />
          - Tidak mengganti apa pun seperti aksesori, Fighting Style, dll.<br />
          - Aman, proses cepat, terpercaya<br />
          - Diproses sesuai antrian<br /><br />
          Setelah pembelian selesai, silakan klik "Konfirmasi Pesanan Selesai"
          dan beri rating ⭐⭐⭐⭐⭐<br /><br />
          Selamat berbelanja & terima kasih!
        </p>
        <button 
          onClick={toggleDropdownMaterial} 
          className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
        >
          {selectedMaterial ? selectedMaterial.name : "Pilih Material"}
        </button>
        {dropdownMaterialOpen && (
          <div className="absolute bg-gray-700 mt-2 rounded-lg shadow-lg p-4 z-10">
            {materials.map((material) => (
              <button
                key={material.name}
                onClick={() => handleMaterialSelect(material)}
                className="block w-full text-left px-2 py-1 hover:bg-gray-600 rounded"
              >
                {material.name}<br />{material.price}<br />
                {material.description}
              </button>
            ))}
          </div>
        )}
        {selectedMaterial && (
          <a
            href={selectedMaterial.link}
            className="mt-4 block px-4 py-2 bg-purple-500 text-white rounded-lg text-center hover:bg-purple-600"
          >
            Pesan Sekarang
          </a>
        )}
      </div>

        <div className="relative bg-gray-800/50 p-6 rounded-lg">
        <h4 className="text-lg font-bold text-center mb-2">Mastery</h4>
        <img
          src="src/image/race.jpg"
          alt="Package Image"
          className="w-full h-90 object-cover rounded-lg grayscale hover:grayscale-0 transition duration-300"
        />
        <p className="text-purple-400 text-2xl font-semibold mt-2">
          {selectedMastery ? selectedMastery.price : "Pilih Mastery"}
        </p>
        <p className="text-gray-300 mt-4">
          <strong>WAJIB DIBACA SEBELUM MEMBELI</strong>
          <br /><br />
          - Mastery fruit & gun hanya bisa order sampai 400 mastery<br />
          - Mastery mele & sword bisa sampai max<br />
          - Pastikan stat mastery sesuai agar pengerjaan cepat<br />
          - Tidak mengganti apa pun seperti aksesori, Fighting Style, dll.<br />
          - Aman, proses cepat, terpercaya<br />
          - Diproses sesuai antrian<br /><br />
          Setelah pembelian selesai, silakan klik "Konfirmasi Pesanan Selesai"
          dan beri rating ⭐⭐⭐⭐⭐<br /><br />
          Selamat berbelanja & terima kasih!
        </p>
        <button 
          onClick={toggleDropdownMastery} 
          className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
        >
          {selectedMastery ? selectedMastery.name : "Pilih Mastery"}
        </button>
        {dropdownMasteryOpen && (
          <div className="absolute bg-gray-700 mt-2 rounded-lg shadow-lg p-4 z-10">
            {masteries.map((mastery) => (
              <button
                key={mastery.name}
                onClick={() => handleMasterySelect(mastery)}
                className="block w-full text-left px-2 py-1 hover:bg-gray-600 rounded"
              >
                {mastery.name}<br />{mastery.price}
              </button>
            ))}
          </div>
        )}
        {selectedMastery && (
          <a
            href={selectedMastery.link}
            className="mt-4 block px-4 py-2 bg-purple-500 text-white rounded-lg text-center hover:bg-purple-600"
          >
            Pesan Sekarang
          </a>
        )}
      </div>

        <div className="relative bg-gray-800/50 p-6 rounded-lg">
        <h4 className="text-lg font-bold text-center mb-2">Race</h4>
        <img
          src="src/image/race.jpg"
          alt="Package Image"
          className="w-full h-90 object-cover rounded-lg grayscale hover:grayscale-0 transition duration-300"
        />
        <p className="text-purple-400 text-2xl font-semibold mt-2">
          {selectedRace ? selectedRace.price : "Pilih Race"}
        </p>
        <p className="text-gray-300 mt-4">
          <strong>WAJIB DIBACA SEBELUM MEMBELI</strong>
          <br /><br />
          - Race V2<br />
          - Sudah level 850 & Memiliki 500.000 Belly<br />
          <br /><br />
          - Race V3<br />
          - Sudah level 1000 & Memiliki 2JT Belly<br />
          <br /><br />
          - Trial Race V4<br />
          - Sudah Melalukan Pull lever<br />
          - Bisa carry/joki<br />
          <br /><br />
          - Race V4 FULL GEAR<br />
          - Sudah Melakukan Pull Lever<br />
          - Minimal sudah V3 Race<br />
          - Minimal sudah di sea 3<br />
          - Minimal sudah punya fragment 26.750<br />
          - Bisa Request Untuk penggantian Gear<br />
          - Tidak mengganti apa pun seperti aksesori, Fighting Style, dll.<br />
          - Aman, proses cepat, terpercaya<br />
          - Diproses sesuai antrian<br /><br />
          Setelah pembelian selesai, silakan klik "Konfirmasi Pesanan Selesai"
          dan beri rating ⭐⭐⭐⭐⭐<br /><br />
          Selamat berbelanja & terima kasih!
        </p>
        <button 
          onClick={toggleDropdownRace} 
          className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
        >
          {selectedRace ? selectedRace.name : "Pilih Race"}
        </button>
        {dropdownRaceOpen && (
          <div className="absolute bg-gray-700 mt-2 rounded-lg shadow-lg p-4 z-10">
            {races.map((race) => (
              <button
                key={race.name}
                onClick={() => handleRaceSelect(race)}
                className="block w-full text-left px-2 py-1 hover:bg-gray-600 rounded"
              >
                {race.name}<br />{race.price}<br />
                {race.description}
              </button>
            ))}
          </div>
        )}
        {selectedRace && (
          <a
            href={selectedRace.link}
            className="mt-4 block px-4 py-2 bg-purple-500 text-white rounded-lg text-center hover:bg-purple-600"
          >
            Pesan Sekarang
          </a>
        )}
      </div>

        <div className="relative bg-gray-800/50 p-6 rounded-lg">
        <h4 className="text-lg font-bold text-center mb-2">Unlock Cyborg & Ghoul</h4>
        <img
          src="src/image/race.jpg"
          alt="Package Image"
          className="w-full h-90 object-cover rounded-lg grayscale hover:grayscale-0 transition duration-300"
        />
        <p className="text-purple-400 text-2xl font-semibold mt-2">
          {selectedUnlockrace ? selectedUnlockrace.price : "Pilih Race yang mana"}
        </p>
        <p className="text-gray-300 mt-4">
          <strong>WAJIB DIBACA SEBELUM MEMBELI</strong>
          <br /><br />
          - Race V2<br />
          - Sudah level 850 & Memiliki 500.000 Belly<br />
          <br /><br />
          - Race V3<br />
          - Sudah level 1000 & Memiliki 2JT Belly<br />
          <br /><br />
          - Trial Race V4<br />
          - Sudah Melalukan Pull lever<br />
          - Bisa carry/joki<br />
          - Tidak mengganti apa pun seperti aksesori, Fighting Style, dll.<br />
          - Aman, proses cepat, terpercaya<br />
          - Diproses sesuai antrian<br /><br />
          Setelah pembelian selesai, silakan klik "Konfirmasi Pesanan Selesai"
          dan beri rating ⭐⭐⭐⭐⭐<br /><br />
          Selamat berbelanja & terima kasih!
        </p>
        <button 
          onClick={toggleDropdownUnlockrace} 
          className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
        >
          {selectedUnlockrace ? selectedUnlockrace.name : "Pilih Race"}
        </button>
        {dropdownUnlockraceOpen && (
          <div className="absolute bg-gray-700 mt-2 rounded-lg shadow-lg p-4 z-10">
            {unlockraces.map((unlockrace) => (
              <button
                key={unlockrace.name}
                onClick={() => handleUnlockraceSelect(unlockrace)}
                className="block w-full text-left px-2 py-1 hover:bg-gray-600 rounded"
              >
                {unlockrace.name}<br />{unlockrace.price}
              </button>
            ))}
          </div>
        )}
        {selectedUnlockrace && (
          <a
            href={selectedUnlockrace.link}
            className="mt-4 block px-4 py-2 bg-purple-500 text-white rounded-lg text-center hover:bg-purple-600"
          >
            Pesan Sekarang
          </a>
        )}
      </div>

        <div className="relative bg-gray-800/50 p-6 rounded-lg">
        <h4 className="text-lg font-bold text-center mb-2">Legendary Sword</h4>
        <img
          src="src/image/race.jpg"
          alt="Package Image"
          className="w-full h-90 object-cover rounded-lg grayscale hover:grayscale-0 transition duration-300"
        />
        <p className="text-purple-400 text-2xl font-semibold mt-2">
          {selectedSword ? selectedSword.price : "Pilih Sword yang mana"}
        </p>
        <p className="text-gray-300 mt-4">
          <strong>WAJIB DIBACA SEBELUM MEMBELI</strong>
          <br /><br />
          - Tidak mengganti apa pun seperti aksesori, Fighting Style, dll.<br />
          - Aman, proses cepat, terpercaya<br />
          - Diproses sesuai antrian<br /><br />
          Setelah pembelian selesai, silakan klik "Konfirmasi Pesanan Selesai"
          dan beri rating ⭐⭐⭐⭐⭐<br /><br />
          Selamat berbelanja & terima kasih!
        </p>
        <button 
          onClick={toggleDropdownSword} 
          className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
        >
          {selectedSword ? selectedSword.name : "Pilih Sword"}
        </button>
        {dropdownSwordOpen && (
          <div className="absolute bg-gray-700 mt-2 rounded-lg shadow-lg p-4 z-10">
            {swords.map((sword) => (
              <button
                key={sword.name}
                onClick={() => handleSwordSelect(sword)}
                className="block w-full text-left px-2 py-1 hover:bg-gray-600 rounded"
              >
                {sword.name}<br />{sword.price}
              </button>
            ))}
          </div>
        )}
        {selectedSword && (
          <a
            href={selectedSword.link}
            className="mt-4 block px-4 py-2 bg-purple-500 text-white rounded-lg text-center hover:bg-purple-600"
          >
            Pesan Sekarang
          </a>
        )}
      </div>

      {/* Boss Section */}
      <div className="relative bg-gray-800/50 p-6 rounded-lg">
        <h4 className="text-lg font-bold text-center mb-2">Raid Boss</h4>
        <img
          src="src/image/race.jpg"
          alt="Package Image"
          className="w-full h-90 object-cover rounded-lg grayscale hover:grayscale-0 transition duration-300"
        />
        <p className="text-purple-400 text-2xl font-semibold mt-2">
          {selectedBoss ? selectedBoss.price : "Pilih Raid Boss"}
        </p>
        <p className="text-gray-300 mt-4">
          <strong>WAJIB DIBACA SEBELUM MEMBELI</strong>
          <br /><br />
          - Darkbeard<br />
          - Mendapatkan Dark Fragment<br />
          <br /><br />
          - RIP Indra<br />
          - Mendapatkan valkrye helmet & unlock portal<br />
          <br /><br />
          - Dough King<br />
          - Mendapatkan Mirro fractak & unlock raid dough<br />
          - Bisa carry/joki<br />
          - Tidak mengganti apa pun seperti aksesori, Fighting Style, dll.<br />
          - Aman, proses cepat, terpercaya<br />
          - Diproses sesuai antrian<br /><br />
          Setelah pembelian selesai, silakan klik "Konfirmasi Pesanan Selesai"
          dan beri rating ⭐⭐⭐⭐⭐<br /><br />
          Selamat berbelanja & terima kasih!
        </p>
        <button 
          onClick={toggleDropdownBoss} 
          className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
        >
          {selectedBoss ? selectedBoss.name : "Pilih Raid Boss"}
        </button>
        {dropdownBossOpen && (
          <div className="absolute bg-gray-700 mt-2 rounded-lg shadow-lg p-4 z-10">
            {bosses.map((boss) => (
              <button
                key={boss.name}
                onClick={() => handleBossSelect(boss)}
                className="block w-full text-left px-2 py-1 hover:bg-gray-600 rounded"
              >
                {boss.name}<br />{boss.price}
              </button>
            ))}
          </div>
        )}
        {selectedBoss && (
          <a
            href={selectedBoss.link}
            className="mt-4 block px-4 py-2 bg-purple-500 text-white rounded-lg text-center hover:bg-purple-600"
          >
            Pesan Sekarang
          </a>
        )}
      </div>

      <div className="relative bg-gray-800/50 p-6 rounded-lg">
        <h4 className="text-lg font-bold text-center mb-2">Kitsune Shirine</h4>
        <img
          src="src/image/race.jpg"
          alt="Package Image"
          className="w-full h-90 object-cover rounded-lg grayscale hover:grayscale-0 transition duration-300"
        />
        <p className="text-purple-400 text-2xl font-semibold mt-2">
          {selectedKitsune ? selectedKitsune.price : "Pilih Paket"}
        </p>
        <p className="text-gray-300 mt-4">
          <strong>WAJIB DIBACA SEBELUM MEMBELI</strong>
          <br /><br />
          - Paket gacha<br />
          - Sistemnya Mendapatkan 25 Amber azure,lalu akan di gacha kan<br />
          - Sudah Berlevel 1600 dan sudah di SEA 3
          - Yang bisa di dapatkan:
            Fragment 750
            Kitsune Aura Color
            Tailed Beast Title
            Fox Lamp
            Kitsune Mask
            Kitsune Ribbon
            Kitsune Fruit<br />
            <br /><br />
          - Paket FOX LAMP<br />
          - Gratis unlock all skill<br />
          - Tidak mengganti apa pun seperti aksesori, Fighting Style, dll.<br />
          - Aman, proses cepat, terpercaya<br />
          - Diproses sesuai antrian<br /><br />
          Setelah pembelian selesai, silakan klik "Konfirmasi Pesanan Selesai"
          dan beri rating ⭐⭐⭐⭐⭐<br /><br />
          Selamat berbelanja & terima kasih!
        </p>
        <button 
          onClick={toggleDropdownKitsune} 
          className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
        >
          {selectedKitsune ? selectedKitsune.name : "Pilih Paket"}
        </button>
        {dropdownKitsuneOpen && (
          <div className="absolute bg-gray-700 mt-2 rounded-lg shadow-lg p-4 z-10">
            {kitsunes.map((kitsune) => (
              <button
                key={kitsune.name}
                onClick={() => handleKitsuneSelect(kitsune)}
                className="block w-full text-left px-2 py-1 hover:bg-gray-600 rounded"
              >
                {kitsune.name}<br />{kitsune.price}
              </button>
            ))}
          </div>
        )}
        {selectedKitsune && (
          <a
            href={selectedKitsune.link}
            className="mt-4 block px-4 py-2 bg-purple-500 text-white rounded-lg text-center hover:bg-purple-600"
          >
            Pesan Sekarang
          </a>
        )}
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
  <h3 className="text-2xl font-bold mb-4">AKUN BLOX FRUIT RACE AWAKENING V4 [LEVEL MAX] [DATPOL]</h3>
  <img
    src="/api/placeholder/400/200"
    alt="Game Account Preview"
    className="w-full h-48 object-cover rounded-lg mb-4 grayscale hover:grayscale-0 transition duration-300"
  />
  <div className="space-y-4">
    <div>
      <h4 className="text-lg font-semibold mb-2 flex items-center">
        <svg className="w-5 h-5 text-purple-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.75l5.5 3.25-1.5-6.25L22 9.25l-6.5-.5L12 2 8.5 8.75 2 9.25l5.5 5.5-1.5 6.25z"/>
        </svg>
        Spesifikasi Utama
      </h4>
      <ul className="space-y-2">
        <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
          Level MAX 2550
        </li>
        <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
          Race Awakening V4 T1
        </li>
        <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
          Full Melee V1 & V2
        </li>
      </ul>
    </div>

    <h4 className="text-lg font-semibold mb-2 flex items-center">
      <svg className="w-5 h-5 text-purple-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 17.75l5.5 3.25-1.5-6.25L22 9.25l-6.5-.5L12 2 8.5 8.75 2 9.25l5.5 5.5-1.5 6.25z"/>
      </svg>
      Bonus Items
    </h4>
    <ul className="space-y-2">
      <li className="flex items-center">
        <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
        Soul Gitar + Cursed Dual Katana
      </li>
      <li className="flex items-center">
        <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
        Legendary Sword Random
      </li>
      <li className="flex items-center">
        <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
        5-10M Belly
      </li>
    </ul>

    <h4 className="text-lg font-semibold mb-2 flex items-center">Informasi tambahan</h4>
    <p className="mb-4">
      - Bonus 1 Race Awakening V4 T1 (Shark / Human / Sky / Mink / Cyborg / Ghoul)<br />
      - Bonus Mythical Lainnya (Jika Beruntung) <br />
      - Bonus Legendary Accessories di Inventory <br />
      - Bonus Bones & Fragment <br />
      - 5-10M Belly<br />
      - Sudah Full Body Buso Haki + Soru + Geppo<br />
    </p>

    <div className="bg-gray-700/50 p-4 rounded-lg">
      <div className="flex items-center mb-2">
        <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l-1 5h-5l4 4-1 5 5-1 4-4 4 1-5-5h-5z"/>
        </svg>
        <span className="font-semibold">Informasi Penting</span>
      </div>
      <ul className="space-y-1 text-sm">
        <li>• Belum diverifikasi email dan no. HP</li>
        <li>• Kode reset status: SUB2UNCLEKIZARU</li>
        <li>• Akun berumur 13+ tahun</li>
      </ul>
    </div>
  </div>

  <div className="flex flex-col space-y-4 mt-4">
  <button onClick={toggleDropdownAccount} className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
  {selectedAccount ? selectedAccount.name : "Pilih Race akun"}
</button>

{dropdownAccountOpen && (
  <div className="absolute bg-gray-700 mt-2 rounded-lg shadow-lg p-4 z-10">
    {accounts.map((account) => (
      <button
        key={account.name}
        onClick={() => handleAccountSelect(account)}
        className="block w-full text-left px-2 py-1 hover:bg-gray-600 rounded"
      >
        {account.name}<br />{account.price} <br />Stock: {account.stock}
      </button>
    ))}
  </div>
)}

<a
  href={selectedAccount ? selectedAccount.link : "#"}
  className="w-full px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300 font-semibold text-center mt-4"
>
  Pesan Sekarang
</a>

<p className="text-sm text-gray-300 text-center mt-2">
  Harap verifikasi dengan email/HP setelah pembelian
</p>
  </div>
</div>

      </div>
    </div>
  );

  const TestiContent = () => {
    // Load testimonials from local storage or set default testimonials
    const [testimonials, setTestimonials] = useState(() => {
      const savedTestimonials = localStorage.getItem("testimonials");
      return savedTestimonials
        ? JSON.parse(savedTestimonials)
        : [
            {
              name: "",
              role: "Customer",
              comment: "Pelayanan cepat dan profesional, recommended!",
              rating: 5,
            },
            {
              name: "",
              role: "Customer",
              comment: "Harga bersahabat, hasil memuaskan!",
              rating: 5,
            },
            {
              name: "",
              role: "Customer",
              comment: "Harga bersahabat, hasil memuaskan!",
              rating: 5,
            },
            {
              name: "",
              role: "Customer",
              comment: "Harga bersahabat, hasil memuaskan!",
              rating: 5,
            },
            {
              name: "",
              role: "Customer",
              comment: "Harga bersahabat, hasil memuaskan!",
              rating: 5,
            },
            {
              name: "",
              role: "Customer",
              comment: "Harga bersahabat, hasil memuaskan!",
              rating: 5,
            },
            {
              name: "",
              role: "Customer",
              comment: "Harga bersahabat, hasil memuaskan!",
              rating: 5,
            },
            {
              name: "",
              role: "Customer",
              comment: "Harga bersahabat, hasil memuaskan!",
              rating: 5,
            },
          ];
    });

    // State for new testimonial form
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(5);

    // Function to save testimonials to local storage whenever testimonials change
    useEffect(() => {
      localStorage.setItem("testimonials", JSON.stringify(testimonials));
    }, [testimonials]);

    // Function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();

      // Add new testimonial to the list
      const newTestimonial = { name, role: "Customer", comment, rating };
      setTestimonials([newTestimonial, ...testimonials]);

      // Clear form fields
      setName("");
      setComment("");
      setRating(5);
    };

    return (
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Testimoni</h2>
        <p className="text-center">Testimoni ini di ambil dari costumer yang sudah membeli dan Ecommerce Itemku</p>
        {/* Testimonial Form */}


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
      case "about":
        return <AboutContent />;
      case "joki":
        return <JokiContent />;
      case "stock":
        return <StockContent />;
      case "testi":
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
                      ? "bg-purple-600 text-white"
                      : "text-gray-300 hover:bg-gray-700"
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
                  <a
                    href="https://wa.me/085864474973?text=Hallo
"
                  >
                    <span>085864474973</span>
                  </a>
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
                <a
                  href="https://www.instagram.com/fervianoo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-6 h-6 text-white hover:text-purple-400 transition" />
                </a>
                <a
                  href="https://www.facebook.com/share/1ERgrCSEsb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
