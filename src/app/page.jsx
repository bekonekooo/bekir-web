
"use client";

import "./globals.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


// Icons
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose, IoCall, IoMail, IoLocationSharp } from "react-icons/io5";
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaTruck, FaGlobe, FaHandshake, FaTools } from "react-icons/fa";

export default function Page() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Anasayfa", href: "#home" },
    { label: "Ürünlerimiz", href: "#products" },
    { label: "Hakkımızda", href: "#about" },
    { label: "İletişim", href: "#contact" },
  ];

  const services = [
    {
      icon: <FaGlobe className="text-primary-500 text-3xl" />,
      title: "İthalat",
      desc: "Dünya genelindeki üreticilerden yüksek teknoloji ürünlerinin tedarik ve ithalat süreçlerini yönetiyoruz.",
    },
    {
      icon: <FaTruck className="text-primary-500 text-3xl" />,
      title: "Dağıtım",
      desc: "Türkiye genelinde güvenilir ve hızlı dağıtım ağımızla ürünleri bayilere ve iş ortaklarına ulaştırıyoruz.",
    },
    {
      icon: <FaHandshake className="text-primary-500 text-3xl" />,
      title: "Partnerlik",
      desc: "Global markalarla sürdürülebilir partnerlikler kuruyor, pazara giriş stratejileri geliştiriyoruz.",
    },
    {
      icon: <FaTools className="text-primary-500 text-3xl" />,
      title: "Danışmanlık",
      desc: "Regülasyon, sertifikasyon ve lojistik planlama konularında uçtan uca danışmanlık veriyoruz.",
    },
  ];

  const products = [
    {
      title: "Drone Teknolojileri",
      desc: "Endüstriyel denetim, haritalama ve güvenlik odaklı profesyonel drone çözümleri.",
      img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1480&auto=format&fit=crop",
    },
    {
      title: "Akıllı Ev Sistemleri",
      desc: "IoT tabanlı kontrol panelleri, sensörler ve otomasyon altyapıları.",
      img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1480&auto=format&fit=crop",
    },
    {
      title: "Endüstriyel Robotik",
      desc: "Üretim hatları için robotik kollar, AGV/AMR robotları ve güvenlik sistemleri.",
      img: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1480&auto=format&fit=crop",
    },
    {
      title: "Yapay Zeka Donanımları",
      desc: "Kenar bilişim (edge AI) cihazları, GPU hızlandırıcılar ve akıllı sensörler.",
      img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1480&auto=format&fit=crop",
    },
  ];

  return (
    <main>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="container flex items-center justify-between py-4">
          <Link href="#home" className="font-extrabold text-xl tracking-tight">
            <span className="text-primary-600">TechCore</span> Imports
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-primary-600">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-sm">Teklif Al</a>
          </nav>

          {/* Mobile button */}
          <button className="md:hidden p-2" onClick={() => setOpen(true)} aria-label="Menüyü aç">
            <HiMenuAlt3 className="text-2xl" />
          </button>
        </div>

        {/* Mobile sheet */}
        {open && (
          <div className="md:hidden fixed inset-0 z-50 bg-white">
            <div className="flex items-center justify-between px-4 py-4 border-b">
              <span className="font-extrabold text-lg"><span className="text-primary-600">TechCore</span> Imports</span>
              <button onClick={() => setOpen(false)} aria-label="Kapat">
                <IoClose className="text-3xl" />
              </button>
            </div>
            <div className="p-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-lg font-medium">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary text-center">Teklif Al</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative min-h-[88vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2000&auto=format&fit=crop"
            alt="Futuristic server room"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[rgba(11,18,32,0.76)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
        </div>

        <div className="container relative py-22 pl-10 md:py-30">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Geleceğin Teknolojileri <span className="text-primary-300">Burada</span>
            </h1>
            <p className="mt-4 text-slate-200 text-lg md:text-xl">
              Yüksek teknoloji ürünlerinin ithalatı, dağıtımı ve danışmanlığında güvenilir çözüm ortağınız.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">Teklif Al</a>
              <a href="#products" className="btn-outline">Ürünlerimizi Keşfet</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
     <section id="services" className="py-24 bg-slate-50">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold">Neler Yapıyoruz?</h2>
      <p className="mt-2 text-slate-600">
        İthalat, dağıtım ve danışmanlıkta uçtan uca hizmet.
      </p>
    </div>

    <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((s, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl p-6 card-hover border border-slate-200"
        >
          <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
            {s.icon}
          </div>
          <h3 className="font-semibold text-lg">{s.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Featured Products */}
    <section id="products" className="py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold">Ürünlerimiz</h2>
      <p className="mt-2 text-slate-600">
        Yüksek teknoloji kategorilerde çözümler.
      </p>
    </div>

    <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((p, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl overflow-hidden border border-slate-200 card-hover"
        >
          <div className="relative h-44">
            <Image
              src={p.img}
              alt={p.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-5">
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* About */}
     <section id="about" className="py-24 bg-slate-50">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
    <div>
      <h2 className="text-3xl md:text-4xl font-bold">Hakkımızda</h2>
      <p className="mt-4 text-slate-700 leading-relaxed">
        TechCore Imports, dünya genelindeki yenilikçi üreticilerle Türkiye pazarı arasında
        köprü kuran bir teknoloji ithalat ve dağıtım şirketidir. Misyonumuz; güvenilir,
        sürdürülebilir ve ölçeklenebilir çözümleri, güçlü lojistik ve partnerlik ağımızla
        işletmelere ulaştırmak.
      </p>
      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary-500" /> Global tedarik ağı
        </li>
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary-500" /> Hızlı ve güvenli dağıtım
        </li>
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary-500" /> Regülasyon & sertifikasyon desteği
        </li>
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary-500" /> Uzun vadeli partnerlikler
        </li>
      </ul>
    </div>
    <div className="relative h-80 rounded-2xl overflow-hidden border border-slate-200">
      <Image
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
        alt="Modern ofis"
        fill
        className="object-cover"
      />
    </div>
  </div>
</section>

      {/* Contact */}
    <section id="contact" className="py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
    {/* Form (UI only) */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold">Bize Ulaşın</h2>
      <p className="mt-2 text-slate-600">
        İhtiyaçlarınız için teklif talep edin. Form sadece görseldir.
      </p>

      <form className="mt-6 bg-white border border-slate-200 rounded-2xl p-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-slate-700">Ad Soyad</label>
            <input
              type="text"
              placeholder="Adınız"
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">E-posta</label>
            <input
              type="email"
              placeholder="ornek@mail.com"
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="text-sm font-medium text-slate-700">Mesajınız</label>
          <textarea
            rows="5"
            placeholder="Kısaca talebinizi yazın..."
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
          ></textarea>
        </div>
        <button type="button" className="btn-primary mt-5 w-full sm:w-auto">
          Gönder (Demo)
        </button>
      </form>
    </div>

    {/* Company details & map placeholder */}
    <div>
      <div className="bg-white border border-slate-200 rounded-2xl p-6">
        <h3 className="font-semibold text-lg">İletişim Bilgileri</h3>
        <ul className="mt-4 space-y-3 text-slate-700">
          <li className="flex items-center gap-3">
            <IoLocationSharp className="text-primary-500 text-xl" /> Teknopark
            Bulvarı No:42, İstanbul
          </li>
          <li className="flex items-center gap-3">
            <IoCall className="text-primary-500 text-xl" /> +90 (212) 000 00 00
          </li>
          <li className="flex items-center gap-3">
            <IoMail className="text-primary-500 text-xl" /> info@techcoreimports.com
          </li>
        </ul>
      </div>

      <div className="mt-6 relative h-64 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
        {/* Simple map placeholder */}
        <Image
          src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2000&auto=format&fit=crop"
          alt="Harita placeholder"
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="px-4 py-2 rounded-lg bg-white shadow text-sm text-slate-700 border">
            Harita Alanı (Görsel)
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-[#0b1220] text-slate-300 border-t border-slate-800">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
    <div>
      <div className="font-extrabold text-xl">
        TechCore <span className="text-primary-400">Imports</span>
      </div>
      <p className="mt-3 text-sm text-slate-400">
        Yüksek teknoloji ithalatı ve dağıtımında güvenilir çözüm ortağınız.
      </p>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h4 className="font-semibold text-slate-200">Hızlı Linkler</h4>
        <ul className="mt-3 space-y-2 text-sm">
          <li><a href="#home" className="hover:text-primary-400">Anasayfa</a></li>
          <li><a href="#products" className="hover:text-primary-400">Ürünlerimiz</a></li>
          <li><a href="#about" className="hover:text-primary-400">Hakkımızda</a></li>
          <li><a href="#contact" className="hover:text-primary-400">İletişim</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-slate-200">Sosyal</h4>
        <div className="mt-3 flex items-center gap-3 text-lg">
          <a href="#" aria-label="LinkedIn" className="hover:text-primary-400"><FaLinkedin /></a>
          <a href="#" aria-label="Instagram" className="hover:text-primary-400"><FaInstagram /></a>
          <a href="#" aria-label="Twitter" className="hover:text-primary-400"><FaTwitter /></a>
          <a href="#" aria-label="Facebook" className="hover:text-primary-400"><FaFacebook /></a>
        </div>
      </div>
    </div>
    <div className="md:text-right">
      <p className="text-sm text-slate-400">
        © {new Date().getFullYear()} TechCore Imports. Tüm hakları saklıdır.
      </p>
    </div>
  </div>
</footer>

    </main>
  );
}