'use client';

import { CustomerField, CustomersForm } from '@/app/lib/definitions';
import {
    UserCircleIcon,
    InboxArrowDownIcon,
    EnvelopeIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateCustomers } from '@/app/lib/actions';
import { kanit, anton, inter } from '@/app/ui/fonts';

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
                        <input
                            id="nama"
                            name="nama"
                            type="string"
                            step="0.01"
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            placeholder='Enter your name'
                            defaultValue={customers.nama}
                        >
                          
                        </input>
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
                            <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
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
                            <input
                                id="pesanan"
                                name="pesanan"
                                type="string"
                                step="0.01"
                                placeholder="Enter your pesanan"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue={customers.pesanan}
                            />
                            <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
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