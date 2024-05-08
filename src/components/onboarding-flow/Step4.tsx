'use client';
import { Button, Label, Select } from 'flowbite-react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useOnboarding } from '@/providers/OnboardingProvider';
import DriverRecord from '@/types/DriverRecord.type';

const initialValues: DriverRecord = {
  hasAccidents: '',
  hasConvictions: '',
  hasSuspensions: '',
};

const validationSchema = yup.object({
  hasAccidents: yup.string().required('Required'),
  hasConvictions: yup.string().required('Required'),
  hasSuspensions: yup.string().required('Required'),
});
type Step1Props = {
  onClickContinue: () => void;
};
export default function Step4({ onClickContinue }: Step1Props) {
  const { setDriverRecord } = useOnboarding();
  const formik = useFormik<DriverRecord>({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      setDriverRecord(values);
      resetForm();
      onClickContinue();
    },
  });
  return (
    <div className="div">
      <h1 className="text-center text-[28px] font-semibold mb-6 font-grotesk text-[#0C1929]">
        Tell us about the drivers’ record
      </h1>

      <div className="flex flex-col gap-5">
        <div>
          <Label>
            Has any driver had any at-fault accidents in the past 6 years?
          </Label>
          <Select
            sizing={'sm'}
            {...formik.getFieldProps('hasAccidents')}
            color={
              formik.touched.hasAccidents && formik.errors.hasAccidents
                ? 'failure'
                : ''
            }
            helperText={
              formik.touched.hasAccidents && formik.errors.hasAccidents
            }
          >
            <option value={undefined} label="" />
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Select>
        </div>
        <div>
          <Label>
            Has any driver had any minor or major convictions in the past 6
            years?
          </Label>
          <Select
            sizing={'sm'}
            {...formik.getFieldProps('hasConvictions')}
            color={
              formik.touched.hasConvictions && formik.errors.hasConvictions
                ? 'failure'
                : ''
            }
            helperText={
              formik.touched.hasConvictions && formik.errors.hasConvictions
            }
          >
            <option value={undefined} label="" />
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Select>
        </div>
        <div>
          <Label>Has any driver had any license suspensions/revocations?</Label>
          <Select
            sizing={'sm'}
            {...formik.getFieldProps('hasSuspensions')}
            color={
              formik.touched.hasSuspensions && formik.errors.hasSuspensions
                ? 'failure'
                : ''
            }
            helperText={
              formik.touched.hasSuspensions && formik.errors.hasSuspensions
            }
          >
            <option value={undefined} label="" />
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Select>
        </div>
      </div>
      <Button
        onClick={() => formik.handleSubmit()}
        className="ml-auto mt-10"
        disabled={
          !formik.values.hasAccidents ||
          !formik.values.hasConvictions ||
          !formik.values.hasSuspensions
        }
      >
        Continue
      </Button>
    </div>
  );
}
