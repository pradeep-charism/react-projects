##Mysql database commands
CREATE DATABASE react_boot;
USE react_boot;
drop table portfolio;
CREATE TABLE `portfolio` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `holder` VARCHAR(255) DEFAULT NULL,
    `stock_name` VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
);
truncate table portfolio;
insert into `portfolio` (`id`, `holder`, `stock_name`) values('1','sg-investor','Singtel');
insert into `portfolio` (`id`, `holder`, `stock_name`) values('2','sg-investor','City Developments Ltd.');
select * from portfolio;
commit;

-----