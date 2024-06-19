// // import Search from '@/app/ui/search';
// // import Table from '@/app/ui/pesanan/table';
// // import { CreatePesanan } from '@/app/ui/pesanan/button';
// // import { lusitana } from '@/app/ui/fonts';
// // import { PesananTableSkeleton, PesananSkeleton, CreatePesananSkeleton, SearchPesananSkeleton} from '@/app/ui/skeletons';
// // import { Suspense } from 'react';
// // import { fetchPesananPages } from '@/app/lib/data';
// // import Pagination from '@/app/ui/pesanan/pagination';

// // export default async function Page( {
// //   searchParams,
// // }: {
// //   searchParams?: {
// //     query?: string;
// //     page?: string;
// //   };
// // }) {
// //   await new Promise((resolve) => setTimeout(resolve, 500)) 
// //   const query = searchParams?.query || '';
// //   const currentPage = Number(searchParams?.page) || 1;
// //   const totalPages = await fetchPesananPages(query);

// //   return (
// //     <div className="w-full">
// //       <div className="flex w-full items-center justify-between">
// //         <h1 className={`${lusitana.className} text-2xl`}>Pesanan</h1>
// //       {/* <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
// //         <Search placeholder="Search pesanan..." />
// //         <CreatePesanan /> */}
// //         <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
// //         <Suspense fallback= {<SearchPesananSkeleton/>}>
// //         <Search placeholder="Search pesanan..." />
// //         </Suspense>

// //         <Suspense fallback={<CreatePesananSkeleton />}>
// //           <CreatePesanan/>
// //         </Suspense>
// //       {/* // </div> */}
// //       </div>
// //       </div>
// //          <Suspense key={query + currentPage} fallback={<PesananSkeleton />}>
// //         <Table query={query} currentPage={currentPage} />
// //       </Suspense>
// //       <div className="mt-5 flex w-full justify-center">
// //         <Pagination totalPages={totalPages} />
// //       </div>
// //     </div>
// //   );
// // }
// import Search from '@/app/ui/search';
// import Table from '@/app/ui/pesanan/table';
// import { CreatePesanan } from '@/app/ui/pesanan/button';
// import { lusitana } from '@/app/ui/fonts';
// import {
//   PesananTableSkeleton,
//   PesananSkeleton,
//   CreatePesananSkeleton,
//   SearchPesananSkeleton,
// } from '@/app/ui/skeletons';
// import { Suspense, lazy } from 'react';
// import { fetchPesananPages } from '@/app/lib/data';
// import Pagination from '@/app/ui/pesanan/pagination';

// export default async function Page( {
//   searchParams,
// }: {
//   searchParams?: {
//     query?: string;
//     page?: string;
//   };
// }) {
//   await new Promise((resolve) => setTimeout(resolve, 500)) 
//   const query = searchParams?.query || '';
//   const currentPage = Number(searchParams?.page) || 1;
//   const totalPages = await fetchPesananPages(query);

//   return (
//     <div className="w-full">
//       <div className="flex w-full items-center justify-between">
//         <h1 className={`${lusitana.className} text-2xl`}>Pesanan</h1>
//         <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
//           <Suspense fallback={<SearchPesananSkeleton />}>
//             <Search placeholder="Search pesanan..." />
//           </Suspense>

//           {/* Lazy load CreatePesanan if needed for performance optimization */}
//           {process.env.NODE_ENV === 'production' && (
//             <Suspense fallback={<CreatePesananSkeleton />}>
//               {/* <LazyCreatePesanan /> */}
//             </Suspense>
//           )}
//           {!process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? (
//             <CreatePesanan />
//           ) : null}
//         </div>
//       </div>

//       <Suspense key={query + currentPage} fallback={<PesananSkeleton />}>
//         <Table query={query} currentPage={currentPage} />
//       </Suspense>

//       <div className="mt-5 flex w-full justify-center">
//         <Pagination totalPages={totalPages} />
//       </div>
//     </div>
//   );
// }
