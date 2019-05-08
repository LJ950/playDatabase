const Sequelize = require("sequelize");

const connection = new Sequelize(
  "historical_trains_test",
  "postgres",
  "password",
  {
    dialect: "postgres",
    port: 5432
  }
);
const Table = connection.define(
  "historical_services",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    service_id: {
      type: Sequelize.STRING,
      allowNull: true
    },
    run_date: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    station_from: {
      type: Sequelize.STRING,
      allowNull: false
    },
    station_to: {
      type: Sequelize.STRING,
      allowNull: false
    },
    final_station: {
      type: Sequelize.STRING,
      allowNull: false
    },
    sch_dep_time: {
      type: Sequelize.TIME,
      allowNull: true
    },
    act_dep_time: {
      type: Sequelize.TIME,
      allowNull: true
    },
    dep_minutes_late: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: "0"
    },
    sch_arr_time: {
      type: Sequelize.TIME,
      allowNull: true
    },
    act_arr_time: {
      type: Sequelize.TIME,
      allowNull: true
    },
    arr_minutes_late: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: "0"
    },
    cancelled: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: "0"
    },
    cancelled_reason: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "NULL"
    }
  },
  {
    tableName: "historical_services"
  }
);

// connection.authenticate().then(
//   function(err) {
//     console.log("Connection has been established successfully.");
//   },
//   function(err) {
//     console.log("Unable to connect to the database:", err);
//   }
// );

connection.sync();
// connection.sync({ force: true }).then(() => {
//   console.log(`Database & tables created!`);
// });

//table.findAll({ attributes: cancelled });
