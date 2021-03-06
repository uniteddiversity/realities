# Realities Platform

A tool for tribal decentralised organisations. Read more about the concept behind it [here](https://docs.google.com/document/d/1UcHQ1_thfNaUlEBcfz9PACd6_lXsj5F2lvV6RfG0oOA/edit?usp=sharing).

## Wanna talk about it?

To discuss and learn more about the overall concepts behind the Realities Platform, head over to our [Loomio Group](https://www.loomio.org/g/cbghMtnL/borderland-realities).

To report a bug or suggest a specific improvement or feature, create an issue right here on GitHub.

If you want to chat to other members of the community and collaborate in real-time, head over to our [Gitter](https://gitter.im/realities).

## Install and run locally

Realities uses Neo4j as database. You need to run Neo4j on your machine or connect to a remote database (for example a free 1000 node sandbox at http://graphenedb.com). Running a local Neo4j database is very easy, just go to https://neo4j.com/download/ and follow the instructions.

Set up your connection variables to Neo4j in /api/.env. With Neo4j running locally, these variables should work for default  setups:

```
GRAPHENEDB_URL=bolt://127.0.0.1:7687
GRAPHENEDB_NAME=''
GRAPHENEDB_KEY=''
```

Make sure you're running the versions of node and npm specified in the api and ui package.json files (node 8.9.x and npm 5.5.x), then...

```bash
$ npm install
$ npm start
```

Explore the API using GraphiQL at [http://localhost:3100/graphiql](http://localhost:3100/graphiql). 

The structure of the frontend code is inspired by an [article written by Alexis Mangin](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1). It'll allow us to keep the project structured and consitent as the codebase grows. 
