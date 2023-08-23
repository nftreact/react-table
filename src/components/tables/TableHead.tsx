import React from 'react';
import { HeaderGroup, flexRender } from '@tanstack/react-table';



type tableHeadProps = {
    columns: () => HeaderGroup<any>[];
};

const TableHead = ({ columns }: tableHeadProps) => {
  return (
    <thead>
      {columns().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th key={header.id}>
              {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default TableHead;
