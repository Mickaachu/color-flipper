import {Text, View, Button} from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  const [color,setColor] = useState('');
  const changeColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
    setColor(`#${randomColor}`);
    
  }
  useEffect
  console.log(color)
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: color,
    }}>
      <Text>
        Click Button to change color
      </Text>
      <Button title="Change color" onPress={changeColor}/>
    </View>
  );
}

