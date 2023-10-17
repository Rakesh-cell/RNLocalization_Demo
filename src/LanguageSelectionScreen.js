import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import StringsOfLanguages from './StringsOfLanguages'
import { SafeAreaView } from 'react-native-safe-area-context';

const LanguageSelectionScreen = ({ navigation }) => {
    const lang = [
        { shortform: 'hi', longform: 'Hindi' },
        { shortform: 'ma', longform: 'Marathi' },
        { shortform: 'en', longform: 'English' },
        { shortform: 'fr', longform: 'French' },
    ];
    const setText = (value) => {
        StringsOfLanguages.setLanguage(value);
        navigation.navigate('ContentScreen', { selectedLanguage: value });
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.headingStyle}>
                    Please Select Preferred Language
                </Text>
                <Image
                    source={{
                        uri:
                            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/language.png',
                    }}

                    style={styles.imageStyle}
                />
                <ScrollView style={{ marginTop: 30, width: '80%', }}>
                    {lang.map((item, key) => (
                        <View style={styles.elementContainer} key={key}>
                            <Text
                                onPress={() => setText(item.shortform)}
                                style={styles.textStyle}>
                                {item.longform}

                            </Text>
                            <View style={styles.saparatorStyle} />
                        </View>
                    ))}
                </ScrollView>
                <Text
                    style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: 'grey',
                    }}>
                    Example of Localization in React Native
                    (Multi Language App)
                </Text>


            </View>
        </SafeAreaView>
    )
}

export default LanguageSelectionScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    headingStyle: {
        color: '#191919',
        fontSize: 25,
        textAlign: 'center',
    },
    imageStyle: {
        width: 64,
        height: 64,
        marginTop: 30,
    },
    elementContainer: {
        width: '100%',
        marginTop: 30,
        alignItems: 'center',
    },
    textStyle: {
        color: '#191919',
        fontSize: 25,
    },
    saparatorStyle: {
        height: 0.5,
        width: '60%',
        backgroundColor: '#C2C2C2',
        marginTop: 10,
    },
});
