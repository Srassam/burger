CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar (225) NOT NULL,
devoured:Boolean DEFAULT false,
PRIMARY KEY (id)
);