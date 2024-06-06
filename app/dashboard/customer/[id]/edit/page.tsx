import Form from '@/app/ui/customers/edit-form';
import Breadcrumbs from '@/app/ui/customers/breadcrumbs';
import { fetchCustomersById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [customer] = await Promise.all([
        fetchCustomersById(id),
        // fetchCustomers(),
    ]);
   
    if (!customer) {
        notFound();
    }
 
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Customers', href: '/dashboard/customer' },
                    {
                        label: 'Edit Customer',
                        href: `/dashboard/customer/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form customers={customer} />
        </main>
    );
}