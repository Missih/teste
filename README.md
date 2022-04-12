# Introdução 

Nesse projeto, construi pensando em garantir a acessibilidade ao utilizar algum recurso e ter facilidade na manutenção entre os meus componentes.

Para poder reutilizar meus estilos e acessar eles com facilidade, utilizei a biblioteca Styled Components, nela posso criar componentes em forma de css, também me ajudou na criação dos temas onde pude acessá-los como propriedades dentro do código mais fácil, além disso, é melhor em renderizar os atributos do que o próprio css puramente, em questões de perfomance.

A ideia inicial, foi em começar criando componentes e temas a partir dessa biblioteca para comparar com outras bibliotecas focada em Design System, assim poderia criar todo o sistema de forma manual e depois comparar com outras ferramentas automatizadas.


## Para executar os scripts

### `npm start`

Executa o app no ambiente de desenvolvimento. Abra o [http://localhost:3000] para visualizá-lo em seu navegador. 

### `npm run sb`

Executa o storybook. Abra o [http://localhost:6000] para visualizá-lo em seu navegador.

### `npm run lint`

Para avisar se o app estiver com algum erro.


## Tecnlogias Utilizadas 

- TypeScript
- React
- Storybook
- Styled Components


### Como otimizaria a manutenção e qualidade do código? Levando em consideração o cenário de uma grande empresa com múltiplos desenvolvedores.

Sabemos o quão acaba sendo custoso em ter que lidar com a manutenção de diversos componentes. Pensando nisso, seria interessante implementar ferramentas automatizadas, como exemplo Material UI, ele oferece componentes prontos sem precisar dar manutenção apenas customiza, se for para teste de componete tem o React Test Library e o Storybook com suas addons, onde permite que sua UI seja tenha uma melhor acessibilidade e podendo ser controlada por você.
