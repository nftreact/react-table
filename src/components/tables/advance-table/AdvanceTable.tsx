import React, {  useEffect, useState } from 'react';
import { TableHead, TableBody } from '../index';
import { Column, ColumnDef, RowSelectionState, getCoreRowModel, useReactTable } from '@tanstack/react-table';

type AdvanceTableProps = {
  direction?: 'rtl' | 'ltr';
  data: any[];
  columns: any[];
};

const AdvanceTable = ({ data, direction = 'ltr', columns = [] }: AdvanceTableProps) => {
  const [rowSelection, setRowSelection] = useState({});
  const [selectedRows, setSelectedRows] = useState<any[]>([]);

  const { getHeaderGroups, getRowModel, getSelectedRowModel, getIsSomeRowsSelected, getPreSelectedRowModel } =
    useReactTable({
      data,
      columns: columns,

      state: {
        rowSelection,
      },
      getCoreRowModel: getCoreRowModel(),
      enableRowSelection: true, 
      onRowSelectionChange: setRowSelection,
    });

    // is used to handle the selection state of rows in a table.
    useEffect(() => {
      const handleSelectionState = (selections: RowSelectionState) => {
        setSelectedRows((prev) =>
          Object.keys(selections).map(
            (key) => getSelectedRowModel().rowsById[key]?.original || prev.find((row) => row._id === key),
          ),
        );
      };

      handleSelectionState(rowSelection);
    }, [getSelectedRowModel, rowSelection]);

  return (
    <table className='w-full' dir={direction}>
      <TableHead columns={getHeaderGroups} />
      <TableBody rows={getRowModel} />
    </table>
  );
};

export default AdvanceTable;
