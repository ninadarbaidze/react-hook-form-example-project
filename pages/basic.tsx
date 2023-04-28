import Head from 'next/head';
import { useRouter } from 'next/router';

const useForm = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>RHF example project</title>
      </Head>

      <main className='flex flex-col items-center justify-center gap-8 w-full'>
        <div className='flex flex-col items-center'>
          <h1 className='text-2xl pt-12 text-gray-600'>React hook form</h1>
          <button className='' onClick={() => router.push('/basic')}>
            Basic
          </button>
        </div>

        <form className='w-full'>
          <div className='mb-6'>
            <label
              htmlFor='email'
              className='mb-2 text-sm font-medium text-gray-900'
            >
              Your email
            </label>
            <input
              name='email'
              type='email'
              id='email'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5'
              placeholder='example@example.com'
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='nickname'
              className='mb-2 text-sm font-medium text-gray-900'
            >
              Nickname
            </label>
            <input
              name='nickname'
              type='text'
              id='email'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5'
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Your password
            </label>
            <input
              name='password'
              type='password'
              id='password'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 '
            />
          </div>
          <button
            type='submit'
            className='text-white  hover:bg-indigo-600 bg-indigo-500  font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center'
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default useForm;
