const getAllJobs = async (req, res) => {
  res.send("gets all jobs");
};

const getJob = async (req, res) => {
  res.send("gets a job ");
};

const createJob = async (req, res) => {
  res.send("creates  job");
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
