const path = require("path");
const fs = require("fs");
const directoryPath = path.join(__dirname, "raw-data");
// console.log(directoryPath);

fs.readdir(directoryPath, function(err, files) {
  const data = [];
  if (err) return console.log(err);
  else
    files.forEach(function(file) {
      let contents = fs.readFileSync(`${directoryPath}/${file}`, "utf8");
      const dataToEdit = JSON.parse(contents);
      const wantedData = {
        service_id: dataToEdit.serviceUid,
        run_date: dataToEdit.runDate,
        station_from: dataToEdit.locations[8].description,
        station_to: dataToEdit.locations[8].destination[0].description,
        sch_dep_time: dataToEdit.locations[8].gbttBookedDeparture,
        act_dep_time: dataToEdit.locations[8].realtimeDeparture,
        dep_minutes_late: dataToEdit.locations[8].realtimeGbttDepartureLateness,
        sch_arr_time: dataToEdit.locations[8].gbttBookedArrival,
        act_arr_time: dataToEdit.locations[8].realtimeArrival,
        arr_minutes_late: dataToEdit.locations[8].realtimeGbttArrivalLateness,
        cancelled: dataToEdit.locations[8].cancelReasonLongText ? true : false,
        cancelled_reason: dataToEdit.locations[8].cancelReasonLongText
      };
      data.push(wantedData);
      newData = JSON.stringify(data);
      fs.writeFileSync("db/data/compiledData.json", newData, err => {
        if (err) console.log(err);
        else console.log("saved!");
      });
    });
});
