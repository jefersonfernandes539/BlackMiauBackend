# 🚀 TemplateNest-Backend

Um **template backend** moderno construído com **NestJS**, **Prisma ORM** e **Swagger (OpenAPI)** — pronto para iniciar projetos escaláveis, modulares e documentados.

---

## 🔧 Tecnologias

- **[NestJS](https://nestjs.com/)** — framework Node.js progressivo
- **[Prisma ORM](https://www.prisma.io/)** — ORM moderno
- **[PostgreSQL](https://www.postgresql.org/)** — banco de dados relacional
- **[Swagger](https://swagger.io/)** — documentação da API
- **TypeScript**

---

## 🧭 Recursos do template

- Estrutura modular seguindo boas práticas do NestJS
- Persistência de dados com **Prisma**
- Documentação interativa com **Swagger**
- Configuração via `.env`
- Scripts prontos para desenvolvimento, build e deploy
- Suporte a autenticação via **JWT** (opcional)

---

## 📂 Estrutura do Projeto

```bash
.
├── prisma/
│   ├── migrations/          # Migrations do banco
│   ├── schema.prisma        # Modelos Prisma
│   └── seed.ts              # Script para popular o banco
├── src/
│   ├── app/                 # Módulo principal
│   ├── auth/                # Autenticação (JWT, etc.)
│   ├── booking/             # Reservas
│   ├── chat/                # Chat em tempo real
│   ├── client-profile/      # Perfis de clientes
│   ├── database/            # Configuração do banco
│   ├── main.ts              # Ponto de entrada da aplicação
├── .env                     # Variáveis de ambiente
├── .gitignore
└── README.md

yaml
Copiar código

---

## ⚙️ Configuração

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/TemplateNest-Backend.git
cd TemplateNest-Backend

