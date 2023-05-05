import React from 'react';
import { UseFieldArrayRemove, useFormContext } from 'react-hook-form';

const SkillsArray = ({
  index,
  remove,
}: {
  index: number;
  remove: UseFieldArrayRemove;
}) => {
  const { register } = useFormContext();

  return (
    <div className='flex items-center gap-3'>
      <div>
        <p className='block mb-2 text-sm font-medium text-gray-900'>Game</p>
        <input
          type='text'
          {...register(`games.${index}.name`)}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5'
        />
      </div>
      <div>
        <p className='block mb-2 text-sm font-medium text-gray-900'>Trophies</p>
        <input
          type='number'
          {...register(`games.${index}.trophies`)}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5'
        />
      </div>
      <button
        type='button'
        className=' bg-rose-500 text-white px-2 py-1 rounded-md text-xs mt-6'
        onClick={() => remove(index)}
      >
        DELETE
      </button>
    </div>
  );
};

export default SkillsArray;
