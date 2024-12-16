"use client";

import * as React from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  ChevronDown,
  EllipsisVertical,
  Image,
  Loader,
  MoreHorizontal,
  PencilLine,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function DataTableDemo({
  isPending = false,
  data = [],
  columns = [],
  onDelete = () => {},
  onEdit = () => {},
  onView = () => {},
  onPagination = false,
  onSearch = false,
}) {
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      {
        onSearch && (
     
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={table.getColumn("email")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      )}
      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-white-table dark:bg-[#242424]">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(
                  (header) => (
                    (
                      <TableHead
                        key={header.id}
                        className={`text-gray-700 dark:text-[#A7A7A7] text-xs font-medium px-4 py-4 ${header.column.columnDef.className}`}
                      >
                        {header.column.columnDef.id === "select" ? (
                          <Checkbox
                            checked={
                              table.getIsAllPageRowsSelected() ||
                              (table.getIsSomePageRowsSelected() &&
                                "indeterminate")
                            }
                            onCheckedChange={(value) =>
                              table.toggleAllPageRowsSelected(!!value)
                            }
                            aria-label="Select all"
                          />
                        ) : (
                          flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )
                        )}
                      </TableHead>
                    )
                  )
                )}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isPending ? (
              <TableRow className="w-full">
                <TableCell
                  colSpan={columns.length}
                  className="h-[60vh] flex items-center justify-center"
                >
                  <div className="animate-spin text-gray-400 dark:text-[#B6B6B6] text-4xl flex justify-center">
                    <Loader />
                  </div>
                </TableCell>
              </TableRow>
            ) : table.getRowModel()?.rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells()?.map((cell) => (
                    <TableCell
                      key={cell.column.id}
                      className={`${cell.column.columnDef.className} text-black-blue-100 dark:text-[#B6B6B6] text-sm font-normal px-4 py-4`}
                    >
                      {cell.column.columnDef.id === "actions" ? (
                        <div className="flex items-center justify-center space-x-2">
                          {onEdit && (
                            <PencilLine size={20} strokeWidth={1.5} onClick={() => onEdit(row.original)} />
                          )}
                          {onDelete && (
                            <Trash2 size={20} strokeWidth={1.5} onClick={() => onDelete(row.original)} />
                          )}
                          {onView && (<EllipsisVertical size={20} strokeWidth={1.5} onClick={() => onView(row.original)}/>)}
                        </div>
                      ) : cell.column.columnDef.id === "select" ? (
                        <Checkbox
                          checked={row.getIsSelected()}
                          onCheckedChange={(value) =>
                            row.toggleSelected(!!value)
                          }
                          aria-label="Select row"
                        />
                      ) :cell.column.columnDef.id === "image"?(
                        // eslint-disable-next-line jsx-a11y/alt-text
                        <Image color="#BF9E5C" onClick={()=>{
                          window.open(cell.row.original.image)
                        }} />
                      ): (
                        flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* Pagination */}
      {onPagination&&(
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
      )}
    </div>
  );
}
