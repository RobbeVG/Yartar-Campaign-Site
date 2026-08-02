/**
 * Retrieve the previous session note in the current folder.
 * @param {*} tp - The Templater plugin object.
 * @returns {string|null}
 */
function getPrevSession(tp) {
    const folder = tp?.file?.folder?.();
    const currentFile = tp.file ?? null;
    const dataView = app?.plugins?.plugins?.dataview?.api;

    if (!folder && !currentFile && !dataView) {
        return null;
    }


    //filter so it is not this file and date existsand sort by date property if it exists. 

    const sessionFiles = 
        dataView.pages(`"${folder}"`)
        .filter((p) => p.file != currentFile)
        .filter((p) => p.date)
        .sort((p) => p.date, 'desc')
    || [];


    if (!sessionFiles.length) {
        console.log("No session files found in folder:", folder);
        return null;
    }
    else {
        console.log("Session files found:", sessionFiles);
        //print console date's
        sessionFiles.forEach((p) => {
            console.log("Session file:", p.file.name, "Date:", p.date);
        });
        return sessionFiles[0].file.name;
    }
}

module.exports = getPrevSession;