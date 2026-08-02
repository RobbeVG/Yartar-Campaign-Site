/**
 * Count session pages in the current folder and return the next session number. Starting counting at Session 0.
 * In case page name is already with a number, it will return that number.
 * @param {*} tp - The Templater plugin object.
 * @returns {number} The session number to use for the created session page.
 */
function getNewSessionNr(tp) {

    // Get the current file name and check if it already contains a session number
    const currentFileName = tp.file.title;
    const sessionNumberMatch = currentFileName?.match(/session\s*(\d+)/i);
    if (sessionNumberMatch) {
        return parseInt(sessionNumberMatch[1], 10);
    }

    const folder = tp?.file?.folder?.();
    const dataview = app?.plugins?.plugins?.dataview?.api;

    if (!folder || !dataview) {
        return 1;
    }

    const numOfSessions = dataview
        .pages(`"${folder}"`)
        .where((p) => p.file.name.toLowerCase().includes("session"))
        .length;

    return numOfSessions;
}

module.exports = getNewSessionNr;