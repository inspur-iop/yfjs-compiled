(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['plupload'], factory);
    } else if(typeof exports === 'object' && typeof module !== 'undefined') {
        var plupload;
        try {
            plupload = require('plupload');
        } catch (err) {
            plupload = root.plupload;
        }
        if (!plupload) throw new Error('plupload dependency not found');
        module.exports = factory(plupload);
    } else {
        if (!root.plupload) throw new Error('plupload dependency not found');
        factory(root.plupload);
    }
}(this, function(plupload) {

// Slovak (sk)
    plupload.addI18n({
        "Stop Upload": "Zastaviť nahrávanie",
        "Upload URL might be wrong or doesn't exist.": "URL pre nahratie nie je správna alebo neexistuje.",
        "tb": "tb",
        "Size": "Veľkosť",
        "Close": "Zatvoriť",
        "Init error.": "Chyba inicializácie.",
        "Add files to the upload queue and click the start button.": "Pridajte súbory do zoznamu a potom spustite nahrávanie.",
        "Filename": "Názov súboru",
        "Image format either wrong or not supported.": "Formát obrázku je nesprávny alebo nie je podporovaný.",
        "Status": "Stav",
        "HTTP Error.": "HTTP Chyba.",
        "Start Upload": "Spustiť nahrávanie",
        "mb": "mb",
        "kb": "kb",
        "Duplicate file error.": "Duplicitný súbor.",
        "File size error.": "Súbor je príliš veľký.",
        "N/A": "N/A",
        "gb": "gb",
        "Error: Invalid file extension:": "Error: Nesprávny typ súboru:",
        "Select files": "Vyberte súbory",
        "%s already present in the queue.": "%s sa už nachádza v zozname.",
        "File: %s": "Súbor: %s",
        "b": "b",
        "Uploaded %d/%d files": "Nahraných %d/%d súborov",
        "Upload element accepts only %d file(s) at a time. Extra files were stripped.": "Upload element accepts only %d file(s) at a time. Extra files were stripped.",
        "%d files queued": "%d súborov pridaných do zoznamu",
        "File: %s, size: %d, max file size: %d": "Súbor: %s, veľkosť: %d, max. veľkosť súboru: %d",
        "Drag files here.": "Sem pretiahnite súbory.",
        "Runtime ran out of available memory.": "Runtime ran out of available memory.",
        "File count error.": "Nesprávny počet súborov.",
        "File extension error.": "Chybný typ súboru.",
        "Error: File too large:": "Chyba: Súbor je príliš veľký:",
        "Add Files": "Pridať súbory"
    });

}));