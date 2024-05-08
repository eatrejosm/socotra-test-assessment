'use client';
import { Button, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import Plus from '../icons/Plus';
import AsideModal from '../AsideModal';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useOnboarding } from '@/providers/OnboardingProvider';
import { v4 as uuidv4 } from 'uuid';
import Driver from '@/types/Driver.type';
import DriverItem from './DriverItem';

const initialValues: Driver = {
  id: '',
  firstName: '',
  lastName: '',
  license: '',
};

const validationSchema = yup.object({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  license: yup.string().required('License Number is required'),
});
type Step1Props = {
  onClickContinue: () => void;
};
export default function Step3({ onClickContinue }: Step1Props) {
  const [show, setShow] = useState(false);
  const { drivers, setDrivers } = useOnboarding();
  const formik = useFormik<Driver>({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const id = values.id || uuidv4();
      const newItems = [...drivers];
      const index = newItems.findIndex((item) => item.id === id);
      if (index < 0) {
        newItems.push({
          ...values,
          id,
        });
      } else {
        newItems[index] = values;
      }
      setDrivers(newItems);
      resetForm();
      setShow(false);
    },
  });
  return (
    <div className="div">
      <h1 className="text-center text-[28px] font-semibold mb-6 font-grotesk text-[#0C1929]">
        Tell us about the driver(s)
      </h1>
      <div className="flex flex-col gap-4">
        {drivers.map((item, id) => (
          <DriverItem
            data={item}
            key={id}
            onClick={() => {
              formik.setValues(item);
              setShow(true);
            }}
          />
        ))}
      </div>
      <Button
        className={'mx-auto mt-10 ' + (drivers.length > 0 ? 'border-0' : '')}
        type="button"
        color={drivers.length > 0 ? 'light' : 'info'}
        onClick={() => setShow(true)}
      >
        <div className="mt-1 mr-2">
          <Plus color={drivers.length > 0 ? '#275184' : 'white'} />
        </div>
        <span className={drivers.length > 0 ? 'text-[#275184]' : 'text-white'}>
          Add driver
        </span>
      </Button>
      {drivers.length > 0 && (
        <Button onClick={onClickContinue} className="ml-auto mt-10">
          Continue
        </Button>
      )}
      <AsideModal
        header={formik.values.id ? 'Edit Driver' : 'Add Driver'}
        show={show}
        footer={
          <>
            <Button
              color="light"
              onClick={() => {
                formik.resetForm();
                setShow(false);
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={() => formik.handleSubmit()}
              disabled={
                !formik.values.firstName ||
                !formik.values.lastName ||
                !formik.values.license
              }
            >
              Confirm
            </Button>
          </>
        }
        onClose={() => {
          formik.resetForm();
          setShow(false);
        }}
      >
        <div className="flex flex-col gap-5">
          <div>
            <Label>First Name</Label>
            <TextInput
              sizing={'sm'}
              {...formik.getFieldProps('firstName')}
              color={
                formik.touched.firstName && formik.errors.firstName
                  ? 'failure'
                  : ''
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </div>
          <div>
            <Label>Last Name</Label>
            <TextInput
              sizing={'sm'}
              {...formik.getFieldProps('lastName')}
              color={
                formik.touched.lastName && formik.errors.lastName
                  ? 'failure'
                  : ''
              }
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </div>
          <div>
            <Label>License Number</Label>
            <TextInput
              sizing={'sm'}
              {...formik.getFieldProps('license')}
              color={
                formik.touched.license && formik.errors.license ? 'failure' : ''
              }
              helperText={formik.touched.license && formik.errors.license}
            />
          </div>
        </div>
      </AsideModal>
    </div>
  );
}
