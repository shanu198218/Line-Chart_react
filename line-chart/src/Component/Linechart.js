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
                    borderDash: [4, 5],
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
                        color: '#a9a9a9',

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
                        color: '#495057',

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
                        <br></br>
                        <h5 style={{ marginRight: '630px', color: '#a9a9a9', fontSize: 'small' }}>Your work summary</h5>
                        <h5 style={{ color: '#a9a9a9', marginRight: '690px', fontSize: 'small' }}>Nov - July </h5>
                        <div class="btn-group" role="group" aria-label="Basic example" style={{ marginLeft: '650px', size: 'small', width: '67px', height: '27px', padding: '4px 8px 4px 8px', position: 'relative' }}>
                            <button type="button" style={{ padding: '4px 8px 4px 8px', fontSize: 'small', marginTop: '-5px' }} class="btn btn-primary btn-sm" >Daily</button>
                            <button type="button" style={{ padding: '4px 2px 4px 2px', fontSize: 'small', marginTop: '-5px' }} class="btn btn-secondary btn-sm">Monthly</button>

                        </div>

                        <div className='chart'>
                            <Chart type="line" data={this.basicData} options={basicOptions} />


                            <div className='row lables' marginTop='-150%'>
                                <div className='col'>
                                    <h1 style={{
                                        width: '92px',
                                        height: '44px',

                                        /* Heading 2 */
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: '500',
                                        fontSize: '36px',
                                        lineHeight: '44px',

                                        /* identical to box height */

                                        /* Base/Grey 0 */
                                        color: '#FFFFFF',


                                        /* Inside auto layout */
                                        flex: 'none',
                                        order: '0',
                                        flexGrow: 0,
                                    }}>9845 </h1>
                                </div>

                                <div className='col'>
                                    <p style={{
                                        color: '#a9a9a9', display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        padding: '2px 6px',
                                        gap: '4px',
                                        width: '53px',
                                        height: '24px',
                                        background: 'rgba(48, 224, 161, 0.2)',
                                        borderRadius: '6px',
                                        flex: 'none',
                                        order: '0',
                                        flexGrow: '0',
                                    }}>* 829 </p>
                                </div>
                                <div className='col-7'>
                                    <p style={{
                                        width: '152px',
                                        height: '17px',
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        fontSize: '14px',
                                        lineHeight: '50px',
                                        color: '#FFFFFF',
                                        flex: 'none',
                                        order: 2,
                                        flexgrow: 0,
                                    }}>Sign-Ups past 30 days</p>
                                </div>


                            </div >
                        </div>
                    </div>
                </center >
            </div >

        )
    }
}

export default Linechart;