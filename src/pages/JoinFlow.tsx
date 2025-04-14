// src/pages/JoinFlow.tsx
import React, { useState } from 'react';
import JoinStart from './Join/JoinStart';
import JoinForm from './Join/JoinForm';
import JoinVerify from './Join/JoinVerify';
import JoinComplete from './Join/JoinComplete';

const JoinFlow = () => {
  const [step, setStep] = useState(1);

  const goNext = () => setStep((prev) => prev + 1);

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded shadow">
      {step === 1 && <JoinStart onNext={goNext} />}
      {step === 2 && <JoinForm onNext={goNext} />}
      {step === 3 && <JoinVerify onNext={goNext} />}
      {step === 4 && <JoinComplete />}
    </div>
  );
};

export default JoinFlow;

// src/pages/Join/JoinStart.tsx
import React, { useState } from 'react';

interface JoinStartProps {
  onNext: () => void;
}

const JoinStart: React.FC<JoinStartProps> = ({ onNext }) => {
  const [agreed, setAgreed] = useState(false);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">이용약관에 동의해주세요</h2>
      <div className="border p-4 mb-4 h-48 overflow-auto bg-gray-50 text-sm">
        <p>이용약관 내용이 여기에 들어갑니다. 예: TURKOR는 회원의 정보를 안전하게 보호하며...</p>
      </div>
      <label className="flex items-center mb-4">
        <input
          type="checkbox"
          className="mr-2"
          checked={agreed}
          onChange={() => setAgreed(!agreed)}
        />
        약관에 동의합니다
      </label>
      <button
        disabled={!agreed}
        onClick={onNext}
        className={`px-4 py-2 rounded text-white ${agreed ? 'bg-blue-500' : 'bg-gray-300 cursor-not-allowed'}`}
      >
        다음
      </button>
    </div>
  );
};

export default JoinStart;

// src/pages/Join/JoinForm.tsx
import React, { useState } from 'react';

interface JoinFormProps {
  onNext: () => void;
}

const JoinForm: React.FC<JoinFormProps> = ({ onNext }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const isValid = form.name && form.email && form.password;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">회원 정보 입력</h2>
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="이메일"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={form.password}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <button
          onClick={onNext}
          disabled={!isValid}
          className={`w-full px-4 py-2 rounded text-white ${isValid ? 'bg-blue-500' : 'bg-gray-300 cursor-not-allowed'}`}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default JoinForm;

// src/pages/Join/JoinVerify.tsx
import React, { useState } from 'react';

interface JoinVerifyProps {
  onNext: () => void;
}

const JoinVerify: React.FC<JoinVerifyProps> = ({ onNext }) => {
  const [codeSent, setCodeSent] = useState(false);
  const [code, setCode] = useState('');

  const handleSendCode = () => {
    setCodeSent(true);
    // 실제 이메일 전송 API 연결 예정
    alert('인증번호가 이메일로 전송되었습니다.');
  };

  const isCodeValid = code.length === 6;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">본인 인증</h2>
      <p className="mb-4 text-sm text-gray-600">가입 시 입력한 이메일로 인증번호를 발송합니다.</p>
      <button
        onClick={handleSendCode}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        인증번호 발송
      </button>

      {codeSent && (
        <div className="space-y-4">
          <input
            type="text"
            placeholder="인증번호 입력 (6자리)"
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

// src/pages/Join/JoinComplete.tsx
import React from 'react';

const JoinComplete: React.FC = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">가입이 완료되었습니다!</h2>
      <p className="text-gray-600 mb-6">이제 로그인하여 TURKOR 서비스를 이용해보세요.</p>
      <a
        href="/login"
        className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        로그인 하러가기
      </a>
    </div>
  );
};

export default JoinComplete;