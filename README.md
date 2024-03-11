# WebJump Frontend

Este repositório contém o código-fonte do projeto frontend da WebJump. O projeto foi desenvolvido utilizando tecnologias modernas, adaptando para diferentes tamanhos de telas. A aplicação permite também filtrar os items por *Gênero* ou *Cor*.

## Tecnologias Utilizadas

- **ViteJS**: Um construtor de aplicativos da web extremamente rápido e leve, com suporte nativo a TypeScript.
- **Styled-Components**: Uma biblioteca para estilizar componentes React de forma mais simples e intuitiva, utilizando tagged template literals.
- **JSON-Server**: Uma biblioteca que permite criar uma API REST fake a partir de um arquivo JSON, ideal para simular o backend durante o desenvolvimento.
- **Axios**: Um cliente HTTP baseado em Promises para fazer requisições HTTP tanto do navegador quanto do Node.js.
- **TypeScript**: Adiciona tipagem estática ao JavaScript, facilitando o desenvolvimento e manutenção de código.

## Instalação

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone este repositório utilizando o seguinte comando:

- git clone [git@github.com:whalyf/assessment-frontend.git](https://github.com/whalyf/assessment-frontend.git)


3. Navegue até o diretório clonado:

- cd assessment-frontend


4. Instale as dependências do projeto utilizando a seu critério utilizando npm ou yarn:

- yarn

- npm install

5. Inicie o servidor JSON-Server para simular o backend:

- yarn server

- npm run server

6. Por fim, inicie o servidor de desenvolvimento:

- yarn dev

- npm run dev

A aplicação estará disponível em `http://localhost:5173`

## Sugestões de melhorias

  1 - Implementação e utilização de CONTEXTAPI para administrar o fluxo/troca de informações na aplicação.
  
  2 - Implementar TanStack Query para gerir os dados e realizar o cache das infromações, tornando a usabilidade mais fluída.
