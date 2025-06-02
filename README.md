# todo-challenge-app

Aplicativo ToDo desenvolvido com Expo, React Native e Expo Router, focado em uma experiência multiplataforma (iOS, Android e Web) com uma interface moderna e responsiva.

---

## 🚀 Como rodar o projeto

### Pré-requisitos

- Node.js (recomendado LTS)
- Expo
- Android Studio / Xcode (para emulação de Android/iOS) ou Dispositivo físico

### Passos para iniciar

1. Clone o repositório:

```bash
git clone https://github.com/omateusamaral/todo-challenge-app
cd todo-challenge-app
```

2. Instale as dependências:

```bash
npm install
```

3. Rode o projeto:

- Para iniciar no modo desenvolvimento (com túnel para acesso remoto):

```bash
npm run start
```

- Para rodar no Android:

```bash
npm run android

```

- Para rodar no iOS:

```bash
npm run ios

```

- Para rodar no navegador Web:

```bash
npm run web

```

## 🧰 Tecnologias e decisões técnicas

### Expo & React Native

- **Expo**: Simplifica o desenvolvimento multiplataforma, acelerando o processo sem a necessidade de configurar ambientes nativos complexos.
- **React Native**: Framework principal para construir interfaces nativas para iOS e Android usando React.

### Navegação

- **expo-router**: Usado para facilitar o roteamento baseado em arquivos, permitindo navegação declarativa e estrutura de pastas intuitiva.

### UI e Estilização

- **nativewind + tailwindcss**: Para estilização rápida e consistente utilizando classes utilitárias, seguindo o paradigma Tailwind CSS no React Native.

- **@expo/vector-icons**: Ícones vetoriais de alta qualidade, otimizados para performance e aparência nativa.

### Estado e Formulários

- **formik + yup**: Gerenciamento de formulários e validação robusta e declarativa, simplificando o controle de inputs e erros.

### Performance e UX

- **react-native-reanimated** e **react-native-gesture-handler**: Para animações suaves e gestos responsivos.
- **use-debounce**: Otimização em inputs com debounce para evitar execuções excessivas em buscas e filtros.

### Armazenamento e Dados

- **@react-native-async-storage/async-storage**: Para armazenamento local persistente, garantindo que os dados do usuário (ex: tarefas) sejam mantidos mesmo após o app ser fechado.

### Desenvolvimento e Qualidade

- **typescript**: Tipagem estática para maior robustez no código.
- **eslint + eslint-config-expo**: Padronização de código e prevenção de erros comuns.
- **@babel/core**: Transpila o código para compatibilidade com várias versões de JS.

---

## Estrutura dos scripts

- `start`: Inicializa o projeto no Expo com túnel para acesso remoto (útil para testes em dispositivos físicos).
- `android`: Compila e executa o app em um dispositivo ou emulador Android.
- `ios`: Compila e executa o app em um dispositivo ou simulador iOS.
- `web`: Inicia o projeto para rodar no navegador.
- `lint`: Roda o ESLint para análise e padronização do código.

---

Qualquer dúvida ou contribuição, fique à vontade para abrir uma issue ou pull request!

---
