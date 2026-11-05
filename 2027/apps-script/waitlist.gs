/*
  HackUNCP waitlist: saves the website's "Join mailing list" sign-ups into the Google Sheet
  this script belongs to, one row per email, in a tab called "Waitlist".

  It runs in Google Apps Script, not on the website. Setup steps are in the README
  ("Connect the waitlist"). After changing this file, paste it into the Apps Script
  editor again and deploy a new version of the same deployment, so the URL stays the same.
*/

const TAB = "Waitlist";

function doPost(e) {
  const fields = e.parameter;

  // People never see the "website" field, so anything in it came from a bot.
  if (fields.website) return reply({ ok: true });
  if (fields.form !== "waitlist") return reply({ ok: false, error: "Unknown form" });

  const email = String(fields.email || "").trim().toLowerCase();
  // A cell starting with = + or - would run as a formula, so those are refused too.
  if (email.length > 254 || !/^[^\s@=+\-][^\s@]*@[^\s@]+\.[^\s@]+$/.test(email)) {
    return reply({ ok: false, error: "Invalid email" });
  }

  // One sign-up at a time, so two at once can't both pass the duplicate check.
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = waitlistSheet();
    const saved = sheet.getRange(2, 2, Math.max(sheet.getLastRow() - 1, 1)).getValues().flat();
    if (!saved.includes(email)) sheet.appendRow([new Date(), email]);
  } finally {
    lock.releaseLock();
  }

  return reply({ ok: true });
}

/** The "Waitlist" tab, created with its header row the first time someone signs up. */
function waitlistSheet() {
  const book = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = book.getSheetByName(TAB);
  if (!sheet) {
    sheet = book.insertSheet(TAB);
    sheet.appendRow(["Signed up", "Email"]);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function reply(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(ContentService.MimeType.JSON);
}
