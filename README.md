![image](/Database.png)

copy and paste all rows.

```
BEGIN;

CREATE TABLE public.users
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "firstName" character varying,
    "lastName" character varying,
    email character varying unique,
    password character varying,
    role integer,
    PRIMARY KEY (id)
);

CREATE TABLE public.roles
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    role character varying,
    PRIMARY KEY (id)
);

CREATE TABLE public.factories
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "factoryName" character varying,
    "numberOfEmployees" integer,
    "membeshipDate" date,
    "membershipExpiryDate" date,
    "factoryDetails" integer,
    PRIMARY KEY (id)
);

CREATE TABLE public."factoryDetails"
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "unitUsed" character varying,
    "dateRange" daterange,
    "kilowattUsage" integer,
    "usageFee" double precision,
    "discountedPrice" boolean,
    PRIMARY KEY (id)
);

ALTER TABLE public.users
    ADD FOREIGN KEY (role)
    REFERENCES public.roles (id)
    NOT VALID;


ALTER TABLE public.factories
    ADD FOREIGN KEY ("factoryDetails")
    REFERENCES public."factoryDetails" (id)
    NOT VALID;

END;
```

then;
```
npm install
```