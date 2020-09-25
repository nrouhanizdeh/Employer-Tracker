INSERT INTO department (name)
VALUES ("sales"),("finance"),("engineering"),("information secuirty");

INSERT INTO role (title,salary,department_id)
VALUES ("ceo",400000,1),("cfo",350000,2),("cto",300000,3),("cio",290000,4);

INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("negin","rouhani",1,NULL),("kami","kaz",2,1),("nina","rouhanizadeh",3,1),("nilou","rou",4,1);

