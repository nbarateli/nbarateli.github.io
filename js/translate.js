function changeLang(lang) {
    console.log(lang)
}

const DICTIONARY = {
    '': {'en': '', 'ge': ''},
    'name': {'en': 'Niko Barateli', 'ge': 'ნიკო ბარათელი'},
    'software_dev': {'en': 'Software Developer', 'ge': 'პროგრამული უზრუნველყოფის დეველოპერი'},
    'edu': {'en': 'Education', 'ge': 'განათლება'},
    'freeuni': {'en': 'Free University Of Tbilisi', 'ge': 'თბილისის თავისუფალი უნივერსიტეტი'},
    'degree': {'en': 'Bachelor of Computing', 'ge': 'ბაკალვრი კომპიუტინგში'},
    'date': {'en': 'September 2015 - Present', 'ge': 'სექტემბერი 2015 - დღემდე'},
    'work': {'en': 'Work', 'ge': 'სამუშაო გამოცდილება'},


};

function initTranslation() {
    $('.translate').click(function () {
        var lang = $(this).attr('id');
        $('.lang').each(function (index, element) {
            try {

                $(this).text(DICTIONARY[$(this).attr('key')][lang])
            } catch (e) {
                console.error($(this).attr('key'))
            }
        });
    })
}
