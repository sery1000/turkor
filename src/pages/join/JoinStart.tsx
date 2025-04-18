import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function JoinStart({ onNext }: { onNext: () => void }) {
  const { t, i18n } = useTranslation();
  const [agreed, setAgreed] = useState(false);
  console.log("🎯 JoinStart 렌더링됨");

  return (
    <div className="p-4 md:p-6 lg:p-12">
      {/* 언어 선택 */}
      <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
        <option value="ko">한국어</option>
        <option value="tr">Türkçe</option>
        <option value="en">English</option>
      </select>

      <h2 className="text-xl font-bold mb-4">{t('agreeTerms')}</h2>
      <button disabled={!agreed}>{t('next')}</button>

      <h2 className="text-xl font-bold mb-4">{t('agreeTerms')}</h2>
      <div className="animate-fadeIn">
        {t('termsContent')}
      </div>

      <label className="flex items-center mb-4">
        <input
          type="checkbox"
          className="mr-2"
          checked={agreed}
          onChange={() => setAgreed(!agreed)}
        />
        {t('agreeTerms')}
      </label>

      <button
        disabled={!agreed}
        onClick={onNext}
        className="px-4 py-2 text-sm md:text-base lg:text-lg bg-blue-500 text-white rounded transition-transform duration-300 hover:scale-105"
      >
        {t('signup')}
      </button>

      <h1 className="text-3xl text-red-500">🎯 JoinStart 컴포넌트 정상 작동 중</h1>
      <div className="p-4 bg-yellow-100 border border-yellow-300 text-black mb-4">
        ✅ JoinStart 컴포넌트 정상 출력됨 (테스트 박스)
      </div>
        <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 border p-4">왼쪽</div>
        <div className="flex-1 border p-4">오른쪽</div>
        <p className="hidden md:block">🖥 데스크탑에서만 보임</p>
        <p className="block md:hidden">📱 모바일에서만 보임</p>

    </div>
    </div>
  );
}
