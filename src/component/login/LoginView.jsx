import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {Component} from 'react';
import {LoginViewStyle} from './Style';

const LoginView = ({submitName}) => {
  const [name, setName] = React.useState('');
  return (
    <View style={LoginViewStyle.container}>
      <Image
        source={{
          uri: 'https://media.istockphoto.com/vectors/quiz-sign-cartoon-vector-id541131404?s=612x612',
        }}
        style={{width: '100%', aspectRatio: 16 / 12}}
      />
      <View style={LoginViewStyle.textContainer}>
        <Text style={LoginViewStyle.textTitle}>
          Want to continue tell me your name!!!
        </Text>
      </View>
      <View style={{padding: 30}}>
        <TextInput
          style={LoginViewStyle.textInput}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />
      </View>
      <View style={LoginViewStyle.loginContainer}>
        <TouchableOpacity
          style={LoginViewStyle.loginButton}
          onPress={() => submitName(name)}
          activeOpacity={0.5}
          disabled={name === ''}>
          <Text style={LoginViewStyle.loginText}>Go on</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginView;
