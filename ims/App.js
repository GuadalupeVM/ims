import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function App() {
  

  const [peso, setpeso] = useState();
  const [altura, setdaltura] = useState();
  const [ims, setims] = useState();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 100,
      }}>
      <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
        <Text style={{ textAling: 'center' }}>Peso (en Kg) :</Text>

        <TextInput
          style={{
            backgroundColor: 'pink',
            width: 150,
            height: 30,
            borderWidth: 1,
            borderRadius: 50,
            padding: 10,
          }}
          
          value={peso}
          onChangeText={setpeso}></TextInput>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
        <Text style={{ textAling: 'center' }}>Altura(en cm):</Text>

        <TextInput
          style={{
            backgroundColor: 'pink',
            width: 150,
            height: 30,
            borderWidth: 1,
            borderRadius: 50,
            padding: 10,
          }}
          
          value={altura}
          onChangeText={setdaltura}>
          
        </TextInput>
      </View>

      <View  style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            width: 80,
            height: 40,
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'violet',
          }}
          onPress={() => setims(Number(peso) / (Number(altura))**2)}>
          <Text>Calcular</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>


      <Text style={{ textAling: 'center' }}>Tu IMC es:</Text>

        <TextInput
          style={{
            backgroundColor: 'pink',
            width: 150,
            height: 30,
            borderWidth: 1,
            borderRadius: 50,
            padding: 10,
          }}
          
          value={ims}
          onChangeText={setims}>
          
        </TextInput>


      
      </View>
    </View>
  );
}
