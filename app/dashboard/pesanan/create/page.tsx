import Form from '@/app/ui/pesanan/create-form';
import Breadcrumbs from '@/app/ui/pesanan/breadcrumbs';
import { fetchCustomers, fetchProdukPages } from '@/app/lib/data';

export default async function Page() {
const customers = await fetchCustomers();

return (
    <main>
    <Breadcrumbs
        breadcrumbs={[
        { label: 'Pesanan', href: '/dashboard/pesanan' },
        {
            label: 'Create Pesanan',
            href: '/dashboard/pesanan/create',
            active: true,
        },
        ]}
    />
    <Form customers={customers} />
    </main>
);
}
