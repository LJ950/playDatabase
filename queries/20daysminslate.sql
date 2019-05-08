--See the daily late minutes the train arrives into [Halifax]  for the service between [Smithy Bridge] and [Halifax] for the service that is scheduled to arrive in [Halifax] at [07:30:00] 
SELECT arr_minutes_late FROM public.historical_services 
WHERE service_id = 'Y52118' 
AND station_to = 'Halifax'
AND sch_arr_time = '07:30:00'