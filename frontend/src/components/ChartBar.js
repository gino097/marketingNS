import { useEffect } from 'react';
import Chart from 'chart.js'
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';

const MONTHS = [
    'La Paz',
    'Santa Cruz',
    'Beni',
    'Cochabamba',
    'Potosí',
    'Oruro',
    'Tarija',
    'Chuquisaca',
  ];
  
  export function months(config) {
    var cfg = config || {};
    var count = cfg.count || 12;
    var section = cfg.section;
    var values = [];
    var i, value;
  
    for (i = 0; i < count; ++i) {
      value = MONTHS[Math.ceil(i) % 12];
      values.push(value.substring(0, section));
    }
    return values;
  }
export default function ChartBar(info) {
    const labels=['La Paz', 'Santa Cruz', 'Beni', 'Cochabamba', 'Potosí', 'Oruro', 'Tarija', 'Chuquisaca'];
    //console.log(info.solicitudes);
    var dataValues=[0,0,0,0,0,0,0,0];
    info.solicitudes.map((element)=>{
        if(element.SOLICI_REGIONAL===labels[0])dataValues[0]+=1;
        if(element.SOLICI_REGIONAL===labels[1])dataValues[1]+=1;
        if(element.SOLICI_REGIONAL===labels[2])dataValues[2]+=1;
        if(element.SOLICI_REGIONAL===labels[3])dataValues[3]+=1;
        if(element.SOLICI_REGIONAL===labels[4])dataValues[4]+=1;
        if(element.SOLICI_REGIONAL===labels[5])dataValues[5]+=1;
        if(element.SOLICI_REGIONAL===labels[6])dataValues[6]+=1;
        if(element.SOLICI_REGIONAL===labels[7])dataValues[7]+=1;
    })
    //console.log(dataValues);
    //const labels = months({count: 8});
    //console.log(dataValues)
    const data = {
    labels: labels,
    datasets: [{
        axis: 'y',
        label: '',
        data: dataValues,
        fill: false,
        backgroundColor: [
        'rgba(255, 99, 200)',
        'rgba(255, 159, 64)',
        'rgba(255, 205, 86)',
        'rgba(75, 192, 192)',
        'rgba(54, 162, 235)',
        'rgba(153, 102, 255)',
        'rgba(255, 99, 132)',
        'rgba(255, 10, 80)'
        ],
        borderColor: [
        'rgb(255, 99, 200)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(255, 99, 132)',
        'rgb(255, 10, 80)',
        ],
        borderWidth: 1
    }]
    /*
    datasets: [{
        label: labels[0],
        data: dataValues[0].toString(),
        backgroundColor: 'rgba(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        fill: false,
        borderWidth: 1
    },{
        label: labels[1],
        data: dataValues[1].toString(),
        backgroundColor: 'rgba(255, 159, 64)',
        borderColor: 'rgb(255, 159, 64)',
        fill: false,
        borderWidth: 1
    },{
        label: labels[2],
        data: dataValues[2].toString(),
        backgroundColor: 'rgba(255, 205, 86)',
        borderColor: 'rgb(255, 205, 86)',
        fill: false,
        borderWidth: 1
    },{
        label: labels[3],
        data: dataValues[3].toString(),
        backgroundColor: 'rgba(75, 192, 192)',
        borderColor: 'rgb(75, 192, 192)',
        fill: false,
        borderWidth: 1
    },{
        label: labels[4].toString(),
        data: dataValues[4],
        backgroundColor: 'rgba(54, 162, 235)',
        borderColor: 'rgb(54, 162, 235)',
        fill: false,
        borderWidth: 1
    },{
        label: labels[5],
        data: dataValues[5].toString(),
        backgroundColor: 'rgba(153, 102, 255)',
        borderColor: 'rgb(153, 102, 255)',
        fill: false,
        borderWidth: 1
    },{
        label: labels[6],
        data: dataValues[6].toString(),
        backgroundColor: 'rgba(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        fill: false,
        borderWidth: 1
    },{
        label: labels[7],
        data: dataValues[7].toString(),
        backgroundColor: 'rgba(255, 159, 64)',
        borderColor: 'rgb(255, 159, 64)',
        fill: false,
        borderWidth: 1
    }]*/
    };
    useEffect(() => {
            const config = {
                type: 'horizontalBar',
                data,
                options: {
                  indexAxis: 'y',
                  responsive: true,
                  scales:{beginAtZero:true,}
                  
                }
              };
        let ctx = document.getElementById('bar-chart').getContext('2d');
        window.myBar = new Chart(ctx, config);
    }, []);
    return (
        <Card>
            {/*<CardHeader color="pink" contentPosition="left">*/}
            <div className='bg-gradient-to-tr from-orange-600 to-orange-400 -mt-10 mb-4 rounded-xl text-white grid items-center px-4 h-24 shadow-lg-orange'>
                <h6 className="uppercase text-gray-200 text-xs font-medium">
                    Visión General
                </h6>
                <h2 className="text-white text-2xl">Solicitudes por Ciudad</h2>
            {/*</CardHeader>*/}
            </div>
            <CardBody>
                <div className="relative h-96">
                    <canvas id="bar-chart"></canvas>
                </div>
            </CardBody>
        </Card>
    );
}
