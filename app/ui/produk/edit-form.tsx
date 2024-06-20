'use client';

import { CustomerField, ProdukForm } from '@/app/lib/definitions';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
  XMarkIcon,
  ShieldCheckIcon,
  InboxArrowDownIcon,
  CubeTransparentIcon,
  ListBulletIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateProduk } from '@/app/lib/actions';

export default function EditProdukForm({
  produk,
  // customer,
}: {
  produk: ProdukForm;
  // customer: CustomerField[];
}) {
    const updateProdukWithId = updateProduk.bind(null, produk.id);
  return (
    <form action={updateProdukWithId}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Produk Name */}
          <div className="mb-4">
          <label htmlFor="nama" className="mb-2 block text-sm font-medium">
            Choose produk
          </label>
          <div className="relative">
            <select
              id="nama"
              name="nama"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={produk.nama}
            >
              {/* <option value="" disabled>
                Select a produk
              </option>
              {produk.map((produk) => (
                <option key={produk.nama} value={produk.nama}>
                  {produk.nama}
                </option>
              ))}
            </select> */}
              <option value="" disabled>Select a produk</option>
            {Array.isArray(produk) ? ( // Check if produk is an array
              produk.map((produk) => (
                <option key={produk.nama} value={produk.nama}> 
                  {produk.nama}
                </option>
              ))) : (
              <option value={produk.nama}> {produk.nama} </option> // Render single product if not an array
                 )}
          </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="kategori" className="mb-2 block text-sm font-medium">
            Kategori
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
            <select
              id="kategori"
              name="kategori"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={produk.kategori}
            >
              <option value="" disabled>Select a kategori</option>
              {Array.isArray(produk) ? ( // Check if produk is an array
                produk.map((produk) => (
                  <option key={produk.kategori} value={produk.kategori}> 
                    {produk.kategori}
                  </option>
                ))
              ) : (
                <option value={produk.kategori}> {produk.kategori} </option> 
              )}
            </select>


              <ListBulletIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="harga" className="mb-2 block text-sm font-medium">
            Harga
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="harga"
                name="harga"
                type="number"
                step="0.01"
                defaultValue={produk.harga}
                placeholder="Enter harga"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

      {/* Invoice Amount */}
              <div className="mb-4">
          <label htmlFor="stok" className="mb-2 block text-sm font-medium">
            Stok
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="stok"
                name="stok"
                type="number"
                step="0.01"
                defaultValue={produk.stok}
                placeholder="Enter stok"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CubeTransparentIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
      {/* Upload foto */}
        <div className="mb-4">
        <label htmlFor="image" className="mb-2 block text-sm font-medium">
          Upload Image
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <InboxArrowDownIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
      </div>

        {/* garansi */}
      <fieldset>
        <legend className="mb-2 block text-sm font-medium">Set the Warranty</legend>
        <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
          <div className="flex gap-4">
            {/* Opsi Tidak */}
            <div className="flex items-center">
              <input
                id="No"
                name="garansi"
                type="radio"
                value="No"
                className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
              />
              <label
                htmlFor="No"
                className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600"
              >
                No <XMarkIcon className="h-4 w-4" /> 
              </label>
            </div>

            {/* Opsi Iya */}
            <div className="flex items-center">
              <input
                id="Yes"
                name="garansi"
                type="radio"
                value="Yes"
                className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
              />
              <label
                htmlFor="Yes"
                className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-200 px-3 py-1.5 text-xs font-medium text-green-600"
              >
                Yes <ShieldCheckIcon className="h-4 w-4" />
              </label>
            </div>
          </div>
        </div>
      </fieldset>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/produk"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edit Produk</Button>
      </div>
    </form>
  );
}
