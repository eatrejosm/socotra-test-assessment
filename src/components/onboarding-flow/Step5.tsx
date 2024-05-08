'use client';
import { useOnboarding } from '@/providers/OnboardingProvider';
import VehicleItem from './VehicleItem';
import DriverItem from './DriverItem';

export default function Step5() {
  const { vehicles, drivers } = useOnboarding();
  return (
    <div className="flex flex-col gap-10">
      <div className="rounded-lg p-4 flex flex-col text-white bg-[#152C47] min-h-[140px]">
        <p className="font-raleway text-[20px]">Auto Quote</p>
        <p className="font-raleway text-[32px] font-semibold">$150.00</p>
        <p className="font-raleway opacity-60 font-light">per month</p>
      </div>
      <div>
        <p className="mx-auto text-sm border-b text-center pb-3 mb-10 max-w-[252px]">
          Vehicles
        </p>
        <div className="flex flex-col gap-5">
          {vehicles.map((item, id) => (
            <VehicleItem data={item} key={id} review />
          ))}
        </div>
      </div>
      <div>
        <p className="mx-auto text-sm border-b text-center pb-3 mb-10 max-w-[252px]">
          Drivers
        </p>
        <div className="flex flex-col gap-5">
          {drivers.map((item, id) => (
            <DriverItem data={item} key={id} review />
          ))}
        </div>
      </div>
    </div>
  );
}
