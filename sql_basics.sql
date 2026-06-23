create table users
(
id serial primary key,
name varchar(40) not null,
email varchar(40) unique
);

INSERT INTO users(name, email)
VALUES
('Hema', 'hema@gmail.com'),
('Anu', 'anu@gmail.com'),
('Priya', 'priya@gmail.com'),
('Divya', 'divya@gmail.com'),
('Kavi', 'kavi@gmail.com'),
('Meena', 'meena@gmail.com'),
('Riya', 'riya@gmail.com'),
('Sneha', 'sneha@gmail.com');

select * from users;

SELECT * FROM users
WHERE name = 'Kavi';

select * from users
order by name;

SELECT * FROM users
WHERE name = 'Riya';

SELECT * FROM users
WHERE id = 3;

SELECT name FROM users
ORDER BY email;

select * from users
where name LIKE 'H%';

select * from USERS
where name LIKE '%a'
ORDER BY id;

select * from users
where name LIKE '%e%';
