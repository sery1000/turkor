// src/pages/Join/JoinVerify.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface JoinVerifyProps {
  onNext: () => void;
}

const JoinVerify: React.FC<JoinVerifyProps> = ({ onNext }) => {
  const { t } = useTranslation();
  const [codeSent, setCodeSent] = useState(false);
  const [code, setCode] = useState('');

  const handleSendCode = () => {
    setCodeSent(true);
    alert(t('sendCode') + ' 완료되었습니다.');
  };

  const isCodeValid = code.length === 6;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{t('verifyCode')}</h2>
      <p className="mb-4 text-sm text-gray-600">가입 시 입력한 이메일로 인증번호를 발송합니다.</p>

      <button onClick={handleSendCode} className="mb-4 bg-blue-500 text-white px-4 py-2 rounded">
        {t('sendCode')}
      </button>

      {codeSent && (
        <div className="space-y-4">
          <input
            type="text"
            placeholder={t('verifyCode')}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <button
            disabled={!isCodeValid}
            onClick={onNext}
            className={`w-full px-4 py-2 rounded text-white ${isCodeValid ? 'bg-blue-500' : 'bg-gray-300 cursor-not-allowed'}`}
          >
            다음
          </button>
        </div>
      )}
    </div>
  );
};

export default JoinVerify;
