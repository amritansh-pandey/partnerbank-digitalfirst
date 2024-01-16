import React from 'react'
import './style.css'
import '../style.css'


function MonthlySpendCard({money}) {
    return (
        <div className='card-container'>
            <div className='monthly_text_container'>
                <div>
                    <span className='body3'>Total monthly spend</span>
                </div>
                <div>
                    <span className='title2'>{money}</span>
                </div>

                <div>
                    <span className='caption'>10% less than last month</span>
                </div>
            </div>
<div className='graph_month'>
            <div className='graph_container'>
         
                    <div className='graph'>
                        <div className='bar1'></div>
                        
                   
                </div>

                <div className='graph'>
                        <div className='bar2'></div>
                      
                   
                </div>

                <div className='graph'>
                        <div className='bar3'></div>
                      
                   
                </div>

                <div className='graph'>
                        <div className='bar4'></div>
                       
                   
                </div>

                <div className='graph'>
                        <div className='bar5'></div>
                        
                   
                </div>
            </div>
            <div className='month'>
    <div className='month_text'>Jan</div>
    <div className='month_text'>Feb</div>
    <div className='month_text'>Mar</div>
    <div className='month_text'>Apr</div>
    <div className='month_text'>May</div>
</div>
        </div>
        </div>
    )
}

export default MonthlySpendCard