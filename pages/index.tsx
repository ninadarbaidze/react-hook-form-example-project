import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>RHF example project</title>
      </Head>

      <main className='flex flex-col items-center justify-center gap-8'>
        <h1 className='text-2xl pt-12'>Welcome to RHF example project</h1>

        <form className='w-[20%]'>
          <div className='mb-6'>
            <label
              htmlFor='email'
              className='mb-2 text-sm font-medium text-gray-900'
            >
              Your email
            </label>
            <input
              type='email'
              id='email'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5'
              placeholder='example@example.com'
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='email'
              className='mb-2 text-sm font-medium text-gray-900'
            >
              Nickname
            </label>
            <input
              type='email'
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
              type='password'
              id='password'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 '
            />
          </div>
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center'
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}
