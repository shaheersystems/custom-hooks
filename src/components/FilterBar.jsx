import React from "react";

function FilterBar({ query, setQuery, onFilter, property }) {
  return (
    <div className='flex items-center gap-2'>
      <div className='flex-1'>
        <input
          onChange={(e) => setQuery(e.target.value)}
          type='text'
          value={query}
          className='px-3 py-2 w-full outline-none bg-gray-100 text-sm rounded'
          placeholder='Search tasks'
        />
      </div>
      <div>
        <button
          onClick={onFilter}
          className={`p-2  rounded ${
            property === "completed" ? "bg-blue-400 text-white" : "bg-gray-100"
          }`}
          title='Filter incomplete tasks'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='w-4 h-4'
          >
            <path
              fillRule='evenodd'
              d='M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default FilterBar;
