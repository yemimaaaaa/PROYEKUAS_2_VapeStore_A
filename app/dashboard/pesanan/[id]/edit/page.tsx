import Form from '@/app/ui/pesanan/edit-form';
import Breadcrumbs from '@/app/ui/customers/breadcrumbs';
import { fetchPesananById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [pesanan, customers] = await Promise.all([
    fetchPesananById(id),
    fetchCustomers(),
  ]);

  if (!pesanan) {
    return notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Pesanan', href: '/dashboard/pesanan' },
          {
            label: 'Edit Pesanan',
            href: `/dashboard/pesanan/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form pesanan={pesanan} customers={customers} />
    </main>
  );
}