!function(a){"function"==typeof define&&define.amd?define(["jquery","../jquery.validate"],a):a(jQuery)}(function(a){a.extend(a.validator.messages,{required:"To polje je obvezno.",remote:"Vpis v tem polju ni v pravi obliki.",email:"Prosimo, vnesite pravi email naslov.",url:"Prosimo, vnesite pravi URL.",date:"Prosimo, vnesite pravi datum.",dateISO:"Prosimo, vnesite pravi datum (ISO).",number:"Prosimo, vnesite pravo številko.",digits:"Prosimo, vnesite samo številke.",creditcard:"Prosimo, vnesite pravo številko kreditne kartice.",equalTo:"Prosimo, ponovno vnesite enako vsebino.",extension:"Prosimo, vnesite vsebino z pravo končnico.",maxlength:a.validator.format("Prosimo, da ne vnašate več kot {0} znakov."),minlength:a.validator.format("Prosimo, vnesite vsaj {0} znakov."),rangelength:a.validator.format("Prosimo, vnesite od {0} do {1} znakov."),range:a.validator.format("Prosimo, vnesite vrednost med {0} in {1}."),max:a.validator.format("Prosimo, vnesite vrednost manjšo ali enako {0}."),min:a.validator.format("Prosimo, vnesite vrednost večjo ali enako {0}.")})});