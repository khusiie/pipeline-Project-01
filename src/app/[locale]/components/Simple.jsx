'use client';

import { useTranslations } from 'next-intl';

export default function TestComponent() {
  const t = useTranslations('hero');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('subtitle')}</p>
    </div>
  );
}