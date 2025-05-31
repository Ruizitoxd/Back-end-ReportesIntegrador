import express from 'express';
import ReportesController from '../controladores/reporteGeneral.js';

const router = express.Router();

router.post('/pdf/conglomerados', ReportesController.generarPDFConglomerados);

export default router;