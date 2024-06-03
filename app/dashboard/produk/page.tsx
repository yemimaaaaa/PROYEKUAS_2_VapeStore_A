import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/produk/table';
import { lusitana } from '@/app/ui/fonts';
import { ProdukSkeleton, CreateProdukSkeleton, SearchProdukSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchProdukPages } from '@/app/lib/data';
import { CreateProduk } from '@/app/ui/produk/button';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  await new Promise((resolve) => setTimeout(resolve, 500)) 
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchProdukPages(query);

  // Limit displayed total pages to maximum of 5
  const displayedTotalPages = Math.min(totalPages, 2);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Produk</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        {/* <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div> */}
         <Suspense fallback= {<SearchProdukSkeleton/>}>
        <Search placeholder="Search produk..." />
        </Suspense>

        <Suspense fallback={<CreateProdukSkeleton />}>
          <CreateProduk/>
        </Suspense>
      </div>
      <Suspense key={query + currentPage} fallback={<ProdukSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={displayedTotalPages} />
      </div>
    </div>
  );
}