import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import Papa from 'papaparse';
import AddFavourites from './addToFavorites';
import MUIDataTable from 'mui-datatables';
//import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff00'
        }
      }
    },
    MUIDataTableBodyCell: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff00',
          color: '#fff',
          
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff00',
          color: '#fff',
          '&:nth-child(1)': {
            width: '1%'
          },
          '&:nth-child(2)': {
            width: '6.7%'
          },
          '&:nth-child(3)': {
            width: '6.7%'
          },
          '&:nth-child(4)': {
            width: '9%'
          },
          '&:nth-child(5)': {
            width: '21%'
          },
          '&:nth-child(6)': {
            width: '9%'
          },
          '&:nth-child(7)': {
            width: '9%'
          },
          '&:nth-child(8)': {
            width: '9%'
          },
          '&:nth-child(9)': {
            width: '16%'
          },
          '&:nth-child(10)': {
            width: '21%'
          },
        
        }
      }
    },
    MUIDataTableToolbarSelect: {
      styleOverrides: {
        root: {
          display: 'none'
        }
      }
    },
    MUIDataTablePagination: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          color: '#fff',
          display: 'none'
        }
      }
    }
  }
});

const CustomCheckbox = (props) => {
  let newProps = Object.assign({}, props);
  newProps.color =
    props['data-description'] === 'row-select' ? 'secondary' : 'primary';

  if (props['data-description'] === 'row-select') {
    return <Radio {...newProps} />;
  } else {
    return <Checkbox {...newProps} />;
  }
};

const TournamentTable2 = ({dataFilter, formatFilter, appFilter}) => {
  const columns = React.useMemo(() => [
    {
      name: '',
      label: '',
      options: {
        customBodyRender: (props) => <AddFavourites />
      }
    },
    {
      name: 'data',
      label: 'Data'
    },
    {
      name: 'time',
      label: 'Time'
    },
    {
      name: 'type',
      label: 'Type'
    },
    {
      name: 'name',
      label: 'Name'
    },
    {
      name: 'buyUSD',
      label: 'Buy-In USD'
    },
    {
      name: 'gtd',
      label: 'GTD'
    },
    {
      name: 'clubId',
      label: 'Club ID'
    },
    {
      name: 'application',
      label: 'Application'
    },
    {
      name: 'lateRegistration',
      label: 'Late Registration:'
    }
  ]);

  const [data, setData] = useState({});

  useEffect(() => {
    Papa.parse(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vTfWriFU7Z6ldxCNhoIhLJvZrbkUsarIl-uSmEcvtwW8xwtjc64LpmFjfHw4zfqrGhev80cgkSFUt3t/pub?output=csv',
      {
        download: true,
        header: true,
        complete: (results) => {
          setData(results.data);
          console.log(results.data);
        }
      }
    );
  }, []);

  
  console.log('DATAFILTER', dataFilter);
  console.log('FORMATFILTER', formatFilter);
  console.log('APPFILTER', appFilter);
  

  const options = {
    search: false,
    searchable: false,
    print: false,
    filter: false,
    download: false,
    viewColumns: false,
    fixedSelectColumn: false,
    selectableRowsHeader: false,
    selectableRowsHideCheckboxes: true, // TUT
    selectableRowsOnClick: true,
    filterType: {
      customFilterListOptions: () => {
        return <div>hui</div>;
      }
    }
  };
  const tournaments = Array.from(data);
  console.log('tournamets', tournaments);
  // const filteredTournaments = tournaments.filter((tournamentsItem)=>{
    
  // })
  return (
    <ThemeProvider theme={theme}>
      <MUIDataTable
        data={tournaments}
        columns={columns}
        options={options}
        // components={{
        //   Checkbox: CustomCheckbox
        // }}
      />
    </ThemeProvider>
  );
};

export default TournamentTable2;
