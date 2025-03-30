create database horaDoRemedio;

use horaDoRemedio;

show tables;

desc cadastromedicamentos;

select * from cadastromedicamentos;

drop table cadastromedicamentos;

create table cadastromedicamentos (
	id int(11) auto_increment primary key,
    nome varchar(255) not null,
    validade date not null,
    quantidade numeric not null,
    horario1 time not null,
    horario2 time,
    descricao varchar(255) not null
);