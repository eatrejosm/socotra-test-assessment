import Driver from '@/types/Driver.type';
import DriverRecord from '@/types/DriverRecord.type';
import User from '@/types/User.type';
import Vehicle from '@/types/Vehicle.type';
import { PropsWithChildren, createContext, useContext, useState } from 'react';
type OnboardingContextType = {
  user: User;
  setUser: (user: User) => void;
  vehicles: Vehicle[];
  setVehicles: (vehicles: Vehicle[]) => void;
  drivers: Driver[];
  setDrivers: (drivers: Driver[]) => void;
  driverRecord: DriverRecord;
  setDriverRecord: (driverRecord: DriverRecord) => void;
};
const initialValues: OnboardingContextType = {
  user: {
    name: '',
    birth: '',
  },
  setUser: (user: User) => null,
  vehicles: [],
  setVehicles: (vehicles: Vehicle[]) => null,
  drivers: [],
  setDrivers: (drivers: Driver[]) => null,
  driverRecord: {
    hasAccidents: '',
    hasConvictions: '',
    hasSuspensions: '',
  },
  setDriverRecord: (v: DriverRecord) => null,
};
const OnboardingContext = createContext(initialValues);

export function OnboardingProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User>(initialValues.user);
  const [vehicles, setVehicles] = useState<Vehicle[]>(initialValues.vehicles);
  const [drivers, setDrivers] = useState<Driver[]>(initialValues.drivers);
  const [driverRecord, setDriverRecord] = useState<DriverRecord>(
    initialValues.driverRecord
  );
  return (
    <OnboardingContext.Provider
      value={{
        user,
        setUser,
        vehicles,
        setVehicles,
        drivers,
        setDrivers,
        driverRecord,
        setDriverRecord,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export const useOnboarding = () => useContext(OnboardingContext);
