import { StyleSheet, View, FlatList } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyle } from "../../constant/styles";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2025-04-03')
    },
    {
        id: 'e2',
        description: 'A pair of trouser',
        amount: 89.20,
        date: new Date('2025-04-08')
    },
    {
        id: 'e3',
        description: 'Banana',
        amount: 90.00,
        date: new Date('2025-04-15')
    },
    {
        id: 'e4',
        description: 'A pair of shirt',
        amount: 100.99,
        date: new Date('2025-04-27')
    },
    {
        id: 'e5',
        description: 'Book',
        amount: 190.99,
        date: new Date('2025-04-28')
    },
    {
        id: 'e6',
        description: 'A pair of trouser',
        amount: 89.20,
        date: new Date('2025-04-08')
    },
    {
        id: 'e7',
        description: 'Banana',
        amount: 90.00,
        date: new Date('2025-04-15')
    },
    {
        id: 'e8',
        description: 'A pair of shirt',
        amount: 100.99,
        date: new Date('2025-04-27')
    },
    {
        id: 'e9',
        description: 'Book',
        amount: 190.99,
        date: new Date('2025-04-28')
    },
]

function ExpensesOuput({ expenses, expensesPeriod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES}/>
        </View>
    );
}

export default ExpensesOuput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyle.colors.primary700,
    }
});