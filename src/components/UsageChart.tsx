import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins from "@amcharts/amcharts4/plugins/sunburst"; 

export default function UsageChart() {

  setTimeout(() => {
    am4core.useTheme(am4themes_animated);
    let chart = am4core.create("chartdiv", am4plugins.Sunburst);
    chart.padding(0,0,0,0);
    chart.radius = am4core.percent(98);

    chart.data = [
      {name: "外食",
        children: [
          {name: "スターバックスコーヒー",
            children: [
              { name: "2018/04/01", value: 1000 },
              { name: "2018/04/04", value: 6000 },
              { name: "2018/04/07", value: 600 }
            ]
          },
          {name: "蒙古タンメン仲本",
            children: [
              { name: "2018/04/01", value: 1000 },
              { name: "2018/04/04", value: 1000 },
              { name: "2018/04/07", value: 1100 }
            ]
          }
        ]
      },
      {name: "医療薬品",
        children: [
          {name: "市ヶ谷歯科クリニック",
            children: [
              { name: "2018/04/01", value: 1000 },
              { name: "2018/04/04", value: 6000 },
              { name: "2018/04/07", value: 600 }
            ]
          },
          {name: "マツモトキヨシ",
            children: [
              { name: "2018/04/01", value: 1000 },
              { name: "2018/04/04", value: 1000 },
              { name: "2018/04/07", value: 1100 }
            ]
          }
        ]
      },
      {name: "ホテル",
        children: [
          {name: "ニューオータニ",
            children: [
              { name: "2018/04/01", value: 16000 },
              { name: "2018/04/04", value: 4000 },
              { name: "2018/04/07", value: 8000 }
            ]
          },
          {name: "HILTON",
            children: [
              { name: "2018/04/01", value: 10000 },
              { name: "2018/04/04", value: 10000 },
              { name: "2018/04/07", value: 10000 }
            ]
          }
        ]
      },
      {name: "エンターテイメント",
        children: [
          {name: "TOHOシネマズ",
            children: [
              { name: "2018/04/01", value: 1600 },
              { name: "2018/04/04", value: 4000 },
              { name: "2018/04/07", value: 8000 }
            ]
          },
          {name: "伊勢丹",
            children: [
              {name: "ルイヴィトン",
                children: [
                  { name: "2018/04/01", value: 10000 },
                  { name: "2018/04/04", value: 6200 },
                  { name: "2018/04/07", value: 4000 }
                ]
              },
              {name: "資生堂",
                children: [
                  { name: "2018/04/01", value: 10000 },
                  { name: "2018/04/04", value: 6200 },
                  { name: "2018/04/07", value: 4000 }
                ]
              },
              {name: "伊勢丹",
                children: [
                  { name: "2018/04/01", value: 10000 },
                  { name: "2018/04/04", value: 6200 },
                  { name: "2018/04/07", value: 4000 }
                ]
              },
            ]
          },
        ]
      },
  ];
   
  // define data fields
  chart.colors.step = 2;
  chart.numberFormatter.numberFormat = "#.##";
  chart.fontSize = 13;
  chart.innerRadius = am4core.percent(10);
  chart.dataFields.value = "value";
  chart.dataFields.name = "name";
  chart.dataFields.children = "children";
    
  let level0SeriesTemplate = new am4plugins.SunburstSeries();
  level0SeriesTemplate.dataFields.category = "name";
  level0SeriesTemplate.hiddenInLegend = false;
  chart.seriesTemplates.setKey("0", level0SeriesTemplate)

  // this makes labels to be hidden if they don't fit
  level0SeriesTemplate.labels.template.truncate = true;
  level0SeriesTemplate.labels.template.hideOversized = true;

  let level1SeriesTemplate = level0SeriesTemplate.clone();
  chart.seriesTemplates.setKey("1", level1SeriesTemplate)
  level1SeriesTemplate.fillOpacity = 0.75;
  level1SeriesTemplate.hiddenInLegend = true;
  
  let level2SeriesTemplate = level0SeriesTemplate.clone();
  chart.seriesTemplates.setKey("2", level2SeriesTemplate)
  level2SeriesTemplate.fillOpacity = 0.5;
  level2SeriesTemplate.hiddenInLegend = true;
  
  }, 30);
  return (
      <div className="App">
        <p>ご利用内容</p>
        <div id="chartdiv"　 style={{ width: "800px", height: "700px", }}>
        </div>
      </div>
  );
}


