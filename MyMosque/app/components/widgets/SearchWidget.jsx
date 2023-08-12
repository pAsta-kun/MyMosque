import React from 'react';
import { View, StyleSheet, Image, TextInput, Keyboard, Text    } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
const SearchWidget = ({ navigation }) => {

    const dismissKeyboard = () => {
        if(Keyboard !== undefined)
                Keyboard.dismiss();
                dismissKeyboard
    };
    return (
        <View style={styles.widget} >
          <Image 
                source={require('../../../assets/images/Random3.png')} 
                style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                borderRadius: 41.5,
                opacity: .1,
                }}
            />
          <TouchableOpacity style={{width:'100%', height:'100%', margin: 0}} onPress={() => navigation.navigate('Map')}>

            <View style={styles.content}>
              <Ionicons name="search-outline" size={36} color={'#FFF4D2'}/>
              <Text style={styles.textarea} >Search for a Mosque</Text>
            </View>
          </TouchableOpacity>
        </View>
    );
};

export default SearchWidget;

const styles = StyleSheet.create({
    widget: {
      width: '97%',
      height: '10%',
      backgroundColor: '#57658E',
      borderRadius: 50,
      alignItems: 'center',
      marginVertical: '2.5%',
      zIndex: -1,
      justifyContent: 'center'
    },
    content:{
      flexDirection: 'row',
      width: '100%',
      height: '100%',
      paddingHorizontal: '10%',
      alignItems: 'center'
    },
    textarea: {
      borderColor: 'rgba(0,0,0,0)',
      color: '#FFF4D2',
      fontSize: 24,
      marginHorizontal: '3%'
    }
  
  });
