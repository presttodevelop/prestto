CREATE TABLE contactoregistros (
    id int NOT NULL AUTO_INCREMENT,
    fecha TIMESTAMP,
    nombre varchar(255),
    email varchar(255),
    mensaje varchar(550),
    PRIMARY KEY (id)
);

