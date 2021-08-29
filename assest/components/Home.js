import {format} from 'prettier';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Wer } from '../training/assest/components/Profile'
import {
  Button,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

class Inputing extends Component {
  render() {
    return (
      <View>
        <TextInput style={{borderWidth: 2, borderBottomColor: 'orange'}} />
        <TextInput style={{borderWidth: 2, borderBottomColor: 'blue'}} />
        <TextInput
          placeholder={'yaz knk'}
          style={{borderWidth: 2, borderBottomColor: 'green'}}
        />
      </View>
    );
  }
}

export default class Exporting extends Component {
  state = {
    myState: 'burası state, burdan çıkış yok',
  };

  MakeClean = () => this.setState({myState: 'tıklandı'});

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <KeyboardAvoidingView>
            <View>
              <Inputing />
              <Text>{this.state.myState}</Text>
              <Text
                onPress={this.MakeClean}
                style={{
                  justifyContent: 'center',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                tıkla knk
              </Text>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
