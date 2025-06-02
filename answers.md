```
Pergunta: Como você geralmente se mantém atualizado com novas tecnologias? Cite
fontes ou métodos que utiliza, como YouTube, cursos online ou a
documentação oficial.

Resposta: utilizo a combinação de documentações oficiais, canais de youtube, cursos online como na (udemy, full cycle e rocketseat), artigos no medium e hands-on para não só ficar na teoria, mas também testar as novidades.
```

```
Pergunta: No React, o uso de function e arrow function gera discussões entre
os desenvolvedores. Qual a sua opinião sobre as duas abordagens?
(Explique com exemplos práticos onde cada uma poderia ser mais
vantajosa.)

Resposta: Em geral, pra componentes React em si, usar a função normal pode ser um pouco melhor pro debugging ao utilizar a ferramenta react devTools pois ela mostra o nome do ofensor. Mas pra coisas rápidas e callbacks, a arrow function é mais elegante e direta. No fim das contas, use o que deixar seu código mais claro e fácil de ler além fácil de usar em botões com onClick/onPress.
```

```
Pergunta: Relate uma situação desafiadora que enfrentou no desenvolvimento de um
app. Pode ser um bug complexo ou a implementação de uma funcionalidade
crítica. Como lidou com isso? Qual foi o resultado?

Resposta: em um projeto de fretagem em alguns especificos dispositivos android os pontos de entrega era mal renderizado causando perca de dados no mapa. foi preciso utilizar Sentry para rastrear o problema. Análisei o código que fazia a intermediação de entre o mapa e pontos de coleta/entrega e foi feito um refactor para melhorar as promises que gerava perca de dados.
```

```
Pergunta: Dê um exemplo de problema resolvido usando Context API e Hooks no
React Native. Descreva o problema, sua solução e o impacto.

Resposta: No aplicativo de fretagem, eu precisava compartilhar estado do usuário autenticado em vários componentes, evitando prop drilling. A solução foi usar context API do react para criar um estado global na aplicação de autenticação, simplificando a gestão do estado, evitando props desnecessárias e facilitando a manutenção e escalabilidade do aplicativo.
```

```
Pergunta:Explique como configuraria o roteamento entre páginas em um aplicativo
React Native. Cite as bibliotecas que utilizaria e por quê.

Resposta: Para configurar o roteamento entre telas em React Native, costumo utilizar a biblioteca React Navigation, que é a mais popular e robusta da comunidade. Utilizo o stack navigator para navegação padrão entre telas (push/pop). Para abas, uso o bottom tab navigator. A utilização do mesmo é ideal por conta que é amplamente usado na comunidade, fácil integração com react. Hoje em dia temos o EXPO que facilita ainda mais o processo de configuração de páginas.
```

```
Pergunta: Suponha que um app React Native está travando em um dispositivo
específico. Descreva seu processo para identificar e resolver o problema.
(Inclua ferramentas e práticas de debugging.)

Resposta:Se um app React Native está travando em um dispositivo específico, meu processo de debugging é: Reproduzir o problema: Testo no mesmo dispositivo ou em simuladores/emuladores similares.
Logs detalhados: Uso console.log, e ferramentas como React Native Debugger e Flipper para inspecionar o estado, chamadas de rede e performance. Crash Reports: Analiso relatórios no Sentry, para erros e stack traces. Inspeção de código: Foco em hooks, ciclo de vida dos componentes e chamadas assíncronas relacionadas.
Priling: Uso o Profiling API do React Native para verificar uso excessivo de memória.
```
