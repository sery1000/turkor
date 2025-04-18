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
        <h1 className="text-2xl font-bold text-center mb-4">🎉 JoinFlow 작동 중 🎉</h1>
        {step === 1 && <JoinStart onNext={goNext} />}
        {step === 2 && <JoinForm onNext={goNext} />}
        {step === 3 && <JoinVerify onNext={goNext} />}
        {step === 4 && <JoinComplete />}
    </div>
  );
};

export default JoinFlow;
