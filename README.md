# TafriHolidays

TafriHolidays is a web application that includes a React frontend and an ASP.NET Core Web API backend, designed for holiday management.

## Project Structure

- **Frontend**: React application for user interface.
- **Backend**: ASP.NET Core Web API for handling business logic and database interactions.
- **Payment API**: Spring Boot application for managing payments and sending confirmation emails.
- **Database**: MySQL database managed through Docker.

## Prerequisites

- [.NET SDK](https://dotnet.microsoft.com/download) (version 6.0 or later)
- [Node.js](https://nodejs.org/en/download/) (version 14.x or later)
- [Docker](https://docs.docker.com/get-docker/) (for the MySQL setup)
- [Java JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) (version 11 or later) for the Spring Boot API

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/hiferli/TafriHolidays.git
   cd TafriHolidays
   ```

2. **Run the Backend:**

   Navigate to the backend folder and run the following command:

   ```bash
   cd Backend
   dotnet run
   ```

3. **Run the Frontend:**

   Navigate to the frontend folder and run:

   ```bash
   cd Frontend
   npm install
   npm start
   ```

4. **Start the Database:**

   Follow the instructions in the [MySQL Docker Setup](./TafriDB/README.md) to set up the database.

5. **Run the Payment API:**

   Navigate to the Spring Boot API folder and use the following command:

   ```bash
   cd PaymentAPI
   ./mvnw spring-boot:run
   ```

## Accessing the Application

- **Frontend**: Access the React app at `http://localhost:3000`.
- **Backend**: Access the ASP.NET Core API at `http://localhost:5000`.
- **Payment API**: Access the Spring Boot API at `http://localhost:8080` (default port).

## Acknowledgments

- Special thanks to the contributors and communities for their support.
