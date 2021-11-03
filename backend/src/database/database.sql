CREATE DATABASE IF NOT EXISTS predialX;

USE predialX;

CREATE TABLE clients
(
    id INT NOT NULL auto_increment,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO clients (name)

VALUES ('PredialX'),
    ('XPTO ManPred'),
    ('Pred Service');
