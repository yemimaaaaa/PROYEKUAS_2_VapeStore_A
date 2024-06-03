
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { resolve } from 'path';
// import { deleteCustomers } from '@/app/lib/actions';

export async function CreateCustomers() {
  await new Promise ((resolve) => setTimeout (resolve, 1000));
  return (
    <Link
    href={`/dashboard/customer/create`}
      className="flex h-10 items-center rounded-lg bg-fuchsia-600 px-4 text-sm font-medium text-white transition-colors hover:bg-fuchsia-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Customers</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}
export function UpdateCustomers({ id }: { id: string }) {
  return (
    <Link
      href="/dashboard/customers"
      className="rounded-md border p-2 hover:bg-fuchsia-200"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}
// export function UpdateCustomers({ id }: { id: string }) {
//   return (
//     <Link
//     href={`/dashboard/customers/${id}/edit`}
//       className="rounded-md border p-2 hover:bg-gray-100"
//     >
//       <PencilIcon className="w-5" />
//     </Link>
//   );
// }

// export function  DeleteCustomers({ id }: { id: string }) {
// // const deleteCustomersWithId = deleteCustomers.bind(null, id);
//   return(
//   <form action={deleteCustomersWithId}>
//       <button className="rounded-md border p-2 hover:bg-gray-100">
//         <span className="sr-only">Delete</span>
//         <TrashIcon className="w-5" />
//       </button>
//       </form>
//   );
// }
export function DeleteCustomers({ id }: { id: string }) {
  return (
    <>
      <button className="rounded-md border p-2 hover:bg-fuchsia-200">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </>
  );
}
