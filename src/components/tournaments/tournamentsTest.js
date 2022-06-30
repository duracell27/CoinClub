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

const TournamentTable2 = ({ dataFilter, formatFilter, appFilter }) => {
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
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vR7yTwQvKlRgYsdrgv9mnbrhJoRM3_1tck9irwimNoBpRPgU46NIAdxcPu645-8Y8iicgH9ZhuK40YD/pub?gid=0&single=true&output=csv',
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


  // console.log('DATAFILTER', dataFilter);
  // console.log('FORMATFILTER', formatFilter);
  // console.log('APPFILTER', appFilter);


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
    rowsPerPage: 50,
    filterType: {
      customFilterListOptions: () => {
        return <div>hui</div>;
      }
    }
  };
  const tournaments = Array.from(data);

  // time filter
  let filteredTournamentsAll = [];
  // console.log('data', new Date())
  // const year = tournaments[0].data.slice(6, 10)
  // const month = tournaments[0].data.slice(3, 5)
  // const day = tournaments[0].data.slice(0, 2)
  // console.log('data1', new Date(year, month - 1, day))
  // const minus = new Date() - new Date(year, month - 1, day)
  // console.log('minus', minus / 1000)
  for (let key in dataFilter) {
    let filteredTournaments0
    if (dataFilter[key] === true) {
      filteredTournaments0 = data.filter((dataItem) => {
        const year = dataItem.data.slice(6, 10)
        const month = dataItem.data.slice(3, 5)
        const day = dataItem.data.slice(0, 2)
        const tournamentData = new Date(year, month - 1, day) 
        const timeToTournament = ((tournamentData - new Date()) / 1000) + 86399

        const now = new Date();
        const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

        const timeToTomorrow = (tomorrow - now) / 1000;

        // console.log('timeToTomorrow', timeToTomorrow)
        // console.log('timeToTournament', timeToTournament)
        // console.log('item', dataItem.name)

        if (key === 'today' && timeToTournament > 0 && timeToTournament < timeToTomorrow) {
          return 1
        }
        if (key === 'tomorrow' && timeToTournament > 86400 && timeToTournament < 172800) {
          return 1
        }
        if (key === 'week' && timeToTournament > 0 && timeToTournament < 604800) {
          return 1
        }

      })
    }
    if (filteredTournaments0) {
      filteredTournamentsAll.push(...filteredTournaments0)
    }
  }

  // format filter

  for (let key in formatFilter) {
    let filteredTournaments1
    if (formatFilter[key] === true) {
      filteredTournaments1 = data.filter((dataItem) => {
        return dataItem.type === key
      })
    }
    if (filteredTournaments1) {
      filteredTournamentsAll.push(...filteredTournaments1)
    }
  }

  // app filter

  for (let key in appFilter) {
    let filteredTournaments2
    if (appFilter[key] === true) {
      filteredTournaments2 = data.filter((dataItem) => {
        return dataItem.application === key
      })
    }
    if (filteredTournaments2) {
      filteredTournamentsAll.push(...filteredTournaments2)
    }
  }


  console.log('filteredTournamentsAll', filteredTournamentsAll)
  return (
    <ThemeProvider theme={theme}>
      <MUIDataTable
        data={filteredTournamentsAll.length ? filteredTournamentsAll : tournaments}
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
