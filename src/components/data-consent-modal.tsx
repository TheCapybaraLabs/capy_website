'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export function DataConsentModal() {
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      return !localStorage.getItem('data-consent-accepted');
    }
    return false;
  });

  const handleAccept = () => {
    localStorage.setItem('data-consent-accepted', 'true');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className="fixed bottom-4 left-4 top-auto w-auto max-w-sm translate-x-0 translate-y-0 bg-primary shadow-lg border-primary"
        showCloseButton={false}
      >
        <DialogHeader>
          <DialogTitle className="text-primary-foreground">Política de Privacidade</DialogTitle>
          <DialogDescription className="text-primary-foreground/90">
            Utilizamos cookies e ferramentas de análise para melhorar sua experiência no site. Ao continuar navegando,
            você concorda com nossa coleta de dados para fins de analytics e performance.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end">
          <Button onClick={handleAccept} className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            Aceitar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
