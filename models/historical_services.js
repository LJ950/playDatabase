/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Table = sequelize.define(
    "historical_services",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      service_id: {
        type: DataTypes.STRING,
        allowNull: true
      },
      run_date: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      station_from: {
        type: DataTypes.STRING,
        allowNull: false
      },
      station_to: {
        type: DataTypes.STRING,
        allowNull: false
      },
      final_station: {
        type: DataTypes.STRING,
        allowNull: false
      },
      sch_dep_time: {
        type: DataTypes.TIME,
        allowNull: true
      },
      act_dep_time: {
        type: DataTypes.TIME,
        allowNull: true
      },
      dep_minutes_late: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: "0"
      },
      sch_arr_time: {
        type: DataTypes.TIME,
        allowNull: true
      },
      act_arr_time: {
        type: DataTypes.TIME,
        allowNull: true
      },
      arr_minutes_late: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: "0"
      },
      cancelled: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: "0"
      },
      cancelled_reason: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "NULL"
      }
    },
    {
      tableName: "historical_services"
    }
  );
};
