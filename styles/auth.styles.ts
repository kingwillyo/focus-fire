import { COLORS } from "@/constants/themes";
import { Background } from "@react-navigation/elements";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    Background: {
        flex: 1,
    },
    safeArea: {
        flex: 1
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60,
    },
    icon: {
        width: 140,
        height: 140,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: COLORS.white,
        marginBottom: 12,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        color: COLORS.inactive,
        textAlign: 'center',
        lineHeight: 25,
        marginBottom: 40,
    },
})