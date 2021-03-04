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
	id INT auto_increment NOT NULL PRIMARY KEY
);
create USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mySQL86giovanni';
flush privileges;
UPDATE user SET Password=PASSWORD('mySQL86giovanni') WHERE User='root';
ALTER USER 'root'@'localhost' IDENTIFIED BY 'mySQL86giovanni';
INSERT INTO clients (firstname, lastname, totalbudget, downpayment, area) VALUES ("John","Smith",1000000,250000,"Toronto Downtown");
INSERT INTO clients (firstname, lastname, totalbudget, downpayment, area) VALUES ("Tony","Stark",6000000,1000000,"Toronto Old Town");
INSERT INTO clients (firstname, lastname, totalbudget, downpayment, area) VALUES ("Steve","Rogers",200000,25000,"Toronto Mid Town");
INSERT INTO clients (firstname, lastname, totalbudget, downpayment, area) VALUES ("Nicole","Kidman",990000,200000,"Toronto North York");
INSERT INTO clients (firstname, lastname, totalbudget, downpayment, area) VALUES ("Thor","Godofthunder",950000,150000,"Toronto Yorkville");
INSERT INTO clients (firstname, lastname, totalbudget, downpayment, area) VALUES ("Clark","Kent",900000,100000,"Toronto Bloor West Village");
INSERT INTO clients (firstname, lastname, totalbudget, downpayment, area) VALUES ("Bruce","Wayne",800000,50000,"Toronto Etobicoke");
INSERT INTO clients (firstname, lastname, totalbudget, downpayment, area) VALUES ("Jane","Doe",2000000,70000,"Toronto Mississauga");
