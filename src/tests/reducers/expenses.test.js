
import expensesReducer from './../../reducers/expenses';
import expenses from './../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense with a valid id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense with a invalid id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 123
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

test('should add expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: expenses[1]
    };
    const state = expensesReducer(undefined, action);
    
    expect(state).toEqual([expenses[1]]);
});

test('should edit expense', () => {
    const updates = {
        description: 'something new',
        note: 'some note',
        amount: 1000
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], {...expenses[1], ...updates} , expenses[2]])
});

test('should not edit expense with invalid id', () => {
    const updates = {
        description: 'something new',
        note: 'some note',
        amount: 1000
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: 123,
        updates
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses)
});