# VIDEOGAMES
[Visit the webpage](https://my-videogame.vercel.app/)
<br>

Project Documentation <br/>
This documentation provides an overview of the Videogames project, which consists of a client-side and server-side application for managing and displaying video games.
<br/>
## Table of Contents
- [Introduction](#Introduction)
- [Installation](#Installation)
- [Configuration](#Configuration)
- [Usage](#Usage)
- [API Endpoints](#API-Endpoints)
- [Contributing](#Contributing)
- [License](#License)
- [Images](#images)

  <br/>
## Introduction
  <br/>
The Videogames project is designed to help users manage and view videogames. It consists of a client-side application built with React and a server-side application built with Express. The client-side application allows users to browse and search for video games, while the server-side application provides the necessary APIs to interact with the database. <br/>
API used: https://rawg.io/

 <br/>
## Installation
 <br/>
To run the Videogames project locally, follow these steps:

1. Clone the repository from the [Frontend Repository](https://github.com/pcelman/Videogames-front.git) and [Backend Repository](https://github.com/pcelman/Videogames-back.git).
2. Set up a PostgreSQL database named videogames.
3. Create an .env file inside the api folder of the backend repository with the following information:
<br/>
<code>
DB_USER=[your PostgreSQL username]
DB_PASSWORD=[your PostgreSQL password]
DB_HOST=localhost
</code>
4. Open a terminal inside the api folder and run the following commands:

* npm install to install the dependencies.
* npm start to start the server.

5. Open another terminal inside the client folder and run the following commands:

* npm install to install the dependencies.
* npm start to start the client application.
6. Access the client application by visiting http://localhost:3000 in your web browser.

## Configuration
<br/>
The configuration for the Videogames project is stored in the .env file located in the api folder. This file contains the necessary environment variables for connecting to the PostgreSQL database.
<br/>

## Usage
<br/>
Once the Videogames project is up and running, you can use the client application to browse and search for video games. The server-side API provides the following endpoints for interacting with the application:
<br/><br/>

## API Endpoints
<br/><br/>
GET /api/videogame
* Description: Retrieves a list of all video games.
* Query Parameters:
  * page (optional): Specifies the page number for pagination.
  * limit (optional): Specifies the number of results per page.
* Example Response:
  <br/>
<code>
  
  {
    "id": 3498,
    "name": "Grand Theft Auto V",
    "image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
    "genres": [
      {
        "name": "Action"
      },
      {
        "name": "Adventure"
      }
    ],
    "released": "2013-09-17",
    "rating": 4.47,
    "platforms": [
      "PlayStation 5",
      "Xbox Series S/X",
      "PlayStation 4",
      "PC",
      "PlayStation 3",
      "Xbox 360",
      "Xbox One"
    ]
  },
  //more games...
</code>
  <br/>
GET /api/videogame/:id
Description: Retrieves a specific video game by its ID.
Path Parameters:
id: The ID of the video game.
Example Response:
<br/>
<code>
"id": "6589",
  "title": "Grand Theft Auto V"",
  "genre": "Action",
  "platform": "PC",
  "release_date": "2023-01-"
  "description": "a description...
</code>
<br/><br/>
POST /api/videogame
<br/>
Description: Creates a new video game entry.
Request Body:
* title (string, required): The title of the video game.
* genre (string, required): The genre of the video game.
* platform (string, required): The platform(s) on which the video game is available.
* release_date (string, required): The release date of the video game.
* image (string): must be the url of an image.
*  description (string)
 <br/>

<br/><br/>

## Contributing
<br/>
I welcome ontributions to the Videogames project! Whether you want to report a bug, suggest new features, or submit code changes, your contributions are highly appreciated.
<br/><br/>

## License
<br/><br/>
<code>
  MIT License

Copyright (c) [year] [project owner]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

[License terms and conditions]


</code>
<br/><br/>

## Images
<br/><br/>
Homepage:<br/><br/>

<img width="1349" alt="Screenshot 2023-06-21 at 18 57 16" src="https://github.com/pcelman/Videogames/assets/100241036/59f08ebe-115d-4819-9396-9aff9c3a8157">






<br/><br/>
Detail of a card:<br/><br/>
<img width="1048" alt="Screenshot 2023-06-21 at 18 57 37" src="https://github.com/pcelman/Videogames/assets/100241036/5da9d05d-23f0-407e-975a-8bd5b655ace1">
<br/><br/>
Form for the creation of a new videogame with the state of genres and platforms ordered alphabetically for ease of use:
<br/><br/>
<img width="939" alt="Screenshot 2023-06-21 at 18 58 19" src="https://github.com/pcelman/Videogames/assets/100241036/5a63ed3a-e26a-4c4e-8583-8ed4e6072060">
