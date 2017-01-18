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

// Kazakh (kk)
    plupload.addI18n({
        "Stop Upload": "Жүктеуді тоқтату",
        "Upload URL might be wrong or doesn't exist.": "Жүктеуді қабылдаушы URL қате не мүлдем көрсетілмеген.",
        "tb": "тб",
        "Size": "Өлшемі",
        "Close": "Жабу",
        "Init error.": "Инициализация қатесі.",
        "Add files to the upload queue and click the start button.": "Жүктеу кезегіне файлдар қосып, Бастау кнопкасын басыңыз.",
        "Filename": "Файл аты",
        "Image format either wrong or not supported.": "Сурет форматы қате немесе оның қолдауы жоқ.",
        "Status": "Күйі",
        "HTTP Error.": "HTTP қатесі.",
        "Start Upload": "Жүктеуді бастау",
        "mb": "мб",
        "kb": "кб",
        "Duplicate file error.": "Файл қайталамасының қатесі.",
        "File size error.": "Файл өлшемінің қатесі.",
        "N/A": "Қ/Ж",
        "gb": "гб",
        "Error: Invalid file extension:": "Қате: Файл кеңейтілуі қате:",
        "Select files": "Файлдар таңдаңыз",
        "%s already present in the queue.": "%s файлы кезекте бұрыннан бар.",
        "File: %s": "Файл: %s",
        "b": "б",
        "Uploaded %d/%d files": "Жүктелген: %d/%d файл",
        "Upload element accepts only %d file(s) at a time. Extra files were stripped.": "Жүктеу элементі бір кезде %d файл ғана жүктей алады. Артық файлдар жүктелмейді.",
        "%d files queued": "%d файл кезекке қойылды",
        "File: %s, size: %d, max file size: %d": "Файл: %s, өлшемі: %d, макс. файл өлшемі: %d",
        "Drag files here.": "Файлдарды мына жерге тастаңыз.",
        "Runtime ran out of available memory.": "Орындау кезінде жады жетпей қалды.",
        "File count error.": "Файл санының қатесі.",
        "File extension error.": "Файл кеңейтілуінің қатесі.",
        "Error: File too large:": "Қате: Файл мөлшері тым үлкен:",
        "Add Files": "Файл қосу"
    });

}));