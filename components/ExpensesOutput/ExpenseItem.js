import { Pressable, StyleSheet, View, Text } from "react-native";
import { GlobalStyle } from "../../constant/styles";
import { getFormattedDate } from "../../util/date";

function ExpenseItem({description, amount, date}) {
    return (
        <Pressable>
            <View style={styles.expenseItem}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>{description}</Text>
                    <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    );
}

export default ExpenseItem;

const styles = StyleSheet.create({
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyle.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalStyle.colors.gray500,
        shadowRadius: 4,
        ShadowOffset: { width: 1, height: 1},
        shadowOpacity: 0.4,
    },
    textBase: {
        color: GlobalStyle.colors.primary50
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold'
    },
    amountContainer: {
        paddingHorizontal: 12, 
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth: 80,
    },
    amount: {
        color: GlobalStyle.colors.primary500,
        fontWeight: 'bold'
    }
});