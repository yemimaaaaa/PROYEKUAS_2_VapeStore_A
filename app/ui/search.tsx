// 'use client';

// import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
// import { useSearchParams, usePathname, useRouter } from 'next/navigation';
// import { resolve } from 'path';
// import { isAwaitExpression } from 'typescript';
// import { useDebouncedCallback } from 'use-debounce';

// export default function Search({ placeholder }: { placeholder: string }) {
//   const searchParams = useSearchParams();
//   const pathname = usePathname();
//   const { replace } = useRouter();

//     const handleSearch = useDebouncedCallback((term) => {
//     console.log(`Searching... ${term}`);
//     const params = new URLSearchParams(searchParams);
//     params.set('page', '1');
//     if (term) {
//       params.set('query', term);
//     } else {
//       params.delete('query');
//     }
//     replace(`${pathname}?${params.toString()}`);
//   }, 400);
//   // await new Promise((resolve) => setTimeout(resolve, 1000));

//   return (
//     <div className="relative flex flex-1 flex-shrink-0">
//       <label htmlFor="search" className="sr-only">
//         Search
//       </label>
//       <input
//         className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
//         placeholder={placeholder}
//         onChange={(e) => {
//           handleSearch(e.target.value);
//         }}
//         defaultValue={searchParams.get('query')?.toString()}
//       />
//       <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
//     </div>
//   );
// }
'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState, ChangeEvent } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('query') || '');
  const [isSearching, setIsSearching] = useState(false); 

  const handleSearch = useDebouncedCallback(async (term) => {
    setIsSearching(true); // Show loading indicator
    console.log(`Searching... ${term}`);

    // Simulate search delay (replace with actual search logic)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const params = new URLSearchParams(searchParams);
    params.set('page', '1');

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    router.replace(`${pathname}?${params.toString()}`);
    setIsSearching(false); // Hide loading indicator
  }, 400);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    handleSearch(event.target.value); 
  };

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">Search</label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange} 
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      {isSearching && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 h-full">
          <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-gray-500"></span>
        </div>
      )}
    </div>
  );
}
