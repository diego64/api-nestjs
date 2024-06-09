<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
    <img src="img.shields.io/badge/NestJS-ED2945.svg?style=flat&logo=Nestjs&logoColor=white" alt="Nest">
		<img src="img.shields.io/badge/Docker-2496ED.svg?style=flat&logo=Docker&logoColor=white" alt="Docker">
	  <img src="img.shields.io/badge/Jest-C21325.svg?style=flat&logo=jest&logoColor=white" alt="Jest">
	<br>
  <img src="img.shields.io/badge/PostgreSQL-336791.svg?style=flat&logo&logo=postgresql&logoColor=white" alt="PostgreSQL">
  <img src="img.shields.io/badge/Supabase-3ECF8E.svg?style=flat&logo=supabase&logoColor=white" alt="Supabase">
  <img src="img.shields.io/badge/Apache_Kafka-231F20.svg?style=flat&logo=apache-kafka&logoColor=white" alt="Apache-kafka">
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>

- [📍 Overview](#-overview)
- [🧩 Features](#-features)
- [🗂️ Repository Structure](#-repository-structure)
- [🚀 Getting Started](#-getting-started)
  - [⚙️ Installation](#️-installation)
  - [🧪 Tests](#-tests)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)
</details>
<hr>

## 📍 Overview

The project aims to register users, allowing them to create tasks and receive email notifications, through a micro-service, to remind them about deadlines.

---

## 🧩 Features

|    |   Feature         | Description |
|----|-------------------|---------------------------------------------------------------|
| ⚙️  | **Architecture**  | The project is developed based on the CLI of the Nest.js framework, enabling more accessible configuration of micro-services and documentation with other tools. |
| 🔩 | **Code Quality**  | The codebase follows best practices with automated testing using nox and pytest. It includes linting, formatting, and packaging commands in the Makefile for maintaining code quality. |
| 📄 | **Documentation** | Extensive documentation is provided for setting up the environment, managing dependencies, and automating tasks. |
| 🔌 | **Integrations**  | KKey integrations include Supase services for the clusters, Render for API hosting, and Kafka for microservices communication. |
| 🧩 | **Modularity**    | The codebase is modular with abstract factory modules for parsers, parsers for various languages and frameworks, and utility functions for file handling and logging. |
| 🧪 | **Testing**       | Testing frameworks like pytest are used for automated testing, with additional tools like pytest-asyncio for asynchronous testing and pytest-cov for coverage reporting. |
| ⚡️  | **Performance**   | The project focuses on efficiency with tools like aiohttp for asynchronous HTTP requests, tenacity for retry logic, and anyio for asynchronous concurrency. |
| 🛡️ | **Security**      | Security measures include handling API keys securely, validating Git repository URLs, and managing file permissions for cloning and fetching repositories. |
| 📦 | **Dependencies**  | Key dependencies include shapely, Docker, Prisma, JWT, Kafka, Supabase, Jest and various other libraries for different functionalities. |

---

## 🗂️ Repository Structure

```sh
└── task-manager
    ├── .github
    ├── prisma
    ├── src
    ├── test
    ├── .env
    ├── docker-compose.yml
    ├── LICENSE
```

---

## 🚀 Getting Started

**System Requirements**

* **Node.js**: `version 20.13.1`
* **Docker**: `version 24.0.2`

### ⚙️ Installation

<h4>From <code>source</code></h4>

> 1. Clone the repository:
>
> ```console
> $ git clone https://github.com/diego64/task-manager-api
> ```
>
> 2. Change to the project directory:
> ```console
> $ task-manager-api
> ```
>
> 3. Install the dependencies:
> ```console
> $ npm install
> ```
> 4. Install the database:
> ```console
> $ docker compose up -d
> $ npx prisma migrate dev --name init
> $ npx prisma generate
> ```
> 5. Start the application:
> ```console
> $ npm run start:dev
> ```

### 🧪 Tests

> Run the test suite using the command below:
> ```console
> $ npm run test
> ```

---

## 📄 License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## 👏 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-overview)

---
