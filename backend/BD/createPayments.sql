CREATE TABLE payments (
    id int NOT NULL AUTO_INCREMENT,
    fecha TIMESTAMP,
    iduser varchar(255),
    idprestamo varchar(255),
    nombre varchar(255) NOT NULL,
    apellidopaterno varchar(255) NOT NULL,
    apellidomaterno varchar(255) NOT NULL,
    email varchar(255),
    idpayment varchar(255),
    referencepyament varchar(255),
    fechacomplete TIMESTAMP,
    monto varchar(255),
    status varchar(255),
    PRIMARY KEY (id)
);

