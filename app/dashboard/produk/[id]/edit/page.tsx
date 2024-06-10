import Form from '@/app/ui/produk/edit-form'; 
import Breadcrumbs from '@/app/ui/produk/breadcrumbs';
import { fetchProdukById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import EditProdukForm from '@/app/ui/produk/edit-form'; 

export default async function EditProdukPage({ params }: { params: { id: string } }) {
  const id = params.id;

  // Fetch data concurrently for efficiency
  const [produk] = await Promise.all([
    fetchProdukById(id),
    // fetchCustomers(),
  ]);

  if (!produk) {
    return notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Produk', href: '/dashboard/produk' },
          {
            label: 'Edit Produk',
            href: `/dashboard/produk/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form produk={produk} /> 
    </main>
  );
}
