DROP DATABASE `gle`;
CREATE DATABASE `gle` DEFAULT CHARACTER SET `utf8mb4` default collate utf8mb4_unicode_ci;
USE `gle`;

/* Structure for table `gle_group` */
SET FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS `gle_lgroup`;
SET FOREIGN_KEY_CHECKS=1;
CREATE TABLE `gle_lgroup` (
    id_lgroup int unsigned not null auto_increment,
    lgroup_title varchar(200) not null,
    primary key(id_lgroup)
    )     
    default character set utf8mb4
    default collate utf8mb4_unicode_ci;

/* Data for table `gle_group` */
insert into gle_lgroup(lgroup_title) values ('EMBA-20');
insert into gle_lgroup(lgroup_title) values ('EMBA-21');
insert into gle_lgroup(lgroup_title) values ('EMBA-22');
insert into gle_lgroup(lgroup_title) values ('EMBA-23');
insert into gle_lgroup(lgroup_title) values ('PMBA-6');
insert into gle_lgroup(lgroup_title) values ('PMBA-7');
insert into gle_lgroup(lgroup_title) values ('PMBA-8');
insert into gle_lgroup(lgroup_title) values ('PMBA-9');
insert into gle_lgroup(lgroup_title) values ('PMBA-10');


/* Structure for table `gle_course` */
SET FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS `gle_course`;
SET FOREIGN_KEY_CHECKS=1;
CREATE TABLE `gle_course` (
    id_course int unsigned not null auto_increment,
    course_title varchar(200) not null,
    id_lgroup int unsigned not null,
    primary key(id_course),
    foreign key(id_lgroup) references gle_lgroup(id_lgroup)
    )
    default character set utf8mb4
    default collate utf8mb4_unicode_ci;

/* Data for table `gle_course` */
insert into gle_course(course_title, id_lgroup) values ('Стратегічна ідея', 1);
insert into gle_course(course_title, id_lgroup) values ('Філософія бізнесу', 3);
insert into gle_course(course_title, id_lgroup) values ('Маркетинг', 2);
insert into gle_course(course_title, id_lgroup) values ('Стратегічна ідея', 6);
insert into gle_course(course_title, id_lgroup) values ('Філософія бізнесу', 5);
insert into gle_course(course_title, id_lgroup) values ('Маркетинг', 4);
insert into gle_course(course_title, id_lgroup) values ('Стратегічна ідея', 8);
insert into gle_course(course_title, id_lgroup) values ('Системне мислення', 9);
insert into gle_course(course_title, id_lgroup) values ('Бізнес-комунікації', 7);
insert into gle_course(course_title, id_lgroup) values ('Стратегічна ідея', 2);
insert into gle_course(course_title, id_lgroup) values ('Бізнес-комунікації', 3);
insert into gle_course(course_title, id_lgroup) values ('Бізнес-комунікації', 2);
insert into gle_course(course_title, id_lgroup) values ('Стратегічна ідея', 7);
insert into gle_course(course_title, id_lgroup) values ('Системне мислення', 5);
insert into gle_course(course_title, id_lgroup) values ('Філософія бізнесу', 4);
insert into gle_course(course_title, id_lgroup) values ('Стратегічна ідея', 9);
insert into gle_course(course_title, id_lgroup) values ('Маркетинг', 9);
insert into gle_course(course_title, id_lgroup) values ('Системне мислення', 7);


/* Structure for table `gle_assignment` */
SET FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS `gle_assignment`;
SET FOREIGN_KEY_CHECKS=1;
CREATE TABLE `gle_assignment` (
    id_assignment int unsigned not null auto_increment,
    assignment_title varchar(200) not null,
    id_course int unsigned not null,
    primary key(id_assignment),
    foreign key(id_course) references gle_course(id_course)
    )
    default character set utf8mb4
    default collate utf8mb4_unicode_ci;

/* Data for table `gle_assignment` */
insert into gle_assignment(assignment_title, id_course) values ('Написати есе', 1);
insert into gle_assignment(assignment_title, id_course) values ('Проаналізувати текст', 2);
insert into gle_assignment(assignment_title, id_course) values ('Опрацювати кейс', 3);
insert into gle_assignment(assignment_title, id_course) values ('Написати есе', 4);
insert into gle_assignment(assignment_title, id_course) values ('Проаналізувати текст', 5);
insert into gle_assignment(assignment_title, id_course) values ('Опрацювати кейс', 6);
insert into gle_assignment(assignment_title, id_course) values ('Написати есе', 7);
insert into gle_assignment(assignment_title, id_course) values ('Скласти діаграму зворотніх зв''язків', 8);
insert into gle_assignment(assignment_title, id_course) values ('Створити карту викликів', 9);
insert into gle_assignment(assignment_title, id_course) values ('Написати есе', 10);
insert into gle_assignment(assignment_title, id_course) values ('Створити карту викликів', 11);
insert into gle_assignment(assignment_title, id_course) values ('Створити карту викликів', 12);
insert into gle_assignment(assignment_title, id_course) values ('Написати есе', 13);
insert into gle_assignment(assignment_title, id_course) values ('Скласти діаграму зворотніх зв''язків', 14);
insert into gle_assignment(assignment_title, id_course) values ('Проаналізувати текст', 15);
insert into gle_assignment(assignment_title, id_course) values ('Написати есе', 16);
insert into gle_assignment(assignment_title, id_course) values ('Опрацювати кейс', 17);
insert into gle_assignment(assignment_title, id_course) values ('Скласти діаграму зворотніх зв''язків', 18);


/* Structure for table `gle_user` */
SET FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS `gle_user`;
SET FOREIGN_KEY_CHECKS=1;
CREATE TABLE `gle_user` (
    username varchar(10) not null,
    first_name varchar(100) not null,
    last_name varchar(100) not null,
    email varchar(100) not null unique,
    password varchar(100) not null,
    admin_role char(1) not null,
    primary key(username)
    )
    default character set utf8mb4
    default collate utf8mb4_unicode_ci;

/* Data for table `gle_user` */
insert into gle_user(username, first_name, last_name, email, password, admin_role) values ('osavruk', 'Олександр', 'Саврук', 'os@kmbs.ua', 'admin', 'Y');
insert into gle_user(username, first_name, last_name, email, password, admin_role) values ('vkotusenko', 'Віктор', 'Котусенко', 'kotus@kmbs.ua', 'admin', 'Y');
insert into gle_user(username, first_name, last_name, email, password, admin_role) values ('vpavelko', 'Володимир', 'Павелко', 'vp@kmbs.ua', 'admin', 'N');


/* Structure for table `gle_assignment_submission` */
SET FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS `gle_assignment_submission`;
SET FOREIGN_KEY_CHECKS=1;
CREATE TABLE `gle_assignment_submission` (
    id_assignment_submission int unsigned not null auto_increment,
    submission_date date not null,
    id_assignment int unsigned not null,
    username varchar(10) not null,
    primary key(id_assignment_submission),
    foreign key(id_assignment) references gle_assignment(id_assignment),
    foreign key(username) references gle_user(username)
    )
    default character set utf8mb4
    default collate utf8mb4_unicode_ci;

/* Data for table `gle_assignment_submission` */
insert into gle_assignment_submission(id_assignment, username, submission_date) values (3, 'vkotusenko', now());
insert into gle_assignment_submission(id_assignment, username, submission_date) values (5, 'vpavelko', now());


/*
SHOW COLLATION WHERE COLLATION LIKE "%_cs"
*/

ALTER TABLE gle_user MODIFY
    password VARCHAR(100)
      COLLATE latin1_general_cs;
