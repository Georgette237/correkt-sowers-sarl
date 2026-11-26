import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { CookieProvider } from './context/CookieContext';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { Lightbox } from './components/Lightbox';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { AlevinsPage } from './pages/AlevinsPage';
import { PoissonsPage } from './pages/PoissonsPage';
import { ElevagePage } from './pages/ElevagePage';
import { ActualitesPage } from './pages/ActualitesPage';
import { ContactPage } from './pages/ContactPage';

const AppShell: React.FC = () => {
  const { currentPage } = useNavigation();
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  const handleZoomImage = (src: string, alt: string) => {
    setLightboxImage({ src, alt });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1">
        {currentPage === 'accueil' && <HomePage onZoomImage={handleZoomImage} />}
        {currentPage === 'alevins' && <AlevinsPage onZoomImage={handleZoomImage} />}
        {currentPage === 'poissons' && <PoissonsPage onZoomImage={handleZoomImage} />}
        {currentPage === 'elevage' && <ElevagePage onZoomImage={handleZoomImage} />}
        {currentPage === 'actualites' && <ActualitesPage onZoomImage={handleZoomImage} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
      <Footer />
      <CookieConsent />
      <ScrollToTop />
      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </div>
  );
};

export default function App() {
  return (
    <CookieProvider>
      <LanguageProvider>
        <NavigationProvider>
          <AppShell />
        </NavigationProvider>
      </LanguageProvider>
    </CookieProvider>
  );
}
