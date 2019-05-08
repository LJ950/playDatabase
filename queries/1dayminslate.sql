--See the number of minutes the train arrives into [Halifax] late for the service between [Smithy Bridge] and [Halifax] ON [2019-05-02] for the service that is scheduled to arrive in [Halifax] at [07:30:00] 
SELECT arr_minutes_late FROM public.historical_services 
WHERE service_id = 'Y52118' 
AND station_to = 'Halifax'
AND run_date = '2019-05-02'
AND sch_arr_time = '07:30:00'