'use client';
import Step1 from '@/components/onboarding-flow/Step1';
import Step2 from '@/components/onboarding-flow/Step2';
import Step3 from '@/components/onboarding-flow/Step3';
import Step4 from '@/components/onboarding-flow/Step4';
import Step5 from '@/components/onboarding-flow/Step5';
import Steps from '@/components/onboarding-flow/Steps';
import { OnboardingProvider } from '@/providers/OnboardingProvider';
import { useState } from 'react';

export default function Home() {
  const [step, setStep] = useState(1);
  return (
    <OnboardingProvider>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-md py-12 space-y-4">
          {step < 5 && <Steps step={step} />}
          {step === 1 && <Step1 onClickContinue={() => setStep(2)} />}
          {step === 2 && <Step2 onClickContinue={() => setStep(3)} />}
          {step === 3 && <Step3 onClickContinue={() => setStep(4)} />}
          {step === 4 && <Step4 onClickContinue={() => setStep(5)} />}
          {step === 5 && <Step5 />}
        </div>
      </div>
    </OnboardingProvider>
  );
}
