import React from "react";
import Chart from "react-google-charts";


const options = {
  title: "お客様のキャッシング払いのご利用状況です",
  pieHole: 0.5,
  slices: [
    {
      color: "#000fff"
    },
    {
      color: "#c0c0c0"
    }
  ],
  is3D: false
};

export default function DonutChartCashing() {
  const getData = () => {
    /*
    const method = "GET";
    const mode = 'same-origin'; 
    
    fetch("http://localhost:5000/api/get/balance/" + localStorage.getItem('session_id') , {method, mode})
      .then((res) => {
        console.log(res.json());
        const obj = JSON.parse(json);
        if (obj.auth_result != 0){
          return alert("データにアクセスできません")
        }
        const data = [
          ["種類", "金額"],
          ["ご利用金額", obj.balance_info.cashing_usage],
          ["ご利用可能残高", obj.balance_info.cashing_balance]
        ];
      })
      .then(console.log).catch(console.error);
    */
    const obj = {
      'ask_result': 0,
      'auth_result': 0,
      'balance_info': {
        'cashing_balance': 200000,
        'cashing_frame': 200000,
        'cashing_usage': 200000,
        'installment_balance': 100000,
        'installment_frame': 100000,
        'installment_usage': 50000,
        'total_balance': 41000,
        'total_frame': 300000,
        'total_usage': 259000
      }
    };
    const data = [
      ["種類", "金額"],
      ["ご利用金額", obj.balance_info.cashing_usage],
      ["ご利用可能残高", obj.balance_info.cashing_balance]
    ];
    return data;
  };
    return (
        <div className="App">
          <p>キャッシングご利用状況</p>
            <Chart
                chartType="PieChart"
                width="1000px"
                height="500px"
                data={getData()}
                options={options}
                formatters={[
                  {
                     type: "NumberFormat",
                     column: 1,
                     options: {
                        prefix: "￥",
                        suffix: "円",
                        negativeColor: "red",
                        negativeParens: true,
                      }
                   }
               ]}
            />
        </div>
    );
}

