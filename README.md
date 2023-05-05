# Projeto Final M6 - AutoMax

Repositório do Projeto Final do M6, onde a intenção é criar um site para venda de carros. Inicialmente, é possível realizar cadastro para vendedor e comprador, assim como realizar login.

Ambos tipos de contas têm acesso à dashboard antes de logar, apenas em forma de visualização, podendo abrir os anúncios, verificar detalhes, etc.

O site possui filtros de preferência, assim como um filtro de boa compra, onde o preço anunciado é comparado com o da tabela FIPE.

O vendedor, após logado, pode cadastrar novos carros, deletar e editar anúncios, enquanto o comprador pode adicionar comentários em qualquer anúncio.

## Sumário

- [Instalação back](#instalação)
- [Documentação API](#documentação-api)
- [Uso Local](#uso-local)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)

## Instalação back

1. Faça um clone do repositório:

```bash
git clone https://github.com/Full-Stack-Project-M6/Back-end
```

2. Em seguida, instale as dependências do projeto:

```bash
yarn install
```

3. Crie um banco de dados PostgreSQL;

## Uso Local

1. Configure o banco de dados PostgreSQL, seguindo o modelo do arquivo .env.example., crie um arquivo chamado .env e configure as informações de acesso.

2. Execute as migrations do banco de dados:

```bash
yarn typeorm migration:run -d src/data-source.ts
```

3. Inicie o servidor, em caso de sucesso, você verá a mensagem "Servidor executando", para isso, rode o comando:

```bash
yarn dev
```

4. As rotas podem ser acessadas pelo endereço:

```bash
http://localhost:3001
```

## Tecnologias Utilizadas

- Node.js
- TypeScript
- TypeORM
- Express
- PostgreSQL
- bcryptjs;
- jsonwebtoken;
- Nodemailer;
- Mailgen;
- Lodash;
