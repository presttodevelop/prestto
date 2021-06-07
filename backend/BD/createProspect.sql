CREATE TABLE prospectos (
    id int NOT NULL AUTO_INCREMENT,
    fecha TIMESTAMP,
    nombre varchar(255),
    apellidopaterno varchar(255),
    apellidomaterno varchar(255),
    celular varchar(255),
    email varchar(255),
    status varchar(255),
    PRIMARY KEY (id)
);

