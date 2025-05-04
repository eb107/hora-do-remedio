create database horaDoRemedio;
show tables;
select * from cadastromedicamentos;
desc cadastromedicamentos;
alter table cadastromedicamentos modify validade varchar(11);

create table usuarios (
	id int(11) not null auto_increment primary key,
    nome varchar(255),
    idade int,
    peso decimal(5,3),
    altura decimal(5,2),
    email varchar(50),
    telefone varchar(11),
    descricao varchar(255)
);

create table cadastromedicamentos (
	id int(11) auto_increment primary key,
    nome varchar(255) not null,
    validade date not null,
    quantidade numeric not null,
    frequencia varchar(100),
    dosagem varchar(50),
    frequencia1horario1 time,
    frequencia2horario1 time,
    frequencia2horario2 time,
    frequencia3horario1 time,
    frequencia3horario2 time,
    frequencia3horario3 time,
    descricao varchar(255) not null
);