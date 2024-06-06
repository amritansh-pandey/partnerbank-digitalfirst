import TravelIcon from '../../assets/images/plane.svg';
import CarIcon from '../../assets/images/car.svg';
import Phone from '../../assets/images/device-phone-mobile.svg';

export const savingGoals = [
    {
        title: 'Latest smartphone',
        amountSaved: '€100',
        totalAmount: '€1,200',
        amountRemaining: '€1,100',
        monthlyContribution: '€100',
        endDate: '4th Mar 25',
        startMonth: 'Apr 2024',
        endMonth: 'Mar 2025',
        completionPercentage: 8,
        icon: Phone
    },
    {
        title: 'Trip to Greece',
        amountSaved: '€1,400',
        totalAmount: '€2,400',
        amountRemaining: '€1,000',
        monthlyContribution: '€100',
        endDate: '3rd Aug 24',
        startMonth: 'May 2023',
        endMonth: 'Aug 2024',
        completionPercentage: 58,
        icon: TravelIcon
    },
    {
        title: 'New Car Fund',
        amountSaved: '€1,200',
        totalAmount: '€5,000',
        amountRemaining: '€3,800',
        monthlyContribution: '€200',
        endDate: '5th Feb 25',
        startMonth: 'Jan 2023',
        endMonth: 'Feb 2025',
        completionPercentage: 24,
        icon: CarIcon
    },
]

export default savingGoals;