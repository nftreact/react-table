'use client';
import AdvanceTable from '../components/tables/advance-table/AdvanceTable';
import React from 'react';
import { columns as columnsData, oudDataSample, sampleDataRow } from '../components/tables/basicTable/data.table';
import { createColumnHelper } from '@tanstack/react-table';
import { generateColumns } from '@/components/tables/hooks/generateColumns';
import BasicTable from '@/components/tables/basicTable/BasicTable';

export default function Home() {
  const columnHelper = createColumnHelper<any>();
  const columns = generateColumns(columnsData);

  const customizaColumns = [
    columnHelper.accessor('row', {
      header: 'ردیف',
      cell: (info) => Number(info.row.id) + 1,
    }),
    columnHelper.accessor('occasion', {
      header: 'مناسبت',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('grouping', {
      header: 'دسته بندی',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('editable', {
      header: '',
      cell: ({ row }) => <div onClick={() => console.log(row.original, 'row')}>ویرایش</div>,
    }),
  ];

  return (
    <section>
      <AdvanceTable data={oudDataSample} columns={customizaColumns} direction='rtl' />
      <BasicTable data={sampleDataRow} columns={columns} />
    </section>
  );
}
