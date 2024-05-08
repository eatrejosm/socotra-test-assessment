'use client';
import { Button, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import Plus from '../icons/Plus';
import AsideModal from '../AsideModal';
import { useFormik } from 'formik';
import Vehicle from '@/types/Vehicle.type';
import * as yup from 'yup';
import { useOnboarding } from '@/providers/OnboardingProvider';
import { v4 as uuidv4 } from 'uuid';
import VehicleItem from './VehicleItem';

const initialValues: Vehicle = {
  id: '',
  make: '',
  model: '',
  year: '',
  value: '',
};

const validationSchema = yup.object({
  make: yup.string().required('Make is required'),
  model: yup.string().required('Model is required'),
  year: yup.string().required('Year is required'),
  value: yup.string().required('Value is required'),
});
type Step1Props = {
  onClickContinue: () => void;
};
export default function Step2({ onClickContinue }: Step1Props) {
  const [show, setShow] = useState(false);
  const { vehicles, setVehicles } = useOnboarding();
  const formik = useFormik<Vehicle>({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const id = values.id || uuidv4();
      const newItems = [...vehicles];
      const index = newItems.findIndex((item) => item.id === id);
      if (index < 0) {
        newItems.push({
          ...values,
          id,
        });
      } else {
        newItems[index] = values;
      }
      setVehicles(newItems);
      resetForm();
      setShow(false);
    },
  });
  return (
    <div className="div">
      <h1 className="text-center text-[28px] font-semibold mb-6 font-grotesk text-[#0C1929]">
        Tell us about your vehicle(s)
      </h1>
      <div className="flex flex-col gap-4">
        {vehicles.map((item, id) => (
          <VehicleItem
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
        className={'mx-auto mt-10 ' + (vehicles.length > 0 ? 'border-0' : '')}
        type="button"
        color={vehicles.length > 0 ? 'light' : 'info'}
        onClick={() => setShow(true)}
      >
        <div className="mt-1 mr-2">
          <Plus color={vehicles.length > 0 ? '#275184' : 'white'} />
        </div>
        <span className={vehicles.length > 0 ? 'text-[#275184]' : 'text-white'}>
          Add Vehicle
        </span>
      </Button>
      {vehicles.length > 0 && (
        <Button onClick={onClickContinue} className="ml-auto mt-10">
          Continue
        </Button>
      )}
      <AsideModal
        header={formik.values.id ? 'Edit Vehicle' : 'Add Vehicle'}
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
                !formik.values.make ||
                !formik.values.model ||
                !formik.values.year ||
                !formik.values.value
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
            <Label>Make</Label>
            <TextInput
              sizing={'sm'}
              {...formik.getFieldProps('make')}
              color={formik.touched.make && formik.errors.make ? 'failure' : ''}
              helperText={formik.touched.make && formik.errors.make}
            />
          </div>
          <div>
            <Label>Model</Label>
            <TextInput
              sizing={'sm'}
              {...formik.getFieldProps('model')}
              color={
                formik.touched.model && formik.errors.model ? 'failure' : ''
              }
              helperText={formik.touched.model && formik.errors.model}
            />
          </div>
          <div>
            <Label>Year</Label>
            <TextInput
              sizing={'sm'}
              type="number"
              {...formik.getFieldProps('year')}
              color={formik.touched.year && formik.errors.year ? 'failure' : ''}
              helperText={formik.touched.year && formik.errors.year}
            />
          </div>
          <div>
            <Label>Value</Label>
            <TextInput
              type="number"
              sizing={'sm'}
              {...formik.getFieldProps('value')}
              color={
                formik.touched.value && formik.errors.value ? 'failure' : ''
              }
              helperText={formik.touched.value && formik.errors.value}
            />
          </div>
        </div>
      </AsideModal>
    </div>
  );
}
