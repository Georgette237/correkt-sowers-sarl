export type LinkType = 'wa' | 'mail' | 'fb' | 'telCommercial' | 'telTechnique';

export const siteConfig = {
  companyName: 'Correkt Sowers Sarl',
  whatsapp: '2376XXXXXXXX',
  whatsappDisplay: '+237 6XX XX XX XX',
  telCommercial: '+237 6XX XX XX XX',
  telTechnique: '+237 6XX XX XX XX',
  email: 'contact@correktsowers.com',
  facebook: 'https://www.facebook.com/profile.php?id=61591505319191',
  addressFr: 'Yaoundé, Centre, Cameroun',
  addressEn: 'Yaoundé, Centre Region, Cameroon',
  gps: {
    lat: 3.7515,
    lng: 11.4835,
    dms: '3°45\'5,40" N · 11°29\'0,6" E',
  },
  isWhatsAppValid(): boolean {
    return /^\d{9,15}$/.test(String(this.whatsapp).replace(/\D/g, ''));
  },
  getLink(type: LinkType): string {
    const digitsOnly = (s: string) => String(s).replace(/[^\d+]/g, '');
    switch (type) {
      case 'wa':
        return `https://wa.me/${String(this.whatsapp).replace(/\D/g, '')}`;
      case 'mail':
        return `mailto:${this.email}`;
      case 'fb':
        return this.facebook;
      case 'telCommercial':
        return `tel:${digitsOnly(this.telCommercial)}`;
      case 'telTechnique':
        return `tel:${digitsOnly(this.telTechnique)}`;
      default:
        return '#';
    }
  },
};
