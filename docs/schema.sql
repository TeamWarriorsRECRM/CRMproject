DROP DATABASE IF EXISTS  clientsCRM_db ;
CREATE DATABASE clientsCRM_db;
USE clientsCRM_db;

CREATE TABLE clients (
    firstname varchar(100),
    lastname varchar(100),
    totalbudget int NOT NULL,
    downpayment int NOT NULL,
    area varchar(100),
	id INT auto_increment NOT NULL PRIMARY KEY
);



-- DROP table if exists clients;