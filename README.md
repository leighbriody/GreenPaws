# ⭐ Next JS - SaaS Starter Kit

The Open Source Next.js SaaS boilerplate accelerates your startup journey by seamlessly integrating Stripe, NextAuth, and Resend. This powerful combination not only ensures a robust foundation for your project but also propels your startup off the ground swiftly, providing the essential tools for a successful launch.

Please star ⭐ the repo 😀

## 🛠️ Built With

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org/)
- [Tailwind CSS](https://tailwindcss.com)
- [React](https://reactjs.org)
- [Prisma](https://www.prisma.io)
- [TypeScript](https://www.typescriptlang.org)
- [Planetscale](https://planetscale.com/)
- 

## 🛠️ Lets Get Going !

### Prerequisites

- Node.js (Version: >=18.x)
- NPM

### Dev

#### 1. Setup

- [Fork]([https://github.com/boxyhq/saas-starter-kit/fork](https://github.com/leighbriody?tab=repositories)) the repository
- Clone the repository by using this command:

```bash
git clone https://github.com/<your_github_username>/https://github.com/leighbriody?tab=repositories.git
```

#### 2. Go to the project folder

```bash
cd BoilerplateSaas
```

#### 3. Install dependencies

```bash
npm install
```

#### 4. Set up your .env file

Duplicate `.env.sample` to `.env`.

```bash
cp .env.sample .env
```

#### 5. Set up your env variables.

You will need a next auth secret key.
A google cloud console key.
A Stripe product key.
You will need a database url (I reccomend planetscale for the DB)

#### 6. Set up prisma database schema

```bash
npx prisma db push
```

#### 5. Start the server

In a development environment:

```bash
npm run dev
```

#### 8. Start the Prisma Studio

Prisma Studio is a visual editor for the data in your database.

```bash
npx prisma studio
```
##  Features

- Create account
- Sign in with Google [[Setting up Google OAuth](https://support.google.com/cloud/answer/6158849?hl=en)]
- Directory Sync (SCIM)
- Protected routes for users
- Produce prices using stripe
- Manage stripe subscription billing.
- Determine if a user has as subscription or not.
- Dark mode

## ➡️ Coming Soon

- Billing & subscriptions
- Unit and integration tests
