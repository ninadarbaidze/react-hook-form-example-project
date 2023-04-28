import Head from 'next/head';
import {
  FormProvider,
  useFieldArray,
  useForm,
  useWatch,
} from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import SkillsArray from 'components/SkillsArray';

export default function ReactHookForm() {
  const form = useForm();
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: `games`,
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  watch('password');
  const isSkillsDisplayed = useWatch({ control, name: 'display_skills' });
  useWatch({ control, name: 'nickname' });

  return (
    <div className='sm:px-12 lg:px-96'>
      <Head>
        <title>RHF example project</title>
      </Head>

      <main className='flex flex-col items-center justify-center gap-8 '>
        <h1 className='text-2xl pt-12 text-gray-600'>React hook form</h1>

        <FormProvider {...form}>
          <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-6 h-20'>
              <p className='mb-2 text-sm font-medium text-gray-900'>
                Your email
              </p>
              <input
                {...register('email', { required: '*required field' })}
                type='email'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5'
                placeholder='example@example.com'
              />
              <ErrorMessage
                name='email'
                errors={errors}
                render={({ message }) => (
                  <p className='text-xs text-red-600'>{message}</p>
                )}
              />
            </div>
            <div className='mb-6 h-20'>
              <p className='mb-2 text-sm font-medium text-gray-900'>Nickname</p>
              <input
                {...register('nickname', {
                  minLength: {
                    value: 3,
                    message: 'min. symbol 3',
                  },
                  required: '*required field',
                })}
                type='text'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5'
              />
              <ErrorMessage
                name='nickname'
                errors={errors}
                render={({ message }) => (
                  <p className='text-xs text-red-600'>{message}</p>
                )}
              />
            </div>
            <div className='mb-6'>
              <p className='block mb-2 text-sm font-medium text-gray-900'>
                Your password
              </p>
              <input
                {...register('password')}
                type='password'
                id='password'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 '
              />
            </div>

            <div className='mb-6'>
              <p>Display games?</p>
              <select {...register('display_skills')} className='bg-white'>
                <option value='no'>No</option>
                <option value='yes'>Yes</option>
              </select>
            </div>
            {isSkillsDisplayed === 'yes' && (
              <>
                <h3>Games</h3>
                <ul className='flex flex-col items-center justify-center gap-6 border border-gray-300 rounded-md px-2 py-6 mb-6'>
                  {fields.map((field, index) => (
                    <li key={field.id}>
                      <SkillsArray index={index} remove={remove} />
                    </li>
                  ))}
                  <div className='flex gap-2'>
                    <button
                      onClick={() => append({ name: '', number: '' })}
                      className=' bg-green-500 text-white px-2 py-1 rounded-md'
                      type='button'
                    >
                      ADD
                    </button>
                    {fields.length > 0 && (
                      <button
                        type='button'
                        className=' bg-rose-500 text-white px-2 py-1 rounded-md'
                        onClick={() => remove()}
                      >
                        DELETE ALL
                      </button>
                    )}
                  </div>
                </ul>
              </>
            )}

            <button
              type='submit'
              className='text-white  hover:bg-indigo-600 bg-indigo-500  font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center'
            >
              Submit
            </button>
          </form>
        </FormProvider>
      </main>
    </div>
  );
}
