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

// Ukrainian (Ukraine) (uk_UA)
    plupload.addI18n({
        "Stop Upload": "Зупинити завантаження",
        "Upload URL might be wrong or doesn't exist.": "Адреса завантаження неправильна або не існує.",
        "tb": "тб",
        "Size": "Розмір",
        "Close": "Закрити",
        "Init error.": "Помилка ініціалізації.",
        "Add files to the upload queue and click the start button.": "Додайте файли в чергу та натисніть кнопку \"Завантажити файли\".",
        "Filename": "Назва файлу",
        "Image format either wrong or not supported.": "Формат картинки не правильний або не підтримується.",
        "Status": "Статус",
        "HTTP Error.": "Помилка HTTP.",
        "Start Upload": "Почати завантаження",
        "mb": "мб",
        "kb": "кб",
        "Duplicate file error.": "Такий файл вже присутній в черзі.",
        "File size error.": "Неправильний розмір файлу.",
        "N/A": "Н/Д",
        "gb": "гб",
        "Error: Invalid file extension:": "Помилка: У файлу неправильне розширення:",
        "Select files": "Оберіть файли",
        "%s already present in the queue.": "%s вже присутній у черзі.",
        "File: %s": "Файл: %s",
        "b": "б",
        "Uploaded %d/%d files": "Завантажено %d/%d файлів",
        "Upload element accepts only %d file(s) at a time. Extra files were stripped.": "Завантажувальний елемент приймає лише %d файл(ів) одночасно. Зайві файли було відкинуто.",
        "%d files queued": "В черзі %d файл(ів)",
        "File: %s, size: %d, max file size: %d": "Файл:  %s, розмір: %d, макс. розмір файлу: %d",
        "Drag files here.": "Перетягніть файли сюди.",
        "Runtime ran out of available memory.": "Робоче середовище перевищило ліміт доступної пам'яті.",
        "File count error.": "Занадто багато файлів.",
        "File extension error.": "Неправильне розширення файлу.",
        "Error: File too large:": "Помилка: Файл занадто великий:",
        "Add Files": "Додати файли"
    });

}));