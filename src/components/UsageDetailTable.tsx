import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

interface Column {
  id: 'record_no' | 'usage_date' | 'usage_amount' | 'shop' | 'methode';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'record_no', label: '#', minWidth: 40 },
  { id: 'usage_date', label: 'ご利用日付', minWidth: 160 },
  {
    id: 'usage_amount',
    label: 'ご利用金額',
    minWidth: 100,
    align: 'right',
    format: (value: number) => value.toLocaleString(),
  },
  {
    id: 'shop',
    label: 'ご利用場所',
    minWidth: 300,
    align: 'right',
  },
  {
    id: 'methode',
    label: 'お支払い方法',
    minWidth: 200,
    align: 'right',
  },
];

interface Data {
  record_no: number;
  usage_date: string;
  usage_amount: number;
  shop: string;
  methode: string;
}

function createData(record_no: number, usage_date: string, usage_amount: number, shop: string, methode: string): Data {
  return { record_no, usage_date, usage_amount, shop, methode };
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 800,
  },
});

export default function UsageDetailTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getRow = () => {
    /*
    const method = "GET";
    const mode = 'same-origin'; 
    
    fetch("http://localhost:5000/api/get/details/" + localStorage.getItem('session_id') , {method, mode})
      .then((res) => {
        console.log(res.json());
        const obj = JSON.parse(json);
        if (obj.auth_result != 0){
          return alert("データにアクセスできません")
        }
        var rows:any = [];
        for (  var i = 0; i < obj.detail_info.length; i++) {
          rows.push(createData(obj.detail_info[i].record_no, obj.detail_info[i].usage_date, obj.detail_info[i].usage_amount, obj.detail_info[i].usage_shop, obj.detail_info[i].method));
        }
        return rows;
      })
      .then(console.log).catch(console.error);
    */
  const obj = {
    'ask_result': 0,
    'auth_result': 0,
    'detail_info': [
      {
        'method': 'リボ払い',
        'record_no': 1,
        'usage_amount': 100,
        'usage_date': '20080401',
        'usage_shop': 'd社'
      },
      {
        'method': 'リボ払い',
        'record_no': 2,
        'usage_amount': 1345345,
        'usage_date': '20080402',
        'usage_shop': 'k社'
      },
      {
        'method': 'リボ払い',
        'record_no': 3,
        'usage_amount': 145300,
        'usage_date': '20080403',
        'usage_shop': 'd社'
      },
      {
        'method': 'リボ払い',
        'record_no': 4,
        'usage_amount': 1534500,
        'usage_date': '20080404',
        'usage_shop': 'd社'
      },
      {
        'method': 'リボ払い',
        'record_no': 5,
        'usage_amount': 154500,
        'usage_date': '20080405',
        'usage_shop': 'd社'
      },
      {
        'method': 'リボ払い',
        'record_no': 6,
        'usage_amount': 10867980,
        'usage_date': '20080406',
        'usage_shop': 'd社'
      },
      {
        'method': 'リボ払い',
        'record_no': 7,
        'usage_amount': 185800,
        'usage_date': '20080407',
        'usage_shop': 'd社'
      },
      {
        'method': 'リボ払い',
        'record_no': 8,
        'usage_amount': 10586570,
        'usage_date': '20080409',
        'usage_shop': 'd社'
      },
      {
        'method': 'リボ払い',
        'record_no': 9,
        'usage_amount': 10435670,
        'usage_date': '20080410',
        'usage_shop': 'd社'
      },
      {
        'method': 'リボ払い',
        'record_no': 10,
        'usage_amount': 157500,
        'usage_date': '20080411',
        'usage_shop': 'd社'
      },
      {
        'method': 'リボ払い',
        'record_no': 11,
        'usage_amount': 108750,
        'usage_date': '20080412',
        'usage_shop': 'd社'
      },
    ]
  }
  var rows:Data[] = [];
  for (  var i = 0; i < obj.detail_info.length; i++) {
    rows.push(createData(obj.detail_info[i].record_no, obj.detail_info[i].usage_date, obj.detail_info[i].usage_amount, obj.detail_info[i].usage_shop, obj.detail_info[i].method));
  }
  return rows;
};

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
      <p>お客様ご利用状況</p>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {getRow().slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.record_no}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={getRow().length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
