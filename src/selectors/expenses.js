// Get visible expenses
import moment from 'moment';
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    // console.log('sortBy: ', sortBy);
    return expenses.filter( (expense)=>{
        const startDateMatch = startDate ? startDate.isSameOrBefore(expense.createdAt, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(expense.createdAt, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    
        // console.log(expense.description, ': ');
        // console.log('expense.createdAt: ',expense.createdAt);
        // console.log('startDate: ',startDate);
        // console.log('startDateMatch: ',startDateMatch);
        // const endDateMatch = 
        // const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        // return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=> {
        switch (sortBy) {
            case 'date':
                return a.createdAt < b.createdAt ? 1 : -1;
            case 'amount':
                return a.amount < b.amount ? 1 : -1;
            // if (sortBy === 'date') {
            //     return a.createdAt < b.createdAt ? 1 : -1;
            // }
            // if (sortBy === 'amount') {
            //     return -(a.amount - b.amount);
            // }
        }
    });
};

export default getVisibleExpenses;