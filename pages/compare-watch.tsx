import * as React from 'react';
import {
  FormProvider,
  useForm,
  useFormContext,
  useWatch,
} from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';

type FormValues = {
  firstName: string;
  lastName: string;
};

//renders on hook/component level
const UseWatchInput = () => {
  const { register } = useFormContext<FormValues>();
  useWatch<FormValues>({ name: 'lastName' });

  return (
    <div className='mt-4'>
      <p className='text-xs text-slate-700'>Last Name</p>
      <input {...register('lastName')} className='border-b outline-none' />
    </div>
  );
};

//renders on root level
const WatchInput = () => {
  const { register, watch } = useFormContext<FormValues>();
  watch('firstName');

  return (
    <div className='mt-4'>
      <p className='text-xs text-slate-700'>First Name</p>
      <input {...register('firstName')} className='border-b outline-none' />
    </div>
  );
};

const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

let hookWatchFormRenderCount = 0;
let methodWatchFormRenderCount = 0;

const WatchExample = () => {
  const form = useForm<FormValues>();
  const { handleSubmit } = form;

  hookWatchFormRenderCount++;

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-white border border-gray-300 rounded-md p-4'
      >
        <div className='font-bold'>
          watch{' '}
          <span className='text-red-600'>
            ({hookWatchFormRenderCount} renders)
          </span>
        </div>
        <WatchInput />
      </form>
    </FormProvider>
  );
};

const UseWatchExample = () => {
  const formMethods = useForm<FormValues>();
  const { handleSubmit } = formMethods;

  methodWatchFormRenderCount++;

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-white border border-gray-300 rounded-md p-4'
      >
        <div className='font-bold'>
          useWatch{' '}
          <span className='text-green-600'>
            ({methodWatchFormRenderCount} renders)
          </span>
        </div>
        <UseWatchInput />
      </form>
    </FormProvider>
  );
};

//root component

const CompareWatch = () => (
  <main className='flex flex-col items-center justify-center gap-4 mt-24'>
    <WatchExample />
    <UseWatchExample />
  </main>
);

export default CompareWatch;
