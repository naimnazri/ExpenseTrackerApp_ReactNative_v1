import { StyleSheet, Text, View } from "react-native";
import ExpensesOuput from "../components/ExpensesOutput/ExpensesOutput";

function RecentExpenses() {
    return (
        <ExpensesOuput expensesPeriod="Last 7 Days"/>
    );
}

export default RecentExpenses;

const styles = StyleSheet.create({

});