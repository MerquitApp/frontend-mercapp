import { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdSenseProps {
  slot: string;
}

const AdSense: React.FC<AdSenseProps> = ({ slot }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('Error cargando AdSense', e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-6725536626999965"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
  );
};

export default AdSense;
