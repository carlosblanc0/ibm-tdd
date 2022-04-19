
# Understand and demonstrate test-driven development

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

A more in-depth wirte-up on end-to-end tests, and testing-driven devleopment in general.

## Introduction
- Unit tests: usually used to test a given compononent in an isolated envinrement.
- Integration tests: usually used to test more than one component and how they interacted within the stack once those are running.
- End-to-End: programmatically simulates end user behavior. Usually has its own testing/mock database - which is what we've done during the scope of this project. See [prisma-test-enviroment.ts](prisma-test-enviroment.ts) for more details. 

## Rationale
- In this instance, I've used a SQL database for testing purposes to simulate a real world scenario where there's a need to for not only testing suite, but also distinct databases; one for testing, one for production. For this example, and according to the pattern called Command/Query Segregation, CreateCleint.spec.ts isn't returning anything since it's a WRITE/UPDATE/DELETE command as opposed to a query where the expected behavior would be to return something. See IBM's Architecture Center article for more information on [CQRS](https://www.ibm.com/cloud/architecture/architectures/event-driven-cqrs-pattern/). 

## Reports
![report](https://github.com/carlosblanc0/ibm-tdd/blob/main/assets/report.png?raw=true)
![ss-1](https://github.com/carlosblanc0/ibm-tdd/blob/main/assets/ss-1.png?raw=true)
![ss-2](https://github.com/carlosblanc0/ibm-tdd/blob/main/assets/ss-2.png?raw=true)
## Dependencies
- Prisma, Jest, TypeScript, SWC/core and SWC/Jest, among [others](package.json).

## Run Locally
Clone the project

```bash
  git clone https://github.com/carlosblanc0/ibm-tdd
```

Go to the project directory

```bash
  cd tdd-e2e
```

Install dependencies

```bash
npm install 
```

Start the server

```bash
  npm run start
```
 

Spin up a PostgreeSQL database (I've used [https://cockroachlabs.cloud/](https://cockroachlabs.cloud/). Make sure to pick the free tier for demoing purposes)

```bash
touch .env
```

```bash
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB (Preview).
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="`postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?schema=${this.schema}`;"
```

## Appendix and FAQ

**Find this document incomplete?** Open an issue and I will get on it ASAP!

###### tags: `Tests`, `Cloud`, `End-to-End`




