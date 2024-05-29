// import Pagination from '@/app/ui/invoices/pagination';
// import Search from '@/app/ui/search';
// import Table from '@/app/ui/produk/table';
// import { lusitana } from '@/app/ui/fonts';
// import { ProdukTableSkeleton } from '@/app/ui/skeletons';
// import { Suspense } from 'react';
// import { fetchProdukPages } from '@/app/lib/data';
// import { CreateProduk } from '@/app/ui/produk/button';
// // export default async function Page() {

// export default async function Page({
//   searchParams,
// }: {
//   searchParams?: {
//     query?: string;
//     page?: string;
//   };
// }) {
//   const query = searchParams?.query || '';
//   const currentPage = Number(searchParams?.page) || 1;
//   const totalPages = await fetchProdukPages(query);

//   return (
//     <div className="w-full">
//       <div className="flex w-full items-center justify-between">
//         <h1 className={`${lusitana.className} text-2xl`}>Produk</h1>
//       </div>
//       <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
//         <Search placeholder="Search produk..." />
//         <CreateProduk />
//       </div>
//        <Suspense key={query + currentPage} fallback={<ProdukTableSkeleton />}>
//         <Table query={query} currentPage={currentPage} />
//       </Suspense>
//       <div className="mt-5 flex w-full justify-center">
//          <Pagination totalPages={totalPages} /> 
//       </div>
//     </div>
//   );
// }

import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/produk/table';
import { CreateCustomers } from '@/app/ui/customers/buttons';
import { lusitana } from '@/app/ui/fonts';
import { ProdukSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchCustomersPages } from '@/app/lib/data';
import { fetchProdukPages } from '@/app/lib/data';
import { CreateProduk } from '@/app/ui/produk/button';
 
// export default async function Page() {

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchCustomersPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Produk</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search produk..." />
        <CreateProduk />
      </div>
       <Suspense key={query + currentPage} fallback={<ProdukSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
         <Pagination totalPages={totalPages} /> 
      </div>
    </div>
  );
}


