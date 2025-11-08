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
        justifyContent: 'flex-end',
        padding: 24,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
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
        marginBottom: 50,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 18,
    },
    googleButton: {
        backgroundColor: COLORS.primary,
        padding: 15,
        width: '100%',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    googleIcon: {
        marginRight: 15,
        fontWeight: 'bold',
    },
    signInText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    signInLaterButton: {
        padding: 15,
        width: '100%',
        alignItems: 'center',
    },
    signInLaterText: {
        color: COLORS.inactive,
        fontSize: 16,
        fontWeight: 'bold',
    },
    footerText: {
        color: COLORS.inactive,
        fontSize: 12,
        alignItems: 'center',
        position: 'absolute', //fixes the text to the bottom of screen
        textAlign: 'center',
    },
    linkText: {
        textDecorationLine: 'underline',
    }
})