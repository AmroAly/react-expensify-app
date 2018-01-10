
import selectExpensesTotal from './../../selectors/expenses-total';
import expenses from './../fixtures/expenses';

test('sould return 0 if no expenses', () => {
    const response = selectExpensesTotal([]);
    expect(response).toBe(0);
});

test('should correctly add up a single expense', () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(expenses[0].amount);
});

test('should correctly add up multiple expenses', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(114195);
});