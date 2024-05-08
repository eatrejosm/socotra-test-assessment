'use client';
import { useOnboarding } from '@/providers/OnboardingProvider';
import User from '@/types/User.type';
import { Button, Label, TextInput } from 'flowbite-react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const initialValues: User = {
  name: '',
  birth: '',
};

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  birth: yup.string().required('Date of Birth is required'),
});

type Step1Props = {
  onClickContinue: () => void;
};

export default function Step1({ onClickContinue }: Step1Props) {
  const { setUser } = useOnboarding();
  const formik = useFormik<User>({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      setUser(values);
      onClickContinue();
    },
  });
  return (
    <div className="div">
      <h1 className="text-center text-[28px] font-semibold mb-6 font-grotesk text-[#0C1929]">
        Tell us about yourself
      </h1>

      <div>
        <div className="mb-5">
          <Label htmlFor="name" value="Name" />
          <TextInput
            type="text"
            sizing={'sm'}
            {...formik.getFieldProps('name')}
            color={formik.touched.name && formik.errors.name ? 'failure' : ''}
            helperText={formik.touched.name && formik.errors.name}
          />
        </div>
        <div className="mb-20">
          <Label htmlFor="dob" value="Date of Birth" />
          <TextInput
            type="date"
            sizing={'sm'}
            {...formik.getFieldProps('birth')}
            color={formik.touched.birth && formik.errors.birth ? 'failure' : ''}
            helperText={formik.touched.birth && formik.errors.birth}
          />
        </div>
        <Button
          className="ml-auto"
          type="submit"
          color={'info'}
          size={'md'}
          onClick={() => formik.handleSubmit()}
          disabled={!formik.values.birth || !formik.values.name}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
