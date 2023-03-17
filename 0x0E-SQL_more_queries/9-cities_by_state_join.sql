-- Lists all cities in the database hbtn_0d_usa.
-- Records are sorted in order of ascending cities.id.
SELECT cities.id, cities.name, states.name from cities,
       INNER JOIN states ON cities.state_id = states.id ORDER BY cities.id;

