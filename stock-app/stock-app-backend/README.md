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
insert into `portfolio` (`id`, `country`, `stock_name`) values('11','USA','Amazon');
insert into `portfolio` (`id`, `country`, `stock_name`) values('12','USA','Amazon');
insert into `portfolio` (`id`, `country`, `stock_name`) values('13','USA','Amazon');
insert into `portfolio` (`id`, `country`, `stock_name`) values('14','USA','Amazon');
insert into `portfolio` (`id`, `country`, `stock_name`) values('15','USA','Amazon');
insert into `portfolio` (`id`, `country`, `stock_name`) values('16','USA','Amazon');
insert into `portfolio` (`id`, `country`, `stock_name`) values('17','USA','Amazon');
insert into `portfolio` (`id`, `country`, `stock_name`) values('18','USA','Amazon');
insert into `portfolio` (`id`, `country`, `stock_name`) values('19','USA','Amazon');
insert into `portfolio` (`id`, `country`, `stock_name`) values('20','USA','Amazon');
insert into `portfolio` (`id`, `country`, `stock_name`) values('21','USA','Amazon');
insert into `portfolio` (`id`, `country`, `stock_name`) values('22','USA','Amazon');
insert into `portfolio` (`id`, `country`, `stock_name`) values('23','USA','Amazon');
insert into `portfolio` (`id`, `country`, `stock_name`) values('24','USA','Amazon');
insert into `portfolio` (`id`, `country`, `stock_name`) values('25','USA','Amazon');
insert into `portfolio` (`id`, `country`, `stock_name`) values('26','USA','Amazon');
insert into `portfolio` (`id`, `country`, `stock_name`) values('27','USA','Amazon');
insert into `portfolio` (`id`, `country`, `stock_name`) values('28','USA','Amazon');



select * from portfolio where stock_name='Amazon';

delete from portfolio where `id` = 1;

---------