/**
 * Guardianes de la piedra: la ruta STEAM
 * Recibe las respuestas de los estudiantes y las guarda en la hoja "Respuestas".
 * Instrucciones de instalación en README.md.
 */
const COLUMNAS = [
  'fecha', 'nombre', 'grado', 'huellas',
  'diag_petroglifo', 'diag_ia', 'diag_animal', 'expedicion',
  'ciencia_funciones', 'arte_motivo', 'arte_significado',
  'ia_figura', 'ia_resultado', 'ia_girada', 'ia_poca_luz', 'ia_no_entrenado', 'ia_limite',
  'reflexion_1', 'reflexion_2', 'reflexion_3', 'reflexion_4',
  'dilema', 'dilema_porque', 'compromisos', 'autoevaluacion'
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const datos = JSON.parse(e.postData.contents);
    const libro = SpreadsheetApp.getActiveSpreadsheet();
    const hoja = libro.getSheetByName('Respuestas') || libro.insertSheet('Respuestas');
    if (hoja.getLastRow() === 0) {
      hoja.appendRow(COLUMNAS);
      hoja.setFrozenRows(1);
    }
    const fila = COLUMNAS.map(c => {
      const v = datos[c] === undefined || datos[c] === null ? '' : String(datos[c]);
      return v.slice(0, 2000); // límite de seguridad por celda
    });
    hoja.appendRow(fila);
    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return ContentService.createTextOutput('El registro de Guardianes de la piedra está activo.');
}
