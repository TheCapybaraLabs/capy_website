"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Dict } from "@/i18n";

type DataConsentModalProps = {
  t: Dict["consent"];
};

export function DataConsentModal({ t }: DataConsentModalProps) {
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window !== "undefined") {
      return !localStorage.getItem("data-consent-accepted");
    }
    return false;
  });

  const handleAccept = () => {
    localStorage.setItem("data-consent-accepted", "true");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className="fixed top-auto bottom-4 left-4 w-auto max-w-sm translate-x-0 translate-y-0 border-primary bg-primary shadow-lg"
        showCloseButton={false}
      >
        <DialogHeader>
          <DialogTitle className="text-primary-foreground">{t.title}</DialogTitle>
          <DialogDescription className="text-primary-foreground/90">{t.body}</DialogDescription>
        </DialogHeader>
        <div className="flex justify-end">
          <Button
            onClick={handleAccept}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            {t.accept}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
