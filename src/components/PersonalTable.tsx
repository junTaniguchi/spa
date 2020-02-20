import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: "1000px",
  },
});

function createData(id:number , category: string, data: string) {
  return { id, category, data };
}

export default function PersonalTable() {
  const classes = useStyles();

  const getRow = () => {
    /*
    const method = "GET";
    const mode = 'same-origin'; 
    
    fetch("http://localhost:5000/api/get/user/" + localStorage.getItem('session_id') , {method, mode})
      .then((res) => {
        console.log(res.json());
        const obj = JSON.parse(json);
        if (obj.auth_result != 0){
          return alert("データにアクセスできません")
        }
        const rows = [
          createData(1, '氏名', obj.customer_info.user_name),
          createData(2, '生年月日', obj.customer_info.birthday),
          createData(3, '電話番号', obj.customer_info.phone),
          createData(4, 'メールアドレス', obj.customer_info.email),
          createData(5, '住所', obj.customer_info.address),
        ];
        return rows;
      })
      .then(console.log).catch(console.error);
    */
    const obj = {
      'auth_result': 0,
      'customer_info': {
        'address': '東京都新宿区西新宿8丁目17番1号住友不動産新宿グランドタワー',
        'birthday': '20080401',
        'email': 'XXXXX@tis.co.jp',
        'phone': '03-5337-7070',
        'user_name': 'TIS株式会社'
      }
    }

    const rows = [
      createData(1, '氏名', obj.customer_info.user_name),
      createData(2, '生年月日', obj.customer_info.birthday),
      createData(3, '電話番号', obj.customer_info.phone),
      createData(4, 'メールアドレス', obj.customer_info.email),
      createData(5, '住所', obj.customer_info.address),
    ];
    return rows;
  };

  return (
    <TableContainer component={Paper}>
      <p>お客様情報</p>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getRow().map(row => (
            <TableRow key={row.category}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.category}</TableCell>
              <TableCell align="left">{row.data}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}