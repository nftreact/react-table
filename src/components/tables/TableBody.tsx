import { RowModel, flexRender } from '@tanstack/react-table';
import React, { ReactNode } from 'react';

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

type tableRowProps = {
  rows: () => RowModel<Person>;
};
const TableBody = ({ rows }: tableRowProps) => {
  return (
    <tbody>
      {rows().rows.map((row) => (
        <tr key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
