/**
 * Ideally this should not be part of LMS (Lead Management System)
 * But just for the sake of it.
 * Scheduler Implementation is not done but I do my own production-ready working design of Serverless Scheduler.
 * Let me know if interested.
 * @type {Lead}
 */
const Lead = require('../models/Leads');
const SchedulerService = require('../services/schedules/scheduler.service');

const SchedulerController = () => {

  const getAll = async (req, res) => {
    return res.status(200).json({});
  };

  const create = async (req, res) => {
    return res.status(200).json({});
  };

  return {
    getAll,
    create,
  };
};

module.exports = SchedulerController;
