// lib/gtag.ts
import { sendGAEvent } from '@next/third-parties/google';

type GAEventProps = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

export const trackCustomEvent = ({ action, category, label, value }: GAEventProps) => {
  sendGAEvent('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};