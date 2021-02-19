const empSchema = require("../modals/employee");

module.exports = {
  addEmployee(req, res, next) {
    empSchema
      .create(req.body)
      .then((result) => {
        res.send(result);
        return;
      })
      .catch((err) => {
        throw err;
      });
  },
  getEmpData(req, res, next) {
    empSchema
      .find({})
      .then((result) => {
        res.send(result);
        return;
      })
      .catch((err) => {
        throw err;
      });
  },
  getSingleEmp(req, res, next) {
    empSchema
      .find({ emp_id: req.body.emp_id })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        throw err;
      });
  },
  deleteEmp(req, res, next) {
    empSchema
      .deleteOne({ emp_id: req.body.emp_id })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  },
  updateEmp(req, res, next) {
    empSchema
      .updateOne(
        { emp_id: req.body.emp_id },
        {
          $set: {
            emp_name: req.body.emp_name,
            emp_mail: req.body.emp_mail,
            emp_age: req.body.emp_age,
          },
        }
      )
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        throw err;
      });
  },
};
