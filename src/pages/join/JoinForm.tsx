// src/pages/Join/JoinForm.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface JoinFormProps {
  onNext: () => void;
}

const JoinForm: React.FC<JoinFormProps> = ({ onNext }) => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const isValid = form.name && form.email && form.password;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{t('login')}</h2>
      <div className="space-y-4">
        <input type="text" name="name" placeholder="이름" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="email" name="email" placeholder={t('email')} value={form.email} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="password" name="password" placeholder={t('password')} value={form.password} onChange={handleChange} className="w-full border p-2 rounded" />
        <button onClick={onNext} disabled={!isValid} className={`w-full px-4 py-2 rounded text-white ${isValid ? 'bg-blue-500' : 'bg-gray-300 cursor-not-allowed'}`}>
          다음
        </button>
      </div>
    </div>
  );
};

export default JoinForm;
