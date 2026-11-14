import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import {
  PaymentChannel,
  RankItem,
  buildWhatsAppUrl,
} from '../data/ranks';
import {
  DanaBisnisQrisCard,
  DanaLogo,
  GoPayLogo,
  OvoLogo,
  WhatsAppLogo,
} from './BrandLogos';

interface PaymentModalProps {
  rank: RankItem | null;
  onClose: () => void;
}

export function PaymentModal({ rank, onClose }: PaymentModalProps) {
  const [nickname, setNickname] = useState('');
  const [selectedChannel, setSelectedChannel] = useState<PaymentChannel>('DANA');
  const [gamertagError, setGamertagError] = useState(false);
  const gamertagInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setGamertagError(false);
  }, [rank]);

  useEffect(() => {
    if (!rank) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [rank, onClose]);

  if (!rank) return null;

  const confirmWaUrl = buildWhatsAppUrl({
    rankName: rank.name,
    priceFormatted: rank.priceFormatted,
    nickname,
    paymentChannel: selectedChannel,
  });

  const channels: { id: PaymentChannel; label: string; logo: React.ReactNode }[] = [
    { id: 'DANA', label: 'Bayar pakai DANA', logo: <DanaLogo /> },
    { id: 'GoPay', label: 'Bayar pakai GoPay', logo: <GoPayLogo /> },
    { id: 'OVO', label: 'Bayar pakai OVO', logo: <OvoLogo /> },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#020816]/72 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="payment-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="glass-panel-strong w-full max-w-2xl rounded-3xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-sky-200/12 bg-[#0a1d40]/75">
          <div className="min-w-0">
            <p className="font-sans font-bold text-[11px] text-sky-300 tracking-wide">
              Checkout Pembayaran Rank
            </p>
            <h2
              id="payment-modal-title"
              className="text-xl sm:text-2xl font-bold text-white truncate"
            >
              Rank {rank.name} ·{' '}
              <span className="font-mono tabular-nums text-sky-300">
                {rank.priceFormatted}
              </span>
              {rank.originalPriceFormatted && (
                <span className="ml-2 font-mono text-sm tabular-nums text-sky-200/55 line-through">
                  {rank.originalPriceFormatted}
                </span>
              )}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup menu pembayaran"
            className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-sky-200/20 flex items-center justify-center text-white transition-colors cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-sky-400"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Step 1: Nickname & E-Wallet Logos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="mc-nickname"
                  className="block font-sans font-bold text-xs text-white mb-1.5"
                >
                  Gamertag Minecraftmu <span className="text-rose-400">*</span>{' '}
                  <span className="text-sky-300/80">(Wajib)</span>
                </label>
                <input
                  ref={gamertagInputRef}
                  id="mc-nickname"
                  type="text"
                  required
                  aria-required="true"
                  aria-invalid={gamertagError}
                  value={nickname}
                  onChange={(e) => {
                    setNickname(e.target.value);
                    if (e.target.value.trim()) setGamertagError(false);
                  }}
                  placeholder="Contoh: SteveGracia"
                  className={`w-full px-3.5 py-2.5 min-h-[44px] rounded-xl bg-[#051128]/90 border focus:outline-none font-sans font-bold text-sm text-white placeholder:text-sky-200/40 ${
                    gamertagError
                      ? 'border-rose-400 focus:border-rose-400'
                      : 'border-sky-200/25 focus:border-sky-400'
                  }`}
                />
                {gamertagError && (
                  <p
                    role="alert"
                    className="mt-1.5 font-sans font-bold text-[11px] text-rose-300"
                  >
                    Harap isi Gamertag Minecraftmu terlebih dahulu sebelum konfirmasi.
                  </p>
                )}
              </div>

              <div>
                <p className="font-sans font-bold text-xs text-white mb-2">
                  Payment Gateway
                </p>
                <div className="flex flex-wrap gap-2">
                  {channels.map((ch) => {
                    const active = selectedChannel === ch.id;
                    return (
                      <button
                        key={ch.id}
                        type="button"
                        onClick={() => setSelectedChannel(ch.id)}
                        aria-label={ch.label}
                        className={`p-1.5 rounded-xl border transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-400 ${
                          active
                            ? 'bg-sky-500/25 border-sky-400 shadow-sm scale-[1.02]'
                            : 'bg-white/5 border-sky-200/15 hover:border-sky-300/40 opacity-85 hover:opacity-100'
                        }`}
                      >
                        {ch.logo}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-1.5 font-sans font-bold text-xs text-sky-100/85 leading-relaxed">
                <p>1. Buka aplikasi OVO, GoPay, atau DANA.</p>
                <p>2. Scan 1 QRIS DANA Bisnis di samping.</p>
                <p>3. Transfer sesuai nominal lalu klik tombol konfirmasi WhatsApp di bawah.</p>
              </div>
            </div>

            {/* Right: 1 QRIS DANA Bisnis */}
            <div className="flex flex-col items-center">
              <DanaBisnisQrisCard
                rankName={rank.name}
                priceFormatted={rank.priceFormatted}
              />
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="px-6 py-4 border-t border-sky-200/12 bg-[#081734]/85 flex justify-end">
          <a
            href={confirmWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (!nickname.trim()) {
                e.preventDefault();
                setGamertagError(true);
                gamertagInputRef.current?.focus();
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3 min-h-[44px] rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-bold text-sm shadow-sm transition-all active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 whitespace-nowrap"
          >
            <WhatsAppLogo className="w-5 h-5 shrink-0" />
            <span>Konfirmasi Pembayaran via WA</span>
          </a>
        </div>
      </div>
    </div>
  );
}
