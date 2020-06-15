##Mysql database commands

CREATE DATABASE react_boot;
USE react_boot;
drop table portfolio;
CREATE TABLE `portfolio` (
    `id` VARCHAR(20) NOT NULL,
    `country` VARCHAR(255) DEFAULT NULL,
    `stock_name` VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
);
truncate table portfolio;
insert into `portfolio` (`id`, `country`, `stock_name`) values('1','SG','Singtel');
insert into `portfolio` (`id`, `country`, `stock_name`) values('2','SG','CDL');
insert into `portfolio` (`id`, `country`, `stock_name`) values('3','USA','Amazon');
insert into `portfolio` (`id`, `country`, `stock_name`) values('4','USA','Tesla');
insert into `portfolio` (`id`, `country`, `stock_name`) values('5','USA','Google');
insert into `portfolio` (`id`, `country`, `stock_name`) values('6','USA','Microsoft');
insert into `portfolio` (`id`, `country`, `stock_name`) values('7','USA','IBM');
insert into `portfolio` (`id`, `country`, `stock_name`) values('8','SG','SGX');
insert into `portfolio` (`id`, `country`, `stock_name`) values('9','USA','Amazon');
insert into `portfolio` (`id`, `country`, `stock_name`) values('10','USA','Amazon');


select * from portfolio where stock_name='Amazon';

delete from portfolio where `id` = 1;

---------


### Key store commands
keytool -genkey -alias my-ssl-key -keyalg RSA -keysize 2048 -validity 700 -keypass changeit -storepass changeit -keystore my-ssl-store.jks

keytool -importkeystore -srckeystore my-ssl-store.jks -destkeystore my-ssl-store.jks -deststoretype pkcs12

keytool -list -keystore  my-ssl-store.jks 
