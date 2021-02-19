const express = require("express");
const empController = require("./controller/empController");

const router = express.Router();

router.post("/add_emp", empController.addEmployee);
router.get("/get_allEmployee", empController.getEmpData);
router.post("/getEmp", empController.getSingleEmp);
router.delete("/deleteEmp", empController.deleteEmp);
router.post("/updateEmp", empController.updateEmp);

module.exports = router;
