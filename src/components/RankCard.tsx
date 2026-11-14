import React, { useState } from 'react';
import { ChevronDown, ShoppingBag } from 'lucide-react';
import { RankItem, buildWhatsAppUrl } from '../data/ranks';
import { WhatsAppLogo } from './BrandLogos';
import graciaLogo from '../assets/gracia-logo.jpeg';

interface RankCardProps {
  rank: RankItem;
  index?: number;
  onBuy: (rank: RankItem) => void;
}

export function RankCard({ rank, index = 0, onBuy }: RankCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const waHref = buildWhatsAppUrl({ rankName: rank.name });
  const isLightCard = rank.id === 'vip';

  return (
    <div
      className="motion-safe:animate-float-subtle will-change-transform"
      style={{ animationDelay: `${index * 0.65}s` }}
    >
      <div className="relative group">
        <article
          style={{
            WebkitMaskImage:
              'radial-gradient(circle 8px at 22px 22px, transparent 8px, black 8.5px)',
            maskImage:
              'radial-gradient(circle 8px at 22px 22px, transparent 8px, black 8.5px)',
          }}
          className={`relative rounded-2xl border-2 border-white/90 group-hover:border-white shadow-[0_16px_38px_-12px_rgba(2,8,23,0.55)] pl-10 pr-14 py-5 sm:pl-12 sm:pr-16 sm:py-6 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1.5 ${rank.cardSurface}`}
        >
          {/* Top-right chevron toggle (arrow without vertical stem) */}
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-expanded={isExpanded}
            aria-controls={`rank-features-${rank.id}`}
            aria-label={
              isExpanded
                ? `Tutup fitur rank ${rank.name}`
                : `Lihat fitur rank ${rank.name}`
            }
            title={`Lihat Fitur ${rank.name}`}
            className={`absolute top-3.5 right-3.5 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 ${
              isLightCard
                ? 'text-slate-950/80 hover:text-slate-950 hover:bg-slate-950/10 focus-visible:outline-slate-950'
                : 'text-white/85 hover:text-white hover:bg-white/15 focus-visible:outline-white'
            }`}
          >
            <ChevronDown
              className={`w-5 h-5 stroke-[2.5] transition-transform duration-200 ${
                isExpanded ? 'rotate-180' : 'rotate-0'
              }`}
              aria-hidden="true"
            />
          </button>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            {/* Left: Emblem & Rank Title */}
            <div className="flex items-center gap-4 min-w-0">
              <img
                src={graciaLogo}
                alt="Logo GraciaSMP"
                className="w-14 h-14 rounded-xl object-cover border-2 border-white/85 shadow-md shrink-0"
              />
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className={`font-mono text-xs font-bold tabular-nums ${rank.tierColor}`}>
                    {rank.tier}
                  </span>
                  <h3 className={`text-2xl sm:text-3xl font-bold tracking-wide leading-none ${rank.titleColor}`}>
                    {rank.name}
                  </h3>
                  <img
                    src={rank.itemIcon}
                    alt={`Ikon item Minecraft ${rank.name}`}
                    className="w-7 h-7 sm:w-8 sm:h-8 object-contain shrink-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] [image-rendering:pixelated]"
                  />
                </div>
                <div className="mt-2 flex flex-wrap items-baseline gap-2.5">
                  <p className={`font-mono text-xl sm:text-2xl font-bold tabular-nums tracking-tight ${rank.titleColor}`}>
                    {rank.priceFormatted}
                  </p>
                  {rank.originalPriceFormatted && (
                    <span
                      className={`font-mono text-sm sm:text-base font-bold tabular-nums line-through decoration-2 opacity-80 ${rank.metaColor}`}
                      aria-label={`Harga normal ${rank.originalPriceFormatted}`}
                    >
                      {rank.originalPriceFormatted}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Purchase & Admin Buttons */}
            <div className="flex flex-col xs:flex-row sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => onBuy(rank)}
                className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] rounded-xl font-bold text-sm tracking-wide transition-all duration-150 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer whitespace-nowrap ${rank.buyButtonClass}`}
              >
                <ShoppingBag className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Beli Sekarang</span>
              </button>

              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl font-sans font-bold text-xs transition-all duration-150 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 whitespace-nowrap ${rank.adminButtonClass}`}
              >
                <WhatsAppLogo className="w-4 h-4 shrink-0" />
                <span>Contact Admin</span>
              </a>
            </div>
          </div>

          {/* Expandable Clean Feature List */}
          {isExpanded && (
            <div
              id={`rank-features-${rank.id}`}
              className={`mt-5 rounded-xl border px-4 py-3.5 sm:px-5 sm:py-4 ${
                isLightCard
                  ? 'bg-white/40 border-amber-950/15 text-slate-950'
                  : 'bg-black/20 border-white/20 text-white'
              }`}
            >
              <p className="font-sans font-bold text-sm tracking-wide mb-2">
                Fitur {rank.name} :
              </p>
              <ol className="space-y-1 font-sans font-semibold text-xs sm:text-[13px] leading-relaxed">
                {rank.perks.map((perk, perkIdx) => (
                  <li key={perk} className="flex items-start gap-2">
                    <span className="font-mono font-bold tabular-nums shrink-0 opacity-85">
                      {perkIdx + 1}.
                    </span>
                    <span>{perk}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </article>

        {/* White outline ring framing the top-left punch hole */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-[13.5px] left-[13.5px] w-[17px] h-[17px] rounded-full border-[1.5px] border-white/85 shadow-[inset_0_1px_2px_rgba(0,0,0,0.45)] transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1.5"
        />
      </div>
    </div>
  );
}
