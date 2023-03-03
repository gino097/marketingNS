import { useEffect } from 'react';
import Chart from 'chart.js'
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';

export default function ChartLine(data) {
    const {aprobadas, rechazadas}=data;
    useEffect(() => {
        var config = {
            type: 'pie',
            responsive:true,
            data: {
                labels: [
                    'Aprobadas',
                    'Rechazadas',
                ],
                datasets: [
                    {
                        data: [aprobadas, rechazadas],
                        backgroundColor: [
                            "#1e40af",
                            "#ea580c"
                        ]
                    }
                ],
            },
        };
        var ctx = document.getElementById('pie-chart').getContext('2d');
        window.myLine = new Chart(ctx, config);
    }, [aprobadas, rechazadas]);
    //console.log("bg-gradient-to-tr ".concat("from-blue-700", " ").concat("to-blue-500", " -mt-10 mb-4 rounded-xl text-white grid items-center ").concat("px-4", " ").concat("shadow-lg-indigo", " "));
    return (
        <Card>
            {/*<CardHeader className="bg-blue-700" contentPosition="left">*/}
                <div className='bg-gradient-to-tr from-blue-800 to-blue-800 -mt-10 mb-4 rounded-xl text-white grid items-center px-4 h-24 shadow-lg-indigo'>
                <h6 className="uppercase text-gray-200 text-xs font-medium">
                    Visión General
                </h6>
                <h2 className="text-white text-2xl">Transacciones</h2>
                {/*</CardHeader>*/}
                </div>
            <CardBody>
                <div className="relative h-96">
                    <canvas id="pie-chart"></canvas>
                </div>
            </CardBody>
        </Card>
    );
}
