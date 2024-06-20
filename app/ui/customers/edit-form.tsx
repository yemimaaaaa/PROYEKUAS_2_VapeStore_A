'use client';

import { CustomerField, CustomersForm } from '@/app/lib/definitions';
import {
    UserCircleIcon,
    InboxArrowDownIcon,
    PhoneArrowDownLeftIcon,
    ShoppingCartIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateCustomers } from '@/app/lib/actions';
import { kanit, anton, inter } from '@/app/ui/fonts';
import { custom } from 'zod';

export default function EditCustomersForm({
    customers,
    // customers,
}: {
    customers: CustomersForm;
    // customers: CustomerField[];
}) {
    const updateCustomersWithId = updateCustomers.bind(null, customers.id);

    return (
        <form action={updateCustomersWithId}>
            <div className={`${inter.className} rounded-md bg-gray-50 p-4 md:p-6`}>
                {/* Customer Name */}
                <div className="mb-4">
                    <label htmlFor="nama" className="mb-2 block text-sm font-medium">
                        Name
                    </label>
                    <div className="relative">
                        <select
                            id="nama"
                            name="nama"
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue={customers.nama}
                            >
                            <option value="" disabled>Select a name</option>
                            {Array.isArray(customers) ? ( // Check if produk is an array
                                customers.map((customers) => (
                                <option key={customers.nama} value={customers.nama}> 
                                    {customers.nama}
                                </option>
                                ))
                            ) : (
                                <option value={customers.nama}> {customers.nama} </option> 
                            )}
                            </select>
                        {/* <input
                            id="nama"
                            name="nama"
                            type="string"
                            step="0.01"
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            placeholder='Enter your name'
                            defaultValue={customers.nama}
                        >
                          
                        </input> */}
                        <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label htmlFor="no_telp" className="mb-2 block text-sm font-medium">
                        No. Telp
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="no_telp"
                                name="no_telp"
                                type="text"
                                step="0.01"
                                placeholder="Enter your No. Telp"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue={customers.no_telp}
                            />
                            <PhoneArrowDownLeftIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label htmlFor="pesanan" className="mb-2 block text-sm font-medium">
                        Pesanan
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                        <select
                            id="pesanana"
                            name="pesanan"
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue={customers.pesanan}
                            >
                            <option value="" disabled>Select a order</option>
                            {Array.isArray(customers) ? ( // Check if produk is an array
                                customers.map((customers) => (
                                <option key={customers.pesanan} value={customers.pesanan}> 
                                    {customers.pesanan}
                                </option>
                                ))
                            ) : (
                                <option value={customers.pesanan}> {customers.pesanan} </option> 
                            )}
                            </select>
                            <ShoppingCartIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>

                {/* Upload Image */}
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
                {/* {customer gender} */}
                <fieldset>
                <legend className="mb-2 block text-sm font-medium">Set the gender</legend>
                <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
                    <div className="flex gap-4">
                    {/* Female Option */}
                    <div className="flex items-center">
                        <input
                        id="P"
                        name="gender" // Use a common name for the group
                        type="radio"
                        value="P" // Set value 
                        defaultChecked={customers.gender === 'P'} 
                        className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                        />
                        <label
                        htmlFor="P"
                        className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-pink-200 px-3 py-1.5 text-xs font-medium text-pink-600"
                        >
                        P <UserCircleIcon className="h-4 w-4" />
                        </label>
                    </div>

                    {/* Male Option */}
                    <div className="flex items-center">
                        <input
                        id="L"
                        name="gender" // Same name as the other radio button
                        type="radio"
                        value="L" // Set value to 'laki-laki'
                        defaultChecked={customers.gender === 'L'}
                        className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                        />
                        <label
                        htmlFor="L"
                        className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-blue-200 px-3 py-1.5 text-xs font-medium text-blue-600"
                        >
                        L <UserCircleIcon className="h-4 w-4" />
                        </label>
                    </div>
                    </div>
                </div>
                </fieldset>
            </div>
            {/* Cancel and Edit */}
            <div className={`${inter.className} mt-6 flex justify-end gap-4`}>
                <Link
                    href="/dashboard/customer"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <Button type="submit">Edit Customer</Button>
            </div>
        </form> );
}