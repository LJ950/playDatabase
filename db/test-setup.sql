DROP DATABASE IF EXISTS historical_trains_test;
CREATE DATABASE historical_trains_test;

\c historical_trains_test;

DROP TABLE IF EXISTS historical_services;

CREATE TABLE historical_services (
  id SERIAL primary key NOT NULL, 
  service_id VARCHAR(10), 
  run_date DATE, 
  station_from VARCHAR(60) NOT NULL, 
  station_to VARCHAR(60) NOT NULL, 
  final_station VARCHAR(60) NOT NULL,
  sch_dep_time TIME, 
  act_dep_time TIME, 
  dep_minutes_late INT DEFAULT 0,
  sch_arr_time TIME,
  act_arr_time TIME,
  arr_minutes_late INT DEFAULT 0,
  cancelled INT DEFAULT 0,
  cancelled_reason VARCHAR(100) DEFAULT null
)

--CONSTRAINT arr_mins_chk CHECK(arr_minutes_late >= 0) DEFAULT 0 ,