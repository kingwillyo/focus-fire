import { View, Text, ImageBackground, StatusBar, Image, TouchableOpacity } from 'react-native'
import { styles } from '@/styles/auth.styles'
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS } from '@/constants/themes';

const bgImage = require('../../assets/images/background.png');
const flameIcon = require('../../assets/images/flame icon.png');

const auth = () => {
  return (
    <ImageBackground source={bgImage} style={styles.Background}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <Image source={flameIcon} style={styles.icon}/>
          </View>
          <Text style={styles.title}>Ignite Your Focus</Text>
          <Text style={styles.subtitle}>
          Build your fire streak. Stay committed to{'\n'} your goals and watch your productivity burn{'\n'} bright.
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity 
            style={styles.googleButton}>
              <MaterialCommunityIcons name='google' size={24} color={COLORS.white} style={styles.googleIcon}/>
              <Text style={styles.signInText}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.signInLaterButton}
            >
              <Text style={styles.signInLaterText}>Sign in Later</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.footerText}>
            By continuing, you agree to our{' '}
            <Text
              style={styles.linkText}
              onPress={() => {}}
            >Terms of Service{' '}
            </Text>
            <Text>and{' '}</Text>
            <Text
              onPress={() => {}}
              style={styles.linkText}
            >Privacy Policy.</Text>
          </Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default auth