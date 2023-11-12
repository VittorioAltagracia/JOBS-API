const Job = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId }).sort("createdAt");
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length });

  res.send("gets all jobs");
};

const getJob = async (req, res) => {
  const job = await Job.findOne(req.body._id);
  res.json({ job: { job: job.position } });
};

const createJob = async (req, res) => {
  // passing user id with our request to associate a job to a user
  req.body.createdBy = req.user.userId;

  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const updateJob = async (req, res) => {
  res.send("updates job");
};

const deleteJob = async (req, res) => {
  res.send("deletes job");
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
