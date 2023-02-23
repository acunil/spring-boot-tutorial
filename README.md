# Run App

- Open Docker Desktop and start container *postgres-spring*

- Open terminal in project root and run ```mvn spring-boot:run```
- Open new terminal in ```/frontend``` directory and run ```npm start```

---

### Initial Docker Setup

- Open Docker Desktop

- Create docker container
```docker run --name postgres-spring -e POSTGRES_PASSWORD=password -d -p 5432:5432 postgres```

- Start container
```docker start postgres-spring```

- Copy container id from ```docker ps``` and enter container by pasting id
```docker exec -it {CONTAINER_ID} bin/bash```

- Login with user "postgres"
```psql -U postgres```

- Create database named "demodb"
```CREATE DATABASE demodb;```

- View created db with ```\l``` and connect with ```\c demodb```

### Initial React Setup

- Open terminal in ```/frontend``` directory and run ```npm install```

---

### API Endpoints

Use Postman to send requests to ```localhost:8080/api/person/```


| Request Type | Endpoint    | Body                       | Description                                 |
|--------------|-------------|----------------------------|---------------------------------------------|
| GET          | /           | null                       | Get all entries in db                       |
| GET          | /{valid_id} | null                       | Get person matching id                      |
| POST         | /           | ```{"name": "John Doe"}``` | Add new person with randomly generated UUID |
| PUT          | /{valid_id} | ```{"name": "Jane Day"}``` | Update person with id                       |
| DELETE       | /{valid_id} | null                       | Delete person with id                       |