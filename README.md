# Paytrack Challenge

Desenvolver uma aplicação em Node.js que simule a sincronização de dados de "Usuários/RH", processando e consolidando as informações.

---

## 🚀 Objetivo

Simular a integração com uma API externa de usuários, realizando:

- Consumo de dados externos
- Tratamento e mapeamento das informações
- Validação de idade (18+)
- Persistência condicional no banco de dados
- Atualização de usuários já existentes
- Relatório detalhado sobre o processo de integração

---

## 🛠️ Stack

- **Node.js** (18+)
- **TypeScript**
- **SQLite**
- Arquitetura **MVC (Model-View-Controller)**

---

## 🏗️ Arquitetura

O projeto segue o padrão **MVC**, com clara separação de responsabilidades:

- **Model** → Representação das entidades e interação com o banco
- **Controller** → Orquestra requisições e respostas
- **Service** → Contém regras de negócio e integrações externas
- **View** → Responsável pela geração de relatórios
- **Utils** → Funções auxiliares (ex: validação de idade)

---

## 📂 Estrutura do Projeto

generated-reports/ # Relatórios gerados pela aplicação
src/
├── config/ # Configurações da aplicação (db, env, etc)
├── constants/ # Constantes e enums
├── models/ # Modelos de domínio / entidades
├── services/ # Regras de negócio e integração externa
├── utils/ # Funções utilitárias (ex: validação de idade)
└── views/ # Geração de relatórios

---

## 📄 Relatórios

Os relatórios gerados pela aplicação são automaticamente salvos na pasta:

`generated-reports/`

Essa abordagem mantém o output desacoplado do código-fonte, facilitando versionamento e organização do projeto.

---

## 🔄 Fluxo da Aplicação

1. A aplicação consome dados de uma API externa.
2. Os dados recebidos são tratados e mapeados para o modelo interno.
3. É realizada a validação da idade do usuário:
   - Apenas usuários **maiores de 18 anos** são persistidos.
4. Caso o usuário já exista no banco:
   - Seus dados são atualizados.
5. Caso não exista:
   - Um novo registro é criado.
6. Geração de relatório com dados detalhados do processo de integração.

---

## ▶️ Como Rodar o Projeto

### Pré-requisitos

- Node.js 18+

#### Instalação

```
npm install
```

#### Execução

```
npm start
```

## 📌 Decisões Técnicas

- Separação clara de responsabilidades seguindo MVC
- Regras de negócio isoladas na camada de Service
- Armazenamento de relatórios fora da pasta `src`
- SQLite utilizado por simplicidade e portabilidade

## 🔮 Possíveis Melhorias

- Implementação de testes automatizados (Jest)

- Implementação de logs estruturados

- Dockerização da aplicação

- Tratamento mais robusto de erros externos

## 📄 Licença

Projeto desenvolvido para fins de desafio técnico.
