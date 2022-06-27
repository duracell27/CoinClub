import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import Papa from 'papaparse';
import MovieData from './TableData';
import AddFavourites from './addToFavorites';

function Table({ columns, data }) {
  const defaultColumn = React.useMemo(
    () => ({
      // When using the useFlexLayout:
      width: 'auto'
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data,
    defaultColumn
  });

  return (
    <table {...getTableProps()}>
      <thead className="non-adaptive">
        {headerGroups.map((headerGroup, headerIndex) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={headerIndex}>
            {headerGroup.headers.map((column, i) => (
              <th
                key={i}
                {...column.getHeaderProps({
                  style: { minWidth: column.minWidth, width: column.width }
                })}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="non-adaptive" {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={i}>
              {row.cells.map((cell, i) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
