import React from 'react';
import Link from 'next/link';
import EmptyList from '@/components/global/EmptyList';
import { fetchAdminProducts } from '@/utils/actions';
import { formatCurrency } from '@/utils/format';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { IconButton } from '@/components/form/FormButtons';

const AdminProductsPage = async () => {
  const products = await fetchAdminProducts();
  if (products.length === 0) {
    return <EmptyList />;
  }

  return (
    <section>
      <Table>
        <TableCaption>Total Products: {products.length}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => {
            const { id, name, company, price } = product;
            const formattedPrice = formatCurrency(price);
            return (
              <TableRow key={id}>
                <TableCell>
                  <Link
                    className='capitalize text-muted-foreground underline tracking-wide'
                    href={`/products/${id}`}
                  >
                    {name}
                  </Link>
                </TableCell>
                <TableCell>{company}</TableCell>
                <TableCell>{formattedPrice}</TableCell>
                <TableCell>
                  <div className='flex gap-x-2 items-center'>
                    <IconButton actionType='edit' />
                    <IconButton actionType='delete' />
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
};

export default AdminProductsPage;
