'use client';

import * as React from 'react';
import { Moon, Monitor, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = () => {
    if (theme === 'system') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('system');
    }
  };

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon">
        <Monitor className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button variant="ghost" size="icon" onClick={handleThemeToggle} aria-label="Toggle theme">
      {theme === 'light' && <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />}
      {theme === 'dark' && <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />}
      {theme === 'system' && <Monitor className="h-[1.2rem] w-[1.2rem] transition-all" />}
      <span className="sr-only">Theme: {theme}</span>
    </Button>
  );
}
