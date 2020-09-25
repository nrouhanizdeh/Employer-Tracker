INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Negin","Rouhani",1,NULL),("Kami","kaz",2,1),("Nina","Rouhanizadeh",3,1),("Nilou","Rou",4,1);

INSERT INTO role (title,salary,department_id)
VALUES ("CEO",400000,1),("CFO",350000,2),("CTO",300000,3),("CISO",290000,4);

INSERT INTO department (name)
VALUES ("Sales"),("Finance"),("Engineering"),("Information Secuirty");
