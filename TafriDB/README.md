# MySQL Docker Setup

This repository contains a Docker setup for running a MySQL database. The configuration uses Docker Compose to manage the MySQL service easily.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) (version 20.10 or later)
- [Docker Compose](https://docs.docker.com/compose/install/) (version 1.27 or later)

## Installation

1. **Clone the Repository:**

   Open a terminal and clone the repository to your local machine:


2. **Create the Schema Directory:**

   Make sure you have a directory called `Schema` in your project root where you can place your SQL scripts for initializing the database. If it doesn't exist, create it:

   ```bash
   mkdir Schema
   ```

   You can place any `.sql` files in this directory, and they will be executed in alphabetical order when the container is created.

## Running the MySQL Service

1. **Start the Service:**

   Use the following command to start the MySQL service defined in the `docker-compose.yml` file:

   ```bash
   docker-compose up -d
   ```

   This will start the MySQL container in detached mode.

2. **Accessing MySQL:**

   Once the service is running, you can access MySQL using the following connection details:

   - **Host:** `localhost`
   - **Port:** `3307`
   - **Username:** `root`
   - **Password:** `Admin@123Admin@123`
   - **Database:** `startup_database`

   You can connect to the MySQL database using any MySQL client (e.g., MySQL Workbench, DBeaver, or the command line).

3. **Stopping the Service:**

   To stop the running MySQL service, you can use the following command:

   ```bash
   docker-compose down
   ```

   This will stop and remove the MySQL container.

## Environment Variables

The following environment variables are used to configure the MySQL database:

- `MYSQL_ROOT_PASSWORD`: Sets the root password for the MySQL database.
- `MYSQL_DATABASE`: Creates a new database with the specified name upon initialization.

## Notes

- The MySQL data is stored in a Docker volume, so it persists even if the container is removed. If you wish to reset the database, you can delete the volume using:

  ```bash
  docker volume rm your_project_name_mysql
  ```

  (Replace `your_project_name` with the actual name of your Docker project.)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the Docker community for their continuous support and improvements in container technology.