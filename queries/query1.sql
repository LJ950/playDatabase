--See a list of all services between [Smithy Bridge] and [Halifax] ON [2019-05-02] FOR the [07:13] service from [Smithy Bridge]
SELECT * FROM public.historical_services 
WHERE service_id = 'Y52118'
AND run_date = '2019-05-02'
AND sch_dep_time BETWEEN '07:13:00' and '07:30:00'