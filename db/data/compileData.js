const path = require("path");
const fs = require("fs");
const directoryPath = path.join(__dirname, "raw-data");

fs.readdir(directoryPath, function(err, files) {
  const data = [];
  if (err) return console.log(err);
  else
    files.forEach(function(file) {
      let contents = fs.readFileSync(`${directoryPath}/${file}`, "utf8");
      const dataToEdit = JSON.parse(contents);
      for (let i = 0; i < dataToEdit.locations.length; i++) {
        let wantedData;
        if (i < 9) {
          wantedData = {
            service_id: dataToEdit.serviceUid,
            run_date: dataToEdit.runDate,
            station_from: dataToEdit.locations[i].description,
            station_to: dataToEdit.locations[i + 1].description,
            final_station: dataToEdit.locations[i].destination[0].description,
            sch_dep_time: dataToEdit.locations[i].gbttBookedDeparture,
            act_dep_time: dataToEdit.locations[i].realtimeDeparture,
            dep_minutes_late:
              dataToEdit.locations[i].realtimeGbttDepartureLateness,
            sch_arr_time: dataToEdit.locations[i].gbttBookedArrival,
            act_arr_time: dataToEdit.locations[i].realtimeArrival,
            arr_minutes_late:
              dataToEdit.locations[i].realtimeGbttArrivalLateness,
            cancelled: dataToEdit.locations[i].cancelReasonLongText ? 60 : 0,
            cancelled_reason: dataToEdit.locations[i].cancelReasonLongText
          };
        } else {
          wantedData = {
            service_id: dataToEdit.serviceUid,
            run_date: dataToEdit.runDate,
            station_from: dataToEdit.locations[i].description,
            station_to: "Leeds",
            final_station: dataToEdit.locations[i].destination[0].description,
            sch_dep_time: dataToEdit.locations[i].gbttBookedDeparture,
            act_dep_time: dataToEdit.locations[i].realtimeDeparture,
            dep_minutes_late:
              dataToEdit.locations[i].realtimeGbttDepartureLateness,
            sch_arr_time: dataToEdit.locations[i].gbttBookedArrival,
            act_arr_time: dataToEdit.locations[i].realtimeArrival,
            arr_minutes_late:
              dataToEdit.locations[i].realtimeGbttArrivalLateness,
            cancelled: dataToEdit.locations[i].cancelReasonLongText ? 60 : 0,
            cancelled_reason: dataToEdit.locations[i].cancelReasonLongText
          };
        }
        data.push(wantedData);
      }
      newData = JSON.stringify(data);
      fs.writeFileSync("db/data/compiledData.json", newData, err => {
        if (err) console.log(err);
        else console.log("saved!");
      });
    });
});

// fs.readdir(directoryPath, function (err, files) {
//   const data = [];
//   if (err) return console.log(err);
//   else
//     files.forEach(function (file) {
//       let contents = fs.readFileSync(`${directoryPath}/${file}`, "utf8");
//       const dataToEdit = JSON.parse(contents);
//       const wantedData = {
//         service_id: dataToEdit.serviceUid,
//         run_date: dataToEdit.runDate,
//         station_from: dataToEdit.locations[8].description,
//         station_to: dataToEdit.locations[8].destination[0].description,
//         sch_dep_time: dataToEdit.locations[8].gbttBookedDeparture,
//         act_dep_time: dataToEdit.locations[8].realtimeDeparture,
//         dep_minutes_late: dataToEdit.locations[8].realtimeGbttDepartureLateness,
//         sch_arr_time: dataToEdit.locations[8].gbttBookedArrival,
//         act_arr_time: dataToEdit.locations[8].realtimeArrival,
//         arr_minutes_late: dataToEdit.locations[8].realtimeGbttArrivalLateness,
//         cancelled: dataToEdit.locations[8].cancelReasonLongText ? true : false,
//         cancelled_reason: dataToEdit.locations[8].cancelReasonLongText
//       };
//       data.push(wantedData);
//       newData = JSON.stringify(data);
//       fs.writeFileSync("db/data/compiledData.json", newData, err => {
//         if (err) console.log(err);
//         else console.log("saved!");
//       });
//     });
// });
