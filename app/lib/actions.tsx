'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
// import { UpdateInvoices } from '../ui/invoices/buttons';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({ invalid_type_error: 'Please select a customer.',}),
  total_harga: z.coerce.number().gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {invalid_type_error: 'Please select an invoice status.',}),
  kuantitas: z.string({invalid_type_error: 'Please add kuantitas. ',}),
  // image_url: z.string(),
  date: z.string(),
});

const FormSchema2 = z.object({
  id: z.string(),
  nama: z.string(),
  no_telp: z.string(),
  pesanan: z.string(),
  image_url: z.string(),
  gender: z.enum(['L', 'P'], {invalid_type_error: 'Please select,',}),
  // date: z.string(),
});

const FormSchema3 = z.object({
  id: z.string(),
  nama: z.string(),
  kategori: z.string(),
  harga: z.coerce.number().gt(0, {message: 'Please enter an amount greater than $0. '}),
  stok: z.string(),
  date: z.string(),
  image_url: z.string(),
  garansi: z.enum(['No', 'Yes'], {invalid_type_error: 'Please Select,',}),
});

// const FormSchema4 = z.object({
//   id: z.string(),
//   customerId :z.string(),
//   barang: z.string(),
//   harga: z.coerce.number(),
//   jumlah: z.coerce.number(),
//   keterangan: z.enum(["sedang diproses", "done"]),
//   image_url: z.string().optional() // Image is optional
// });

const FormSchema4 = z.object({
  id: z.string(),
  customerId :z.string(),
  barang: z.string(),
  harga: z.coerce.number(),
  jumlah: z.coerce.number(),
  keterangan: z.enum(['sedang diproses', 'done']),
  date: z.string(),
});

const FormSchema5 = z.object({
  id: z.string(),
  customerId :z.string(),
  harga: z.coerce.number(),
  keterangan: z.enum(['sedang diproses', 'done']),
});


export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};
 





const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ id: true, date: true });
const CreateProduk = FormSchema3.omit({ id: true, date: true });
const UpdateProduk = FormSchema3.omit({ id: true, date: true });
const CreateCustomers = FormSchema2.omit({ id: true, date: true });
const UpdateCustomers = FormSchema2.omit({ id: true });
const CreatePesanan = FormSchema4.omit({ id: true, date: true});
const UpdatePesanan = FormSchema5.omit({ id: true, date: true});
// const CreatePesanan = FormSchema4.omit({ id: true, date: true});
// const UpdatePesanan = FormSchema4.omit({ id: true, date: true});

export async function createInvoice(formData: FormData) {
  // const img = formData.get('image');
  // console.log(img);

  // let fileName = '';
  //   if (img instanceof Blob) { // Ubah ini
  //     fileName =  '/customers/'+ img.name;
  //     console.log(fileName);
  //   };

  const { customerId, total_harga, status, kuantitas} = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    total_harga: formData.get('total_harga'),
    status: formData.get('status'),
    kuantitas: formData.get('kuantitas'),
    // image_url: fileName
  });

  const total_hargaInCents = total_harga * 100;
  const date = new Date().toISOString().split('T')[0];

  try {
    await sql`
        INSERT INTO invoices (customer_id, total_harga, status, date, kuantitas)
        VALUES (${customerId}, ${total_hargaInCents}, ${status}, ${date}, ${kuantitas}})
      `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function updateInvoice(id: string, formData: FormData) {
  // const image = formData.get('image');
  // console.log(image);
 
  // let fileName = '';
  // if (image instanceof File) {
  //   fileName = '/customers/' + image.name;
  //   console.log('Image uploaded:', fileName);
  // };
  const { customerId, total_harga, status, kuantitas } = UpdateInvoice.parse({
    customerId: formData.get('customerId'),
    total_harga: formData.get('total_harga'),
    status: formData.get('status'),
    kuantitas: formData.get('kuantitas'),
    // image_url: fileName
  });

  const total_hargaInCents = total_harga * 100;
 
  try {
    await sql`
          UPDATE invoices
          SET customer_id = ${customerId}, total_harga = ${total_hargaInCents}, status = ${status}, kuantitas = ${kuantitas}
          WHERE id = ${id}
        `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Invoice.' };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  throw new Error('Failed to Delete Invoice');
}

export async function createCustomers(formData: FormData) {
  const img = formData.get('image');
  console.log(img);

  let fileName = '';
    if (img instanceof Blob) { // Ubah ini
      fileName =  '/customers/'+ img.name;
      console.log(fileName);
    };


  const { nama, no_telp, pesanan, image_url, gender } = CreateCustomers.parse({
    nama: formData.get('nama'),
    no_telp: formData.get('no_telp'),
    pesanan: formData.get('pesanan'),
    image_url: fileName,
    gender: formData.get('gender'),
  });
  const date = new Date().toISOString().split('T')[0];

  try {
    await sql`
        INSERT INTO customers (nama, no_telp, pesanan, image_url, date, gender)
        VALUES (${nama}, ${no_telp}, ${pesanan}, ${image_url}, ${date}, ${gender})
      `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Customers.',
    };
  }
  revalidatePath('/dashboard/customer');
  redirect('/dashboard/customer');
}

export async function updateCustomers(id: string, formData: FormData) {
  const image = formData.get('image');
  console.log(image);
 
  let fileName = '';
  if (image instanceof File) {
    fileName = '/customers/' + image.name;
    console.log('Image uploaded:', fileName);
  };
  const { nama, no_telp, pesanan, image_url, gender} = UpdateCustomers.parse({
    nama: formData.get('nama'),
    no_telp: formData.get('no_telp'),
    pesanan: formData.get('pesanan'),
    image_url: fileName,
    gender: formData.get('gender'),
  });
 
  const updateFields = { nama, no_telp, pesanan, image_url, gender };
  if (fileName) {
    updateFields.image_url = fileName;
  }
  try {
    await sql`
        UPDATE customers
        SET nama = ${nama}, no_telp = ${no_telp}, pesanan = ${pesanan}, image_url = ${fileName}, gender = ${gender}
        WHERE id = ${id}
      `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Customers.' };
  }
 
  revalidatePath('/dashboard/customer');
  redirect('/dashboard/customer');
}

export async function deleteCustomers(id: string) {
throw new Error('Failed to Delete Customers');
  try {
    await sql`DELETE FROM customers WHERE id = ${id}`;
    revalidatePath('/dashboard/customer');
    return { message: 'Deleted Customers.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Customers.' };
  }
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function createProduk(formData: FormData) {
  const img = formData.get('image');
  console.log(img);

  let fileName = '';
  if (img instanceof File) {
    fileName = '/produk/' + img.name;
    console.log('Image uploaded:', fileName);
  };

  const { nama, kategori, harga, stok, image_url, garansi } = CreateProduk.parse({
    nama: formData.get('nama'),
    kategori: formData.get('kategori'),
    harga: formData.get('harga'),
    stok: formData.get('stok'),
    // date: formData.get('date'),
    image_url: fileName,
    garansi: formData.get('garansi'),
  });

  const date = new Date().toISOString().split('T')[0];

  try {
    await sql`
        INSERT INTO produk (nama, kategori, harga, stok, date, image_url, garansi)
        VALUES (${nama}, ${kategori}, ${harga}, ${stok}, ${date}, ${image_url}, ${garansi})
      `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Produk.',
    };
  }

  revalidatePath('/dashboard/produk');
  redirect('/dashboard/produk');
}

export async function updateProduk(id: string, formData: FormData) {
  const image = formData.get('image');
  console.log(image);
 
  let fileName = '';
  if (image instanceof File) {
    fileName = '/produk/' + image.name;
    console.log('Image uploaded:', fileName);
  };

  const { nama, kategori, harga, stok, image_url, garansi} = UpdateProduk.parse({
    nama: formData.get('nama'),
    kategori: formData.get('kategori'),
    harga: formData.get('harga'),
    stok: formData.get('stok'),
    image_url: fileName,
    garansi: formData.get('garansi'),
  });
 
  const updateFields = { nama, kategori, harga, stok, image_url, garansi};
  if (fileName) {
    updateFields.image_url = fileName;
  }
  try {
    await sql`
    UPDATE produk
    SET nama= ${nama}, kategori=${kategori}, harga = ${harga}, stok = ${stok}, image_url = ${fileName}, garansi = ${garansi}
    WHERE id = ${id}
  `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Produk.' };
  }
  revalidatePath('/dashboard/produk');
  redirect('/dashboard/produk');
}

export async function deleteProduk(id: string) {
  throw new Error('Failed to Delete Produk');
  try {
    await sql`DELETE FROM produk WHERE id = ${id}`;
    revalidatePath('/dashboard/produk');
    return { message: 'Deleted Produk.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Produk.' };
  }
}

//PESANAN

export async function createPesanan(formData: FormData) {
  // const img = formData.get('image');
  // console.log(img);

  // let fileName = '';
  // if (img instanceof File) {
  //   fileName = '/pesanan/' + img.name;
  //   console.log('Image uploaded:', fileName);
  // };

  const { customerId, barang, harga, jumlah, keterangan } = CreatePesanan.parse({
    customerId: formData.get('customerId'),
    barang: formData.get('barang'),
    harga: formData.get('harga'),
    jumlah: formData.get('jumlah'),
    keterangan: formData.get('keterangan'),
  });

  const date = new Date().toISOString().split('T')[0];

  try {
    await sql`
        INSERT INTO pesanan (customer_id, barang, harga, jumlah, keterangan, date)
        VALUES (${customerId}, ${barang}, ${harga}, ${jumlah}, ${keterangan}, ${date})
      `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Pesanan.',
    };
  }

  revalidatePath('/dashboard/pesanan');
  redirect('/dashboard/pesanan');
}

export async function updatePesanan(id: string, formData: FormData) {
  // const img = formData.get('image');
  // console.log(img);

  // let fileName = '';
  // if (img instanceof File) {
  //   fileName = '/pesanan/' + img.name;
  //   console.log('Image uploaded:', fileName);
  // };
  const { customerId, harga, keterangan } = UpdatePesanan.parse({
    customerId: formData.get('customerId'),
    harga: formData.get('harga'),
    keterangan: formData.get('keterangan'),
    // image_url: fileName,
  });


  const updateFields = { customerId, harga, keterangan };
  // if (fileName) {
  //   updateFields.image_url = fileName;
  // }
  try {
    await sql`
        UPDATE pesanan
        SET customer_id = ${customerId}, harga = ${harga}, keterangan = ${keterangan}
        WHERE id = ${id}
      `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Pesanan.' };
  }

  revalidatePath('/dashboard/pesanan');
  redirect('/dashboard/pesanan');
}

export async function deletePesanan(id: string) {
  // throw new Error('Failed to Delete Pesanan');
  try {
    await sql`DELETE FROM pesanan WHERE id = ${id}`;
    revalidatePath('/dashboard/pesanan');
    return { message: 'Deleted Pesanan.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Pesanan.' };
  }
}


// export async function createPesanan(formData: FormData) {
//   // noStore(); // Disable caching for this action
//   const img = formData.get('image');
//   console.log(img);

//   let fileName = '';
//   if (img instanceof File) {
//     fileName = '/customers/' + img.name;
//     console.log('Image uploaded:', fileName);
//   };
//   const { customerId, barang, harga, jumlah, keterangan, image_url } = CreatePesanan.parse({
//     customerId: formData.get('customerId'),
//     barang: formData.get('barang'),
//     harga: formData.get('harga'),
//     jumlah: formData.get('jumlah'),
//     keterangan: formData.get('keterangan'),
//     image_url: fileName,
//   });

//   const date = new Date().toISOString().split('T')[0];

//   try {
//     await sql`
//         INSERT INTO produk ( customerId, barang, harga, jumlah, keterangan, image_url, date)
//         VALUES (${customerId}, ${barang}, ${harga}, ${jumlah}, ${keterangan}, ${date}, ${image_url})
//       `;
//   } catch (error) {
//     return {
//       message: 'Database Error: Failed to Create Produk.',
//     };
//   }

//   revalidatePath('/dashboard/pesanan');
//   redirect('/dashboard/pesanan');
// }

// export async function updatePesanan(id: string, formData: FormData) {
//   const img = formData.get('image');
//   console.log(img);

//   let fileName = '';
//   if (img instanceof File) {
//     fileName = '/pesanan/' + img.name;
//     console.log('Image uploaded:', fileName);
//   };
//   const { nama, harga, barang, jumlah, keterangan, image_url } = UpdatePesanan.parse({
//     nama: formData.get('nama'),
//     harga: formData.get('harga'),
//     barang: formData.get('barang'),
//     jumlah: formData.get('jumlah'),
//     keterangan: formData.get('keterangan'),
//     image_url: fileName,
//   });


//   const updateFields = { nama, harga, barang, jumlah, keterangan, image_url };
//   if (fileName) {
//     updateFields.image_url = fileName;
//   }
//   try {
//     await sql`
//         UPDATE pesanan
//         SET nama = ${nama}, harga = ${harga}, barang = ${barang}, jumlah = ${jumlah}, keterangan = ${keterangan}, image_url = ${image_url}
//         WHERE id = ${id}
//       `;
//   } catch (error) {
//     return { message: 'Database Error: Failed to Update Pesanan.' };
//   }

//   revalidatePath('/dashboard/pesanan');
//   redirect('/dashboard/pesanan');
// }

// export async function deletePesanan(id: string) {
//   throw new Error('Failed to Delete Pesanan');
//   try {
//     await sql`DELETE FROM pesanan WHERE id = ${id}`;
//     revalidatePath('/dashboard/pesanan');
//     return { message: 'Deleted Pesanan.' };
//   } catch (error) {
//     return { message: 'Database Error: Failed to Delete Pesanan.' };
//   }
// }
