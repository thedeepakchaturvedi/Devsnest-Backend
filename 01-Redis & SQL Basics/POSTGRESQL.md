## HOW TO START POSTGRESQL SERVER IN WSL :

Installation :

```
> sudo apt update
> sudo apt install postgresql postgresql-contrib
> psql --version
```

Server start :

```
> sudo service postgresql status
> sudo service postgresql start //!important
> sudo service postgresql stop
```

To run PostgreSQL with psql shell :

```
> sudo -u postgres psql
```

## PostgreSQL Commands :

> To create new user

```
CREATE USER <User1> WITH PASSWORD '123456';
```

> To create new database

```
CREATE DATABASE <test>;
```

> grant access of database to other user

```
GRANT ALL PRIVILAGES ON DATABASE <test> to <User1>;
```

> grant specific access of db to other user
>
> OPERATION = {UPDATE,SELECT,INSERT,DELETE}

```
GRANT <OPERATION> PRIVILEGES ON DATABASE <test> to <User1>;
```

> Delete database

```
DROP DATABASE <test>;
```

> connect to database

```
\c <test>;
```

> create table

```
CREATE TABLE <stud>(
roll_no INT NOT NULL,
name CHAR[50] NOT NULL,
address TEXT
);
```

> display the list of tables (relations)

```
\d;
```

> display fields info of specific table

```
\d <stud>;
```

> delete table

```
DROP TABLE <stud>;
```
