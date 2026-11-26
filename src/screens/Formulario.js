import { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import {
  cadastrarPersonagem,
  editarPersonagem
} from '../services/api';

import styles from '../styles';

export default function Formulario({ navigation, route }) {

  //recebe char se for uma ediçao
  const personagem = route.params?.personagem;

  //ve se esta cadastrando ou editando
  const editando = !!personagem;

  //se for uma ediçao
  const [nome, setNome] = useState(personagem?.nome ?? '');
  const [descricao, setDescricao] = useState(personagem?.descricao ?? '');
  const [salvando, setSalvando] = useState(false);

  //cadastra/att char
  async function salvar() {

    if (!nome.trim()) {
      Alert.alert('Aviso', 'O nome é obrigatório.');
      return;
    }

    setSalvando(true);

    try {
      const dados = {
        nome: nome.trim(),
        descricao: descricao.trim()
      };

      if (editando) {

        await editarPersonagem(personagem._id, dados);

      } else {

        await cadastrarPersonagem(dados);

      }

      
      navigation.goBack();

    } catch (error) {

      Alert.alert('Erro', error.message);

    } finally {

      setSalvando(false);

    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        {editando ? 'Editar personagem' : 'Novo personagem'}
      </Text>

      <TextInput
        label="Nome *"
        mode="outlined"
        value={nome}
        onChangeText={setNome}
        style={styles.campo}
      />

      <TextInput
        label="Descrição"
        mode="outlined"
        value={descricao}
        onChangeText={setDescricao}
        multiline
        numberOfLines={4}
        style={styles.campo}
      />

      <Button
        mode="contained"
        onPress={salvar}
        loading={salvando}
        disabled={salvando}
        style={styles.botao}
      >
        Salvar
      </Button>

      <Button
        mode="outlined"
        onPress={() => navigation.goBack()}
        disabled={salvando}
      >
        Cancelar
      </Button>

    </View>
  );
}