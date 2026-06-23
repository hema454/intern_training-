create table users(
id serial primary key,
author varchar(40),
email varchar(70)
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

INSERT INTO users (author, email)
VALUES
('Hema', 'hema@gmail.com'),
('Anu', 'anu@gmail.com'),
('Priya', 'priya@gmail.com'),
('Divya', 'divya@gmail.com'),
('Kavi', 'kavi@gmail.com'),
('Meena', 'meena@gmail.com'),
('Riya', 'riya@gmail.com'),
('Sneha', 'sneha@gmail.com'),
('sreya','sreya@gmail.com');

create table posts(
id int references users(id),
post_id serial primary key,
title varchar(200),
post_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
description varchar(1000)
);

insert into posts(id,post_id,title,description) values(1,101,'python','python basics'),
(2,102,'sql','sql advanced'),
(3,103,'java','java advanced '),
(4,104,'data structures','data structutres and algorithm'),
(5,105,'Artificial intelligence','algorithms');


insert into posts(id,post_id,title,description) values(1,1011,'python advanced','full understanding of python advanced'),
(1,1012,'python framework','complete understanding of python framework');

insert into posts(id,post_id,title,description) values(3,1033,'java full stack','complete understanding of java developer');

select author,title from
users inner join posts
on users.id=posts.id;

select * from
users left join posts
on users.id=posts.id;

select author,count(*) from
users inner join posts
on users.id=posts.id
GROUP BY author;

select * from
users right join posts
on users.id=posts.id;

select *from users;

update users
SET author='Asha'
where id=2;

DELETE from users
where id=8;

