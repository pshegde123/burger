drop database burgers_db;
create database burgers_db;
use burgers_db;
create table burgers(
ID INT NOT NULL AUTO_INCREMENT,
BURGER_NAME varchar(255) NOT NULL,
DEVOURED BOOL NOT NULL,
PRIMARY KEY(ID)
);
