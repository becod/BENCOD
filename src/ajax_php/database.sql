-----------------------------------
--- CREATING INFORMATION TABLE  ---
-----------------------------------

CREATE TABLE bd_clients (
    `ID` BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `client_name` VARCHAR(100) NOT NULL,
    `client_email` VARCHAR(100) NOT NULL UNIQUE,
    `client_message` TEXT NOT NULL,
    `client_messagedate` DATE NOT NULL
);