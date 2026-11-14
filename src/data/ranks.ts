import rank1Icon from '../assets/ranks/rank-1.png';
import rank2Icon from '../assets/ranks/rank-2.png';
import rank3Icon from '../assets/ranks/rank-3.png';
import rank4Icon from '../assets/ranks/rank-4.png';
import rank5Icon from '../assets/ranks/rank-5.png';

export interface RankItem {
  id: string;
  tier: string;
  name: string;
  price: number;
  priceFormatted: string;
  originalPriceFormatted?: string;
  bio: string;
  perks: string[];
  itemIcon: string;
  cardSurface: string;
  tierColor: string;
  titleColor: string;
  metaColor: string;
  buyButtonClass: string;
  adminButtonClass: string;
  accentGradient: string;
  accentText: string;
  emblemVariant: 'vip' | 'vip-plus' | 'mvp' | 'mvp-plus' | 'gracia';
}

export const SERVER_IP = 'play.graciasmp.net';
export const ADMIN_WHATSAPP_NUMBER = '6289509860932';
export const ADMIN_WHATSAPP_DISPLAY = '+6289509860932';

/**
 * URL gambar QRIS DANA Bisnis resmi GraciaSMP.
 */
export const DANA_BISNIS_QRIS_IMAGE_URL =
  'https://www.image2url.com/r2/default/images/1794624010972-7218bf7b-7471-433a-8376-fd3eb3bce1c3.jpeg';

export type PaymentChannel = 'DANA' | 'GoPay' | 'OVO';

export function buildWhatsAppUrl(options?: {
  rankName?: string;
  priceFormatted?: string;
  nickname?: string;
  paymentChannel?: PaymentChannel;
}): string {
  const rankName = options?.rankName?.trim();
  const nickname = options?.nickname?.trim();
  const priceFormatted = options?.priceFormatted?.trim();
  const paymentChannel = options?.paymentChannel;

  let message = 'Halo Min GraciaSMP, saya mau tanya tentang pembelian rank server nih.';

  if (rankName) {
    const details: string[] = [];
    if (priceFormatted) {
      details.push(`Harga: ${priceFormatted}`);
    }
    if (paymentChannel) {
      details.push(`Pembayaran: QRIS DANA Bisnis (${paymentChannel})`);
    }
    if (nickname) {
      details.push(`Gamertag MC: ${nickname}`);
    }

    if (details.length > 0) {
      message = `Min, mau beli rank ${rankName} nih, tolong proses ya.\n\nDetail Pesanan:\n- ${details.join('\n- ')}`;
    } else {
      message = `Min, mau beli rank ${rankName} nih, tolong proses ya.`;
    }
  }

  return `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const RANKS: RankItem[] = [
  {
    id: 'vip',
    tier: '01',
    name: 'VIP',
    price: 10000,
    priceFormatted: 'Rp 10.000',
    bio: 'Rank awal paling pas untuk petualang baru yang ingin tampil beda dengan fitur kenyamanan ekstra di GraciaSMP.',
    perks: [
      '2x Survival XP Multiplier',
      'VIP Kit Access',
      '2x "/Backpack" Rows',
      '3x Homes',
      '2x Player Warps',
      '2 Concurrent Auctions',
      '12 Max Lottery Entries',
      '5 Coins Daily Reward',
      '/craft Command',
      '/recipe Command',
    ],
    itemIcon: rank1Icon,
    cardSurface:
      'bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 group-hover:brightness-105 group-hover:shadow-[0_24px_56px_-14px_rgba(250,204,21,0.45)]',
    tierColor: 'text-amber-950/80',
    titleColor: 'text-slate-950',
    metaColor: 'text-amber-950/80',
    buyButtonClass: 'bg-slate-950 hover:bg-slate-900 text-yellow-300 shadow-md',
    adminButtonClass:
      'bg-white/85 hover:bg-white border border-slate-950/20 text-slate-950',
    accentGradient: 'from-yellow-400 to-amber-500 text-slate-950',
    accentText: 'text-yellow-300',
    emblemVariant: 'vip',
  },
  {
    id: 'pro',
    tier: '02',
    name: 'PRO',
    price: 20000,
    priceFormatted: 'Rp 20.000',
    bio: 'Upgrade survival lebih leluasa dengan kapasitas penyimpanan portabel dan kuota klaim lahan lebih luas.',
    perks: [
      '2x Survival XP Multiplier',
      'Pro Kit Access (+ Kits from earlier ranks)',
      '3x "/Backpack" Rows',
      '4x Homes',
      '3x Player Warps',
      '3 Concurrent Auctions',
      '15 Max Lottery Entries',
      '8 Coins Daily Reward',
      '/craft Command',
      '/recipe Command',
      '/disposal Command',
      '/near Command',
    ],
    itemIcon: rank2Icon,
    cardSurface:
      'bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 group-hover:brightness-105 group-hover:shadow-[0_24px_56px_-14px_rgba(16,185,129,0.45)]',
    tierColor: 'text-emerald-100',
    titleColor: 'text-white',
    metaColor: 'text-emerald-50/90',
    buyButtonClass: 'bg-white hover:bg-emerald-50 text-emerald-700 shadow-md',
    adminButtonClass:
      'bg-emerald-950/35 hover:bg-emerald-950/50 border border-white/80 text-white',
    accentGradient: 'from-emerald-400 to-green-600 text-white',
    accentText: 'text-emerald-300',
    emblemVariant: 'vip-plus',
  },
  {
    id: 'mvp',
    tier: '03',
    name: 'MVP',
    price: 30000,
    priceFormatted: 'Rp 30.000',
    bio: 'Pilihan favorit builder dan trader aktif dengan akses terbang di lobby serta slot lelang lebih besar.',
    perks: [
      '2x Survival XP Multiplier',
      'MVP Kit Access (+ Kits from earlier ranks)',
      '4x "/Backpack" Rows',
      '5x Homes',
      '4x Player Warps',
      '4 Concurrent Auctions',
      '18 Max Lottery Entries',
      '10 Coins Daily Reward',
      '/craft Command',
      '/recipe Command',
      '/disposal Command',
      '/near Command',
      '/hat Command',
      '/feed Command (10 Min Cooldown)',
    ],
    itemIcon: rank3Icon,
    cardSurface:
      'bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 group-hover:brightness-105 group-hover:shadow-[0_24px_56px_-14px_rgba(59,130,246,0.45)]',
    tierColor: 'text-sky-100',
    titleColor: 'text-white',
    metaColor: 'text-sky-50/90',
    buyButtonClass: 'bg-white hover:bg-sky-50 text-blue-700 shadow-md',
    adminButtonClass:
      'bg-blue-950/35 hover:bg-blue-950/50 border border-white/80 text-white',
    accentGradient: 'from-sky-400 to-blue-600 text-white',
    accentText: 'text-sky-300',
    emblemVariant: 'mvp',
  },
  {
    id: 'elite',
    tier: '04',
    name: 'ELITE',
    price: 50000,
    priceFormatted: 'Rp 50.000',
    originalPriceFormatted: 'Rp 55.000',
    bio: 'Dirancang untuk pemain kompetitif yang menginginkan efisiensi penuh, prioritas antrean, dan kosmetik premium.',
    perks: [
      '2x Survival XP Multiplier',
      'Elite Kit Access (+ Kits from earlier ranks)',
      '5x "/Backpack" Rows',
      '6x Homes',
      '5x Player Warps',
      '5 Concurrent Auctions',
      '20 Max Lottery Entries',
      '12 Coins Daily Reward',
      '/craft Command',
      '/recipe Command',
      '/disposal Command',
      '/near Command',
      '/hat Command',
      '/feed Command (10 Min Cooldown)',
      '/invsee Command',
      '/enderchest Command',
    ],
    itemIcon: rank4Icon,
    cardSurface:
      'bg-gradient-to-r from-red-500 via-rose-500 to-red-600 group-hover:brightness-105 group-hover:shadow-[0_24px_56px_-14px_rgba(239,68,68,0.45)]',
    tierColor: 'text-red-100',
    titleColor: 'text-white',
    metaColor: 'text-red-50/90',
    buyButtonClass: 'bg-white hover:bg-red-50 text-red-700 shadow-md',
    adminButtonClass:
      'bg-red-950/35 hover:bg-red-950/50 border border-white/80 text-white',
    accentGradient: 'from-red-500 to-rose-600 text-white',
    accentText: 'text-red-300',
    emblemVariant: 'mvp-plus',
  },
  {
    id: 'gracian',
    tier: '05',
    name: 'GRACIAN',
    price: 60000,
    priceFormatted: 'Rp 60.000',
    originalPriceFormatted: 'Rp 70.000',
    bio: 'Kasta tertinggi di GraciaSMP dengan seluruh keistimewaan sultan, kit legendaris, dan penghormatan spesial.',
    perks: [
      '2x Survival XP Multiplier',
      'Immortal Kit Access (+ Kits from earlier ranks)',
      '6x "/Backpack" Rows',
      '7x Homes',
      '6x Player Warps',
      '6 Concurrent Auctions',
      '25 Max Lottery Entries',
      '15 Coins Daily Reward',
      '/craft Command',
      '/recipe Command',
      '/disposal Command',
      '/near Command',
      '/hat Command',
      '/feed Command (10 Min Cooldown)',
      '/invsee Command',
      '/enderchest Command',
      '/ptime Command',
      '/pweather Command',
      '/heal Command (10 Min Cooldown)',
    ],
    itemIcon: rank5Icon,
    cardSurface:
      'bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 group-hover:brightness-105 group-hover:shadow-[0_24px_56px_-14px_rgba(168,85,247,0.5)]',
    tierColor: 'text-purple-100',
    titleColor: 'text-white',
    metaColor: 'text-purple-50/90',
    buyButtonClass: 'bg-white hover:bg-purple-50 text-purple-700 shadow-md',
    adminButtonClass:
      'bg-purple-950/35 hover:bg-purple-950/50 border border-white/80 text-white',
    accentGradient: 'from-purple-500 to-violet-600 text-white',
    accentText: 'text-purple-300',
    emblemVariant: 'gracia',
  },
];
