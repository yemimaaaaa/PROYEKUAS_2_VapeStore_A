import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/customers/table';
import { CreateCustomers } from '@/app/ui/customers/buttons';
import { lusitana } from '@/app/ui/fonts';
import { CustomersSkeleton, SearchCustomerSkeleton, CreateCustomerSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchCustomersPages } from '@/app/lib/data';
 
// export default async function Page() {
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
  const totalPages = await fetchCustomersPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        {/* <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div> */}
         <Suspense fallback= {<SearchCustomerSkeleton/>}>
        <Search placeholder="Search customers..." />
        </Suspense>

        <Suspense fallback={<CreateCustomerSkeleton />}>
          <CreateCustomers/>
        </Suspense>
      </div>
       <Suspense key={query + currentPage} fallback={<CustomersSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
         <Pagination totalPages={totalPages} /> 
      </div>
    </div>
  );
}