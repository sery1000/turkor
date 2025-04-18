// src/pages/Notice.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const Notice: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">{t('announcementTitle')}</h1>
      <p>{t('sampleNotice')}</p>
    </div>
  );
};

export default Notice;
