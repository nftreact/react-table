import { createColumnHelper } from '@tanstack/react-table';

type generateColumns = {};

type columnsProps = {
  accessorKey: string;
  header: string;
}[];

export const generateColumns = (data: columnsProps) => {
  const columnHelper = createColumnHelper<any>();
  let columns = [];
  for (let index = 0; index < data.length; index++) {
    const column = columnHelper.accessor(data[index].accessorKey, {
      header: data[index].header,
      cell: (info) => info.getValue(),
    });

    columns.push(column);
  }

  return columns;
};
