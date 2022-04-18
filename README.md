
# Understand and demonstrate test-driven development

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![Netlify](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

A more in-depth guide on end-to-end tests
![portfolio](portfolio-gif.gif)

## Introduction
- Unit tests: usually used to test a given compononent in an isolated envinrement.
- Integration tests: usually used to test more than one component and how they interacted within the stack once those are running.
- End-to-End: programmatically simulates end user behavior. 

## Rationale
- In this instance, I've used a PostGres Databse for testing purpose to simulate a real world scenario where there;s a need to split production databses and testing database since our tests should NOT alter the beavior of one another. In other words a given test should interfere with another test.

## Dependencies
- Prisma, Jest, TypeScript, SWC/core and SWC/Jest

## Run Locally

Clone the project

```bash
  git clone https://github.com/carlosblanc0/portfolio-app.git
```

Go to the project directory

```bash
  cd portfolio-app
```

Install dependencies

```bash
npm install 
```

Start the server

```bash
  npm run start
```
 
 ## Live Demo
>  https://www.carlosablanco.com/post


## Acknowledgements

 - [kapehe-ok](https://github.com/kapehe-ok)


## Appendix and FAQ

**Find this document incomplete?** Open an issue and I will get on it ASAP!

###### tags: `Blogging` 

##### Useful Triage
- npx prisma migrate dev
- npx prims studio

- Repository Pattern / Data Mapper Pattern
- Dependency Inversion Principle | DevIQ

- For this exaple, CreateCleint.spec.ts isn't returning anything since it's a Write/update/delete command as opposed to a query where it'd the expected behavior would be to return something (PAttern: Command/Query Segregation)

- [ ] todo add prisma test envicomrnet page


