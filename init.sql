CREATE TABLE roles (
    role_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);


CREATE TABLE users (
    username VARCHAR(255) PRIMARY KEY,
    role_id INTEGER,
    FOREIGN KEY (role_id) REFERENCES roles(role_id)
);

INSERT INTO roles (description) VALUES ('admin');
INSERT INTO roles (description) VALUES ('faculty');
INSERT INTO roles (description) VALUES ('student');

INSERT INTO users (username, role_id) VALUES ('aires', 1);

