CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL PRIMARY KEY, 
    burger_name VARCHAR 200 NOT NULL,
    devoured BOOLEAN,
);