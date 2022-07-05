import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import LoginView from './login/LoginView';

const HomePage = () => {
  const [userName, setUserName] = useState('');

  if (userName === '') {
    return <LoginView submitName={setUserName} />;
  }
  return (
    <View>
      <Text style={{marginTop: 40, textAlign: "center", fontSize: 30}}>{userName}</Text>
      <Button title='Go back' onPress={() => setUserName('')}/>
    </View>
  );
};

export default HomePage;
