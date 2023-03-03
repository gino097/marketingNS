import { useEffect } from 'react';
import Chart from 'chart.js'
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';

export default function ChartLine(data) {
    const {solicitudes}=data;
    var datalist=new Int32Array(12);
    solicitudes.map((element)=>{
        if(element.SOLICI_FECING.split('-')[1]==='1') datalist[0]+=1;
        else if(element.SOLICI_FECING.split('-')[1]==='2') datalist[1]+=1;
        else if(element.SOLICI_FECING.split('-')[1]==='3') datalist[2]+=1;
        else if(element.SOLICI_FECING.split('-')[1]==='4') datalist[3]+=1;
        else if(element.SOLICI_FECING.split('-')[1]==='5') datalist[4]+=1;
        else if(element.SOLICI_FECING.split('-')[1]==='6') datalist[5]+=1;
        else if(element.SOLICI_FECING.split('-')[1]==='7') datalist[6]+=1;
        else if(element.SOLICI_FECING.split('-')[1]==='8') datalist[7]+=1;
        else if(element.SOLICI_FECING.split('-')[1]==='9') datalist[8]+=1;
        else if(element.SOLICI_FECING.split('-')[1]==='10') datalist[9]+=1;
        else if(element.SOLICI_FECING.split('-')[1]==='11') datalist[10]+=1;
        else if(element.SOLICI_FECING.split('-')[1]==='12') datalist[11]+=1;
    });
    useEffect(() => {
        var config = {
            type: 'line',
            responsive:true,
            data: {
                labels: [
                    'Enero',
                    'Febrero',
                    'Marzo',
                    'Abril',
                    'Mayo',
                    'Junio',
                    'Julio',
                    'Agosto',
                    'Septiembre',
                    'Octubre',
                    'Noviembre',
                    'Diciembre',
                ],
                datasets: [
                    {
                        label: new Date().getFullYear(),
                        backgroundColor: '#1e40af',
                        borderColor: '#1e40af',
                        data: [datalist[0],datalist[1],datalist[2],datalist[3],datalist[4],datalist[5],datalist[6],datalist[7], datalist[8], datalist[9], datalist[10], datalist[11]],
                        fill: false,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: false,
                    text: 'Cartas vendidas',
                    fontColor: 'white',
                },
                legend: {
                    labels: {
                        fontColor: 'black',
                    },
                    align: 'end',
                    position: 'bottom',
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true,
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontColor: 'rgba(17,17,17,.7)',
                            },
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: 'Mes',
                                fontColor: 'white',
                            },
                            gridLines: {
                                display: false,
                                borderDash: [2],
                                borderDashOffset: [2],
                                color: 'rgba(33, 37, 41, 0.3)',
                                zeroLineColor: 'rgba(0, 0, 0, 0)',
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                fontColor: 'rgba(17,17,17,.7)',
                            },
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: 'Value',
                                fontColor: 'white',
                            },
                            gridLines: {
                                borderDash: [3],
                                borderDashOffset: [3],
                                drawBorder: false,
                                color: 'rgba(17, 17, 17, 0.15)',
                                zeroLineColor: 'rgba(33, 37, 41, 0)',
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                },
            },
        };
        var ctx = document.getElementById('line-chart').getContext('2d');
        window.myLine = new Chart(ctx, config);
    }, []);

    return (
        <Card>
            {/*<CardHeader color={'deepOrange'} contentPosition="left">*/}
            <div className='bg-gradient-to-tr from-rose-600 to-rose-400 -mt-10 mb-4 rounded-xl text-white grid items-center px-4 h-24 shadow-lg-rose'>
                <h6 className="uppercase text-gray-200 text-xs font-medium">
                    Visión General
                </h6>
                <h2 className="text-white text-2xl">Solicitudes por Mes</h2>
            {/*</CardHeader>*/}
            </div>
            <CardBody>
                <div className="relative h-96">
                    <canvas id="line-chart"></canvas>
                </div>
            </CardBody>
        </Card>
    );
}
