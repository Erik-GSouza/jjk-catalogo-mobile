# JJK Catálogo — Mobile

## Sobre o projeto

Aplicativo para gerenciamento de um catálogo pessoal de personagens de Jujutsu Kaisen.

Os dados são armazenados no MongoDB através de uma API REST.

## Tecnologias utilizadas

- React Native
- Expo SDK 58
- JavaScript
- React Navigation
- Native Stack
- React Native Paper

## Funcionalidades

- Cadastrar personagens
- Listar personagens
- Editar personagens
- Excluir personagens com confirmação
- Validação de nome obrigatório

## Estrutura do projeto

- App.js — configuração da navegação
- src/screens/Lista.js — listagem dos personagens
- src/screens/Formulario.js — cadastro e edição
- src/services/api.js — comunicação com o backend
- src/styles.js — estilos da aplicação

## Como executar

1. Clone o repositório.
2. Instale as dependências:

   npm install

3. Inicie o backend seguindo seu README.
4. Descubra o IPv4 do computador utilizando ipconfig.
5. Atualize a constante API_URL em src/services/api.js com o IPv4 do computador que executa o backend.
6. Conecte o celular e o computador à mesma rede local.
7. Inicie o Expo:

   npx expo start

8. Escaneie o QR Code utilizando o Expo Go.

## Backend

https://github.com/Erik-GSouza/jjk-catalogo-backend