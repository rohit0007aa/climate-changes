import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category?: string;
  children: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  category,
  children,
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => closeBtnRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-ink/40 backdrop-blur-xs transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-title"
      onClick={onClose}
    >
      <div
        ref={drawerRef}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl h-full bg-paper border-l border-rule shadow-2xl flex flex-col transform transition-transform duration-300 overflow-y-auto"
      >
        {/* Drawer Header */}
        <div className="sticky top-0 bg-paper/95 backdrop-blur-sm z-10 p-6 border-b border-rule flex items-start justify-between">
          <div>
            {category && (
              <span className="label-caps text-ember tracking-widest">{category}</span>
            )}
            <h2 id="drawer-title" className="font-serif text-2xl font-bold text-ink mt-1">
              {title}
            </h2>
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="p-2 text-ink-muted hover:text-ink hover:bg-paper-subtle rounded-full transition-colors focus:ring-2 focus:ring-ember"
            aria-label="Close drawer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="p-6 md:p-8 space-y-6 flex-1 text-ink">{children}</div>

        {/* Drawer Footer */}
        <div className="p-6 border-t border-rule bg-paper-subtle/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-ink bg-paper border border-rule hover:border-ink rounded transition-colors"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
