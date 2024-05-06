import React from 'react'
import './style.css';
import Entertainment from '../../assets/images/entertainment.svg'
import Grocery from '../../assets/images/grocery.svg'
import Food from '../../assets/images/food.svg'
import Shopping from '../../assets/images/shopping.svg'
import Travel from '../../assets/images/travel.svg'
import Utility from '../../assets/images/utility.svg'
import Others from '../../assets/images/others.svg'
import TransactionProgressBar from './TransactionProgressBar';

function TransactionCategories() {
    return (
        <div className='transaction-categories-container'>
            <div className='transaction-categories-title'>
                <span className='subheading3'>Transaction categories</span>
            </div>
            <div className='transacton-category-info-container'>
                <div className='transaction-icon1'>
                    <img src={Entertainment} />
                </div>
                <div className='transaction-progressbar-container'>
                    <div className='transaction-name-amount'>
                        <span className='body1'>Entertainment</span>
                        <span className='body4'>$73.56</span>
                    </div>
                    <div className='transaction-progress-bar'>
                        <TransactionProgressBar  progress={9} color="#2BAAB9" />
                    </div>
                    <div className='transaction-name-amount'>
                        <span className='caption'>2 Transactions (9%)</span>
                        <span className='caption'>7,356pts earned</span>
                    </div>
                </div>
            </div>

            <div className='transacton-category-info-container'>
                <div className='transaction-icon2'>
                    <img src={Grocery} />
                </div>
                <div className='transaction-progressbar-container'>
                    <div className='transaction-name-amount'>
                        <span className='body1'>Grocery</span>
                        <span className='body4'>$122.61</span>
                    </div>
                    <div className='transaction-progress-bar'>
                        <TransactionProgressBar  progress={15} color="#79B252" />
                    </div>
                    <div className='transaction-name-amount'>
                        <span className='caption'>1 Transactions (15%)</span>
                        <span className='caption'>12,261pts earned</span>
                    </div>
                </div>
            </div>

            <div className='transacton-category-info-container'>
                <div className='transaction-icon3'>
                    <img src={Food} />
                </div>
                <div className='transaction-progressbar-container'>
                    <div className='transaction-name-amount'>
                        <span className='body1'>Food & dinningt</span>
                        <span className='body4'>$147.14</span>
                    </div>
                    <div className='transaction-progress-bar'>
                        <TransactionProgressBar  progress={18} color="#FB853C" />
                    </div>
                    <div className='transaction-name-amount'>
                        <span className='caption'>3 Transactions (18%)</span>
                        <span className='caption'>14,714pts earned</span>
                    </div>
                </div>
            </div>

            <div className='transacton-category-info-container'>
                <div className='transaction-icon4'>
                    <img src={Shopping} />
                </div>
                <div className='transaction-progressbar-container'>
                    <div className='transaction-name-amount'>
                        <span className='body1'>Shopping</span>
                        <span className='body4'>$188.026</span>
                    </div>
                    <div className='transaction-progress-bar'>
                        <TransactionProgressBar  progress={23} color="#9455BE" />
                    </div>
                    <div className='transaction-name-amount'>
                        <span className='caption'>2 Transactions (23%)</span>
                        <span className='caption'>18,802pts earned</span>
                    </div>
                </div>
            </div>

            <div className='transacton-category-info-container'>
                <div className='transaction-icon5'>
                    <img src={Travel} />
                </div>
                <div className='transaction-progressbar-container'>
                    <div className='transaction-name-amount'>
                        <span className='body1'>Travel</span>
                        <span className='body4'>$40.88</span>
                    </div>
                    <div className='transaction-progress-bar'>
                        <TransactionProgressBar  progress={5} color="#FFA833" />
                    </div>
                    <div className='transaction-name-amount'>
                        <span className='caption'>1 Transactions (5%)</span>
                        <span className='caption'>4,088pts earned</span>
                    </div>
                </div>
            </div>

            <div className='transacton-category-info-container'>
                <div className='transaction-icon6'>
                    <img src={Utility} />
                </div>
                <div className='transaction-progressbar-container'>
                    <div className='transaction-name-amount'>
                        <span className='body1'>Utility & Bills</span>
                        <span className='body4'>$163.49</span>
                    </div>
                    <div className='transaction-progress-bar'>
                        <TransactionProgressBar  progress={20} color="#C74765" />
                    </div>
                    <div className='transaction-name-amount'>
                        <span className='caption'>4 Transactions (20%)</span>
                        <span className='caption'>16,349pts earned</span>
                    </div>
                </div>
            </div>

            <div className='transacton-category-info-container'>
                <div className='transaction-icon7'>
                    <img src={Others} />
                </div>
                <div className='transaction-progressbar-container'>
                    <div className='transaction-name-amount'>
                        <span className='body1'>Others</span>
                        <span className='body4'>$81.74</span>
                    </div>
                    <div className='transaction-progress-bar'>
                        <TransactionProgressBar  progress={10} color="#F960A6" />
                    </div>
                    <div className='transaction-name-amount'>
                        <span className='caption'>7 Transactions (10%)</span>
                        <span className='caption'>8,174pts earned</span>
                    </div>
                </div>
            </div>


            <div style={{height: "200px"}}></div>
        </div>
    )
}

export default TransactionCategories