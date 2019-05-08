--See the AVERAGE late minutes over 20days for the train that arrives into [Halifax] and scheduled to arrive in [Halifax] at [07:30:00] 
SELECT AVG(arr_minutes_late) FROM public.historical_services 
WHERE service_id = 'Y52118' 
AND station_to = 'Halifax'
AND sch_arr_time = '07:30:00'