import React from 'react';
import {
    View, 
    Image, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar, 
    Text,
    Pressable,
    Linking,
} from 'react-native';

const colorGithub = '#010409';
const colorFontGiithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const imageProfileGithub = 
    'https://avatars.githubusercontent.com/u/87427860?v=4';

const urlToMyGithub = 'https://github.com/evandreluiz'

const App = () => {

    const handlePressGoToGithub = async () => {
        console.log('Verificando link');
      const res = await Linking.canOpenURL(urlToMyGithub);
      console.log('Link aprovado');
      console.log('Abrindo link....');
      if(res) {
        await Linking.openURL(urlToMyGithub)
      }
    };
    return (
        <SafeAreaView style={style.container}>   
            <StatusBar backgroundColor={colorGithub} barStyle="light-content" />         
            <View style={style.content}>
                <Image 
                    accessibilityLabel="Foto: André Luiz na natureza" 
                    style={style.avatar}
                    source={{uri: imageProfileGithub}} 
                />
                <Text accessibilityLabel="Nome: André L R Ferreira"
                    style={[style.defaultText, style.nome]}>
                    André L R Ferreira
                </Text>
                <Text  accessibilityLabel="Nikname: ev andre luiz"
                    style={[style.defaultText, style.nickname]}>
                    evandreluiz
                </Text>
                <Text 
                    accessibilityLabel="Descrição: Analista de Sistemas | JavaScript | Python | PHP | SQL | HTML | CSS | React | React Native | Node.js | Git"
                    style={[style.defaultText, style.description]}>
                    Analista de Sistemas | JavaScript | Python | PHP | SQL | HTML | 
                    CSS | React | React Native | Node.js | Git
                </Text>
                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>
                            Open in Github
                        </Text>
                    </View>
                </Pressable>
            </View>   
        </SafeAreaView>
    ); 
};

export default App;

const style = StyleSheet.create({
    container: {
        // Column
        backgroundColor: colorGithub,   
        flex: 1, // Expandir a cor para toda a tela  
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: 'row'
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGiithub,
    },
    nome: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },
    nickname: {
        color: colorDarkFontGithub,
        fontSize: 18,
    },
    description: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});