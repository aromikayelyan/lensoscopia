import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400' });

export default function Logo() {
  return (
    <span className={greatVibes.className} style={{ fontSize: '55px', color: '#C11C84' }}>LensoScopia</span>
  );
}