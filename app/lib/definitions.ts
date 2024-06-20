// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Dummy = {
  id: string;
  name: string;
  email: string;
  password: string;
  // locked: string;
};

export type Customers = {
  id: string;
  nama: string;
  no_telp: number;
  pesanan: string;
  date: string;
  image_url: string;
  gender: string;
}

export type Produk = {
  id: string;
  nama: string;
  kategori: string;
  harga: number;
  stok: number;
  date: string;
  image_url: string;
  garansi: string;
}

// export type Invoices = {
//   id: string;
//   customer_id: string;
//   total_harga: number;
//   status: 'pending' | 'paid';
//   kuantitas: number;
//   date: string;
//   image_url: string;
// }
export type Invoice = {
  id: string;
  customer_id: string;
  total_harga: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
  pembayaran: 'E-Wallet' | 'Cash' | 'Transfer Bank' | 'Credit Card';
};

export type LatestInvoice = {

  id: string;
  customer_id: string;
  nama: string;
  total_harga: number;
  // status: string;
  // kuantitas: number;
  // date: string;
  image_url: string;
}

export type Revenue = {
  month: string;
  revenue: number;
};
// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

// export type InvoicesTable = {
//   id: string;
//   customer_id: string;
//   nama: string;
//   // email: string;
//   no_telp: string;
//   kuantitas: string;
//   image_url: string;
//   date: string;
//   total_harga: number;
//   status: 'pending' | 'paid';
// };
export type InvoicesTable = {
  id: string;
  customer_id: string;
  nama: string;
  no_telp: string;
  image_url: string;
  date: string;
  total_harga: number;
  status: 'pending' | 'paid';
  pembayaran: 'E-Wallet' | 'Cash' | 'Transfer Bank' | 'Credit Card';
};

export type CustomersTableType = {
  id: string;
  nama: string;
  no_telp: number;
  pesanan: string;
  date: string;
  image_url: string;
  total_invoices: number;
  total_paid: number;
  gender: string;
};

export type FormattedCustomersTable = {
  id: string;
  nama: string;
  no_telp: string;
  pesanan: string;
  date: string;
  image_url: string;
  total_invoices: number;
  total_paid: string;
  gender: string;
};

export type CustomerField = {
  id: string;
  nama: string;
  no_telp: string;
  pesanan: string;
  date: string;
  image_url: string;
  gender: string;
};

export type ProdukField = {
  id: string;
  nama: string;
  // no_telp: string;
  kategori: string;
  harga: number;
  stok: number;
  date: string;
  image_url: string;
  garansi: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  total_harga: number;
  // date: string;
  status: 'pending' | 'paid';
  pembayaran: 'E-Wallet' | 'Cash' | 'Transfer Bank' | 'Credit Card';
  //kuantitas: string;
  //image_url: string;
};

export type CustomersForm = {
  id: string;
  nama: string;
  no_telp: number;
  pesanan: string;
  // date: string;
  image_url: string;
  gender: string;
}

export type ProdukForm = {
  // id_produk: string;
  id: string;
  nama: string;
  kategori: string;
  harga: number;
  stok: number;
  date: string;
  image_url: string;
  garansi: string;
}

// export type ProdukTableType = {
//   id_produk: string;
//   nama: string;
//   kategori: string;
//   harga: number;
//   stok: number;
//   date: string;
//   image_url: string;
//   total_invoices: number;
//   total_pending: number;
//   total_paid: number;
// };

export type ProdukTableType = {
  // id_produk: string;
  id: string;
  nama: string;
  kategori: string;
  harga: number;
  stok: number;
  date: string;
  image_url: string;
  garansi: string;
  // total_invoices: number;
  // total_pending: number;
  // total_paid: number;
};

export type PesananTableType = {
  id: string;
  customer_id: string;
  harga: number;
  barang: string;
  jumlah: number;
  date: string;
  keterangan: 'sedang diproses' | 'done';
  image_url: string;
}

export type PesananForm = {
  id: string;
  customer_id: string;
  harga: number;
  barang: string;
  jumlah: number;
  date: string;
  keterangan: 'sedang diproses' | 'done';
  image_url: string;
}