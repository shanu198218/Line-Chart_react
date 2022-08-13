import React, { Component } from 'react';
import { Chart } from 'primereact/chart';
// 
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "../Component/Linechart.css";

class Linechart extends Component {

    constructor(props) {
        super(props);

        this.basicData = {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,],
            datasets: [
                {
                    label: 'Last Month',
                    data: [150, 400, 420, 70, 140, 450, 400, 490, 410, 0, -50, 300, 380, 500, 400, -150, -150, 400, 420],
                    fill: true,
                    borderColor: '#1e90ff',
                    tension: .100,

                },
                {
                    label: 'This Month',
                    data: [150, 450, 400, 120, 90, 380, 350, 360, 520, 450, 400, 150, 0, -50, 200, 500, 550, 500, 490],
                    fill: true,
                    borderColor: '#ff1493',
                    tension: .100,

                }
            ]
        };


        this.lineStylesData = {
            labels: ['November', 'December', 'January', 'Febuary', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Last Month',

                    data: [150, 400, 420, 400, 390, 120, 170, 490, 410, 490, 400, -0, -200, 300, 400, 500, 450, 140, 0, 500, 400, 490, 500, 0, 0, 360, 400],
                    fill: true,
                    tension: .4,
                    borderColor: '#1e90ff',

                },
                {
                    label: 'This Month',
                    data: [150, 450, 400, 110, 190, 450, 400, 350, 370, 450, 400, 150, 0, 200, 500, 190, 0, 500, 590, 500],
                    fill: true,
                    borderDash: [5, 5],
                    tension: .4,
                    borderColor: '#ff1493',

                },

            ]
        };

        this.options = this.getLightTheme();
    }

    getLightTheme() {
        let basicOptions = {
            maintainAspectRatio: false,
            aspectRatio: .6,

            plugins: {
                legend: {
                    labels: {
                        color: '#a9a9a9'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: 'black',


                    },

                },
                y: {
                    ticks: {
                        color: '#495057'
                    },


                }
            }
        };



        return {
            basicOptions,

        }
    }

    render() {
        const { basicOptions } = this.options;

        return (
            <div>
                <center>
                    <br></br>

                    <div className="card"  >

                        <h5 style={{ marginRight: '470px', color: '#a9a9a9', fontSize: 'small' }}>Your work summary</h5>
                        <h5 style={{ color: '#a9a9a9', marginRight: '525px', fontSize: 'small' }}>Nov - July </h5>
                        <div class="btn-group" role="group" aria-label="Basic example" style={{ marginLeft: '470px', size: 'small' }}>
                            <button type="button" class="btn btn-primary btn-sm">Daily</button>
                            <button type="button" class="btn btn-secondary btn-sm">Monthly</button>

                        </div>


                        <Chart type="line" data={this.basicData} options={basicOptions} />


                        <div className='row lables' marginBottom='90%'>
                            <div className='col'>
                                <h1 style={{ color: '#a9a9a9', fontSize: 'large' }}>9845 </h1>
                            </div>
                            <div className='col'>
                                <p style={{ color: '#008000', fontSize: 'small' }}>* 829 </p>
                            </div>
                            <div className='col-7'>
                                <p style={{ color: '#a9a9a9', fontSize: 'small' }}>Sign-Ups past 30 days</p>
                            </div>


                        </div >
                    </div>
                </center >
            </div >

        )
    }
}

export default Linechart;