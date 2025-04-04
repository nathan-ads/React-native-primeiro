import CustomButton from "@/components/ui/Title";
import React, { useState } from "react";
import { Button, Text, View } from "react-native";

export default function HomeScreen() {
    const [count, setCount] = useState(0);

    return(
    <View>
        <Text>Bem-vindo ao meu App</Text>
        <Text>Contador: {count}</Text>

        <Button title="Aumentar" onPress={() => {setCount( count + 1)}}/>
        <br></br>
        <Button title="Diminuir" onPress={() => {setCount( count - 1)}}/>
        <br></br>
        <Button title="Resetar" onPress={() => {setCount(0)}}/>
        <br></br>
            <CustomButton title="NOME"/>
        </View>
    );

}