##Mysql database commands
CREATE DATABASE react_boot;

USE react_boot;

drop table employees;

CREATE TABLE `employees` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) DEFAULT NULL,
    `gender` VARCHAR(255) DEFAULT NULL,
    `department` VARCHAR(255) DEFAULT NULL,
    `dob` DATE DEFAULT NULL,
    PRIMARY KEY (`id`)
);

insert into `employees` (`id`, `name`, `gender`, `department`, `dob`) values('1001','Alphabet','Male','React JS','1998-04-02');

insert into `employees` (`id`, `name`, `gender`, `department`, `dob`) values('1002','Brazil','Female','Spring Boot','2000-01-01');

select * from employees;

commit;

-----