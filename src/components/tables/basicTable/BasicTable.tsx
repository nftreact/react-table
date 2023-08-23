'use client';
import React from 'react';
import { TableHead, TableBody } from '../index';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';

type BasicTableProps = {
  direction?: 'rtl' | 'ltr';
  data: any[];
  columns?: any[] | undefined;
  customizeColumn?: any[];
};

const BasicTable = ({ data, columns = [], direction = 'ltr', customizeColumn = [] }: BasicTableProps) => {
  const { getHeaderGroups, getRowModel } = useReactTable({
    data,
    columns: columns.length === 0 ? customizeColumn : columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className='w-full' dir={direction}>
      <TableHead columns={getHeaderGroups} />
      <TableBody rows={getRowModel} />
    </table>
  );
};

export default BasicTable;
