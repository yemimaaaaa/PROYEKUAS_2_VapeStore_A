import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function CreateProduk() {
  return (
    <Link
      href="/dashboard/produk/create"
      className="flex h-10 items-center rounded-lg bg-fuchsia-600 px-4 text-sm font-medium text-white transition-colors hover:bg-fuchsia-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Produk</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateProduk({ id }: { id: string }) {
  return (
    <Link
      href="/dashboard/produk"
      className="rounded-md border p-2 hover:bg-fuchsia-200"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteProduk({ id }: { id: string }) {
  return (
    <>
      <button className="rounded-md border p-2 hover:bg-fuchsia-200">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </>
  );
}
