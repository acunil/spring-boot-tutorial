<h1>Run App</h1>

- Open Docker Desktop

- Start container <b>postgres-spring</b>

- Open terminal in project root
<code>mvn spring-boot:run</code>

---

<h2>Usage</h2>

Use Postman to send requests to <code>localhost:8080/api/person/</code>


| Request Type | Endpoint    | Body                       | Description                                 |
|--------------|-------------|----------------------------|---------------------------------------------|
| GET          | /           | null                       | Get all entries in db                       |
| GET          | /{valid_id} | null                       | Get person matching id                      |
| POST         | /           | ```{"name": "John Doe"}``` | Add new person with randomly generated UUID |
| PUT          | /{valid_id} | ```{"name": "Jane Day"}``` | Update person with id                       |
| DELETE       | /{valid_id} | null                       | Delete person with id                       |

---

<h3>Initial Docker Setup</h3>

- Open Docker Desktop

- Create docker container
<code>docker run --name postgres-spring -e POSTGRES_PASSWORD=password -d -p 5432:5432 postgres</code>

- Start container
<code>docker start postgres-spring</code>

- Copy container id from <code>docker ps</code> and enter container by pasting id
<code>docker exec -it {CONTAINER_ID} bin/bash</code>

- Login with user "postgres"
<code>psql -U postgres</code>

- Create database named "demodb"
<code>CREATE DATABASE demodb;</code>

- View created db with <code>\l</code> and connect with <code>\c demodb</code>