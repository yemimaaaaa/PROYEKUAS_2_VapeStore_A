import { ProdukField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  InboxArrowDownIcon,
  UserCircleIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  XMarkIcon,
  ShieldCheckIcon,
  CubeTransparentIcon,
  ListBulletIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createProduk } from '@/app/lib/actions';

export default function Form({ produk }: { produk: ProdukField[] }) {
  return (
    <form action={createProduk}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="nama" className="mb-2 block text-sm font-medium">
            Nama
          </label>
          <div className="relative">
            <input
              id='nama'
              name='nama'
              type="string"
              step="0.01"
              placeholder='Enter Your Name'
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              // defaultValue="Enter Your Name"
            >
              {/* <option value="" disabled>
                Select a produk
              </option>
              {produk.map((produk) => (
                <option key={produk.nama} value={produk.nama}>
                  {produk.nama}
                </option>
              ))} */}
            </input>
            {/* </input> */}
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/*Customers Email */}
        <div className="mb-4">
          <label htmlFor="kategori" className="mb-2 block text-sm font-medium">
            Kategori
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
            <select
              id='kategori'
              name='kategori'
              // type="string"
              // step="0.01"
              placeholder='Enter Your Category'
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              // defaultValue="Enter Your Name"
            >
              <option value="" disabled>
                Select a category
              </option>
              {produk.map((produk) => (
                <option key={produk.kategori} value={produk.kategori}>
                  {produk.kategori}
                </option>
              ))}
            </select>
              {/* <input
                id="kategori"
                name="kategori"
                type="string"
                step="0.01"
                placeholder="Enter Your Kategori"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              /> */}
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
                placeholder="Enter USD Harga"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/*Customers Email */}
        <div className="mb-4">
          <label htmlFor="stok" className="mb-2 block text-sm font-medium">
            Stok
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="stok"
                name="stok"
                type="text"
                placeholder="Enter Stock"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CubeTransparentIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Upload Foto Customer */}
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
        <Button type="submit">Create Produk</Button>
      </div>
 
    </form>
  );
}