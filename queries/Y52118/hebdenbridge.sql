SELECT ROUND(AVG(arr_minutes_late),2) FROM public.historical_services 
WHERE service_id = 'Y52118' 
AND station_from = 'Hebden Bridge'
AND sch_arr_time = '07:30:00'






