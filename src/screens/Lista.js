import { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, Alert } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';

import { listarPersonagens, excluirPersonagem } from '../services/api';
import styles from '../styles';

export default function Lista({ navigation }) {

    const [personagens, setPersonagens] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState('');

    const telaVisivel = useIsFocused();


    async function carregarPersonagens() {

        setCarregando(true);
        setErro('');

        try {

        const dados = await listarPersonagens();
        setPersonagens(dados);

        } catch (error) {

        console.error(error);
        setErro('Não foi possível carregar os personagens.');

        } finally {

        setCarregando(false);

        }
    }


    useEffect(() => {

        if (telaVisivel) {
        carregarPersonagens();
        }

    }, [telaVisivel]);


    function confirmarExclusao(personagem) {

        Alert.alert(
        'Excluir personagem',
        `Deseja excluir ${personagem.nome}?`,
        [
            {
            text: 'Cancelar',
            style: 'cancel'
            },
            {
            text: 'Excluir',
            style: 'destructive',
            onPress: async () => {

                try {
                await excluirPersonagem(personagem._id);

                await carregarPersonagens();

                } catch (error) { Alert.alert('Erro', error.message);

                }
            }
            }
        ]
        );
    }


    function renderizarPersonagem({ item }) {

        return (
        <Card style={styles.card}>

            <Card.Content>

            <Text style={styles.nome}>
                {item.nome}
            </Text>

            <Text style={styles.descricao}>
                {item.descricao || 'Sem descrição'}
            </Text>

            </Card.Content>

            <Card.Actions>

            <Button
                onPress={() => navigation.navigate('Formulario', {
                personagem: item
                })}
            >
                Editar
            </Button>

            <Button
                textColor="#ff6b6b"
                onPress={() => confirmarExclusao(item)}
            >
                Excluir
            </Button>

            </Card.Actions>

        </Card>
        );
    }

    return (
        <View style={styles.container}>

        <Text style={styles.titulo}>
            Meus personagens
        </Text>

        <Button
            mode="contained"
            style={styles.botao}
            onPress={() => navigation.navigate('Formulario')}
        >
            Novo personagem
        </Button>

        {carregando && (
            <ActivityIndicator size="large" color="#bb99ff" />
        )}


        {!carregando && erro !== '' && (
            <Text style={styles.mensagem}>
            {erro}
            </Text>
        )}

        {/*lista de char */}
        {!carregando && erro === '' && (
            <FlatList
            data={personagens}
            keyExtractor={item => item._id}
            renderItem={renderizarPersonagem}
            ListEmptyComponent={
                <Text style={styles.mensagem}>
                Nenhum personagem cadastrado.
                </Text>
            }
            />
        )}

        </View>
    );
    }