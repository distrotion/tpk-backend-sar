const express = require("express");
const router = express.Router();
var mssql = require('./../../function/mssql');


router.get('/flow002', async (req, res) => {

    res.json("testflow2");
})

//------------------------------------------------ user

router.post('/user_update', (req, res) => {
    console.log("-------- user_update --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})

//------------------------------------------------ Custommer data
router.post('/Custommer_data_update', (req, res) => {
    console.log("-------- Custommer data_update --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})
//------------------------------------------------ Frequency
router.post('/Frequency_update', (req, res) => {
    console.log("-------- Frequency_update --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})
//------------------------------------------------ Routine Customer
router.post('/Routine_Customer_update', (req, res) => {
    console.log("-------- Routine_Customer_update --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})
//------------------------------------------------ GroupName
router.post('/GroupName_update', (req, res) => {
    console.log("-------- GroupName_update --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})
//------------------------------------------------ SampleType
router.post('/SampleType_update', (req, res) => {
    console.log("-------- SampleType_update --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})
//------------------------------------------------ SampleName
router.post('/SampleName_update', (req, res) => {
    console.log("-------- SampleName_update --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})
//------------------------------------------------ Tank
router.post('/Tank_update', (req, res) => {
    console.log("-------- Tank_update --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})
//------------------------------------------------ Instrument
router.post('/Instrument_update', (req, res) => {
    console.log("-------- Instrument_update --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})
//------------------------------------------------ Unit
router.post('/Unit_update', (req, res) => {
    console.log("-------- Unit_update --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})
//------------------------------------------------ item
router.post('/item_update', (req, res) => {
    console.log("-------- item_update --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})
//------------------------------------------------ ItemGroup
router.post('/ItemGroup_update', (req, res) => {
    console.log("-------- ItemGroup_update --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})

//------------------------------------------------ Routine_MasterCustomer
router.post('/Routine_MasterCustomer_update', (req, res) => {
    console.log("-------- Routine_MasterCustomer_update --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})

//------------------------------------------------ Routine_MasterLab
router.post('/Routine_MasterLab_update', (req, res) => {
    console.log("-------- Routine_MasterLab_update --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})

//------------------------------------------------ Routine_MasterTS
router.post('/Routine_MasterTS_update', (req, res) => {
    console.log("-------- Routine_MasterTS_update --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok"}];
    res.json(output)
})

module.exports = router;





