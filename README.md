<h1 align='center'>
  <strong>Diploma Catalog</strong>
</h1>

<p align='center'>
  <a href='#about'>About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href='#cms'>CMS</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href='#installation'>Installation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href='#demo'>Demo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href='#tech-stack'>Tech Stack</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href='#creators'>Creators</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## About

<p>
  Diploma catalog is a web application designed and created for the students of Academy of Fine Arts in Wrocław.<br>
  The application was developed in collaboration with the students of Academy of Fine Arts who provided UI design.<br>
  Main features include: 
  <ul>
    <li>viewing list of diploma works</li>
    <li>viewing diploma works details</li>
    <li>viewing information about upcoming event</li>
    <li>viewing information about departments and diplomas created by it's students</li>
    <li>liking chosen diploma for ease of access</li>
    <li>adding new diploma works, events and departments</li>
    <li>editing information about diploma works, events and depaartments</li>
  </ul>
</p>

## CMS

<p>
 For the Content Management System we used Strapi - open source Node.js headless CMS. 
</p>

## Installation 

If you want to download and run this project: 

#### CMS
- `npm run develop`
- Unblock endpoints
  - In admin panel: `Settings -> USERS & PERMISSIONS PLUGIN -> Roles -> Public -> Permissions`
  - Check `find` and `findone` for every endpoint
  - Save
- Create and publish data in every collection.
- 
#### Website

- Create `.env` file in main folder and paste content of the existing `.env.example` file.
- `npm run develop`

#### Docker

- Install [https://docs.docker.com/get-docker/]
- In main folder run `docker-compose up --build`. You have to run this command every time package.json changes.
- When package.json doesn't change run `docker-compose up`. This command runs website (localhost:8000) and dev strapi (localhost:1337/admin).

## Demo 

Short app walkthrough:

https://user-images.githubusercontent.com/89641881/148701185-2ad196c8-5f9d-411a-ad52-cb6a010519d8.mov

## Tech Stack

<ul>
  <li>Gatsby.js</li>
  <li>GraphQL</li>
  <li>Strapi</li>
  <li>Figma</li>
  <li>Git</li>
</ul>
  
## Creators
Created by [Paulina Jacykowska](https://github.com/paulinabjacykowska), Marcin Szuster and Agnieszka Ryl, students of Wrocław University of Science and Technology.

