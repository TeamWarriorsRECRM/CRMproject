DROP DATABASE tasks;
CREATE DATABASE tasks;
USE tasks;

CREATE TABLE tasks (
    `id` INTEGER AUTO_INCREMENT PRIMARY KEY,
    `priority` ENUM('danger','primary','secondary') DEFAULT 'primary', /* using bootstrap class as priority colouring */
    `info` VARCHAR(255) NOT NULL,
    `due` TIMESTAMP DEFAULT NULL,
    `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)


DROP DATABASE IF EXISTS  clients_db ;
CREATE DATABASE clients_db;
USE clients_db;  
CREATE TABLE clients (
    firstname varchar(100),
    lastname varchar(100),
    totalbudget int NOT NULL,
    downpayment int NOT NULL,
    area varchar(100),
    email varchar(100),
    _status varchar(100),
    note varchar(200),
	id INT auto_increment NOT NULL PRIMARY KEY
);
create USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mySQL86giovanni';
flush privileges;
UPDATE user SET Password=PASSWORD('mySQL86giovanni') WHERE User='root';
ALTER USER 'root'@'localhost' IDENTIFIED BY 'mySQL86giovanni';
