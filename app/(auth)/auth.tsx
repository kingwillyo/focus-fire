import { View, Text, ImageBackground, StatusBar, Image } from 'react-native'
import { styles } from '@/styles/auth.styles'
import { SafeAreaView } from 'react-native-safe-area-context';

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
          Build your fire streak. Stay committed to your goals and watch your productivity burn bright.
          </Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default auth