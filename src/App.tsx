import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import {
  ADMIN_WHATSAPP_DISPLAY,
  RANKS,
  RankItem,
  buildWhatsAppUrl,
} from './data/ranks';
import { WhatsAppLogo } from './components/BrandLogos';
import { RankCard } from './components/RankCard';
import { PaymentModal } from './components/PaymentModal';
import graciaLogo from './assets/gracia-logo.jpeg';

export default function App() {
  const [selectedRank, setSelectedRank] = useState<RankItem | null>(null);

  const generalAdminWaUrl = buildWhatsAppUrl();

  return (
    <div className="min-h-screen flex flex-col text-[#F0F6FF]">
      {/* Sticky Top Navigation Bar (Strict 3-Zone Contract) */}
      <header className="sticky top-0 z-40 bg-[#051026]/72 backdrop-blur-xl border-b border-sky-200/12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <a
            href="#hero"
            className="text-lg sm:text-xl font-bold tracking-wide text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-sky-400 rounded"
          >
            ⚔️ GraciaSMP ⚔️
          </a>

          {/* Zone 2: Concise Single-Line Nav Links */}
          <nav
            aria-label="Navigasi Utama"
            className="hidden md:flex items-center gap-6 text-sm font-bold text-sky-100/80"
          >
            <a
              href="#hero"
              className="hover:text-sky-300 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Beranda
            </a>
            <a
              href="#ranks"
              className="hover:text-sky-300 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Daftar Rank
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="shrink-0">
            <a
              href={generalAdminWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 min-h-[40px] rounded-xl bg-white/10 hover:bg-white/18 border border-sky-200/20 hover:border-emerald-400/60 text-white font-sans font-bold text-xs shadow-sm transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-emerald-400"
            >
              <WhatsAppLogo className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">{ADMIN_WHATSAPP_DISPLAY}</span>
              <span className="sm:hidden">Chat Admin</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="pt-10 pb-10 sm:pt-14 sm:pb-14 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="glass-panel rounded-3xl p-7 sm:p-10 lg:p-12 text-center flex flex-col items-center">
              <p className="font-sans font-bold text-xs tracking-wide text-sky-300">
                Official GraciaSMP Rank Store · S1
              </p>

              <img
                src={graciaLogo}
                alt="Logo GraciaSMP"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border border-sky-200/30 shadow-xl my-4"
              />

              <h1 className="text-5xl sm:text-6xl lg:text-[68px] font-bold tracking-wide leading-[1.02] text-balance bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(217,70,239,0.28)]">
                GraciaSMP
              </h1>

              {/* Small Bold Bio Text */}
              <p className="mt-5 font-sans font-bold text-xs sm:text-[13px] text-sky-100/85 leading-relaxed max-w-xl">
                Tingkatkan pengalaman bermain Minecraft kamu di dunia survival GraciaSMP.
                Dapatkan akses eksklusif, hak istimewa komunitas, dan dukungan aktivasi cepat
                langsung oleh admin kami.
              </p>

              {/* Primary CTA */}
              <div className="mt-7 flex items-center justify-center">
                <a
                  href="#ranks"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-sm tracking-wide shadow-md transition-all duration-150 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 whitespace-nowrap"
                >
                  <span>Rank Server GraciaSMP</span>
                  <ArrowDown className="w-4 h-4 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 5 Vertical Rank Cards Section */}
        <section id="ranks" className="pt-8 pb-16 sm:pt-12 sm:pb-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 sm:mb-10">
              <p className="font-sans font-bold text-xs text-sky-300 tracking-wide">
                Katalog Rank Server
              </p>
              <h2 className="mt-1 text-3xl sm:text-4xl font-bold text-white tracking-wide text-balance">
                Pilih Rank Terbaikmu
              </h2>
              <p className="mt-2 font-sans font-bold text-xs sm:text-[13px] text-sky-100/80 max-w-xl leading-relaxed">
                Yuk beli Rank GraciaSMP!!
                <br />
                Klik tombol Beli Sekarang untuk membeli rank server.
              </p>
            </div>

            {/* Vertical Stack (Berjejer ke Bawah) */}
            <div className="flex flex-col gap-5">
              {RANKS.map((rank, index) => (
                <RankCard
                  key={rank.id}
                  rank={rank}
                  index={index}
                  onBuy={(chosen) => setSelectedRank(chosen)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Quiet Footer */}
      <footer className="border-t border-sky-200/12 bg-[#040d20]/70 backdrop-blur-md py-6 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="font-bold text-sm text-white tracking-wide">
            ⚔️ GraciaSMP ⚔️ · Official Rank Store
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 font-sans font-bold text-xs text-sky-200/75">
            <a
              href={generalAdminWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <WhatsAppLogo className="w-3.5 h-3.5" />
              <span className="font-mono">{ADMIN_WHATSAPP_DISPLAY}</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Payment Modal (Triggered on "Beli Sekarang") */}
      <PaymentModal rank={selectedRank} onClose={() => setSelectedRank(null)} />
    </div>
  );
}
