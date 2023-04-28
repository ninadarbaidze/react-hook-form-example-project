import Head from 'next/head';

export default function ReactHookForm() {
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className='sm:px-12 lg:px-96'>
      <Head>
        <title>RHF example project</title>
      </Head>

      <main className='flex flex-col items-center justify-center gap-8 '>
        <h1 className='text-2xl pt-12 text-gray-600'>React hook form</h1>

        <form className='w-full' onSubmit={onSubmit}>
          <div className='mb-6 h-20'>
            <p className='mb-2 text-sm font-medium text-gray-900'>Your email</p>
            <input
              name='email'
              type='email'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5'
              placeholder='example@example.com'
            />
          </div>
          <div className='mb-6 h-20'>
            <p className='mb-2 text-sm font-medium text-gray-900'>Nickname</p>
            <input
              name='nickname'
              type='text'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5'
            />
          </div>
          <div className='mb-6'>
            <p className='block mb-2 text-sm font-medium text-gray-900'>
              Your password
            </p>
            <input
              name='password'
              type='password'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 '
            />
          </div>

          <div className='mb-6'>
            <p>Display games?</p>
            <select name='display_skills' className='bg-white'>
              <option value='no'>No</option>
              <option value='yes'>Yes</option>
            </select>
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
}
