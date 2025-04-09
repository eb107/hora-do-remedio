create database horaDoRemedio;

use horaDoRemedio;

show tables;

desc cadastromedicamentos;
desc usuario;

select * from cadastromedicamentos;
select * from usuario;

drop table cadastromedicamentos;
drop table usuario;

create table cadastromedicamentos (
	id int(11) auto_increment primary key,
    nome varchar(255) not null,
    validade date not null,
    quantidade numeric not null,
    horario1 time not null,
    horario2 time,
    descricao varchar(255) not null
);

create table usuario (
	id int(11) auto_increment primary key,
    nome varchar(255) not null,
    idade int,
    peso decimal (5, 2),
    altura decimal (5, 2),
    email varchar(255),
    telefone varchar(11),
    observacao varchar(255)
);

alter table usuario discard tablespace;