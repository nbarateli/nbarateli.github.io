function changeLang(lang) {
    console.log(lang)
}

const AVAILABLE_LANGUAGES = ['ge', 'en']

const DICTIONARY = {
    'jan': {'en': 'January', 'ge': 'იანვარი'},
    'feb': {'en': 'February', 'ge': 'თებერვალი'},
    'mar': {'en': 'March', 'ge': 'მარტი'},
    'apr': {'en': 'April', 'ge': 'აპრილი'},
    'may': {'en': 'May', 'ge': 'მაისი'},
    'jun': {'en': 'June', 'ge': 'ივნისი'},
    'jul': {'en': 'July', 'ge': 'ივლისი'},
    'aug': {'en': 'August', 'ge': 'აგვისტო'},
    'sep': {'en': 'September', 'ge': 'სექტემბერი'},
    'oct': {'en': 'October', 'ge': 'ოქტომბერი'},
    'nov': {'en': 'November', 'ge': 'ნოემბერი'},
    'dec': {'en': 'December', 'ge': 'დეკემბერი'},
    'present': {'en': 'present', 'ge': 'დღემდე'},
    '': {'en': '', 'ge': ''},
    'name': {'en': 'Niko Barateli', 'ge': 'ნიკო ბარათელი'},
    'software_dev': {'en': 'Software Developer', 'ge': 'პროგრამული უზრუნველყოფის დეველოპერი'},
    'edu': {'en': 'Education', 'ge': 'განათლება'},
    'freeuni': {'en': 'Free University Of Tbilisi', 'ge': 'თბილისის თავისუფალი უნივერსიტეტი'},
    'degree': {'en': 'Bachelor of Computing', 'ge': 'ბაკალვრი კომპიუტინგში'},
    'date': {'en': 'September 2015 - Present', 'ge': 'სექტემბერი 2015 - დღემდე'},
    'work': {'en': 'Work', 'ge': 'სამუშაო გამოცდილება'},
    'about': {'en': 'About', 'ge': 'ჩემს შესახებ'},
    'about_2': {'en': 'About me', 'ge': 'ჩემს შესახებ'},
    'down_cv': {'small': true, 'en': 'Download resume', 'ge': 'გადმოწერეთ რეზიუმე'},
    'resume': {'en': 'Resume', 'ge': 'რეზიუმე'},
    'contact': {'en': 'Contact', 'ge': 'დამიკავშირდით'},
    'about_me': {
        'small': true,
        'en': 'Hi. My name is Niko Barateli, I\'m a junior at Free University of Tbilisi.\n' +
            'I can quickly learn new skills and adapt to a new environment. I\'m very punctual and enthusiastic towards my work.\n' +
            'I love solving problems, writing efficient code with good style and design and learning new technologies.'
        ,
        'ge': 'გამარჯობა. მე ვარ ნიკო ბარათელი, თბილისის თავისუფალი უნივერსიტეტის, კომპიუტერული მეცნიერებებისა და მათემატიკის სკოლის მესამე კურსის სტუდენტი.\n' +
            'კომპიუტერულ მეცნირებებს ვსწავლობ ორ წელზე მეტია. ამ ორი წლის განმავლობაში სამჯერ ვიყავი ლექტორის ერთ-ერთი ასისტენტი (საგანი: პროგრამირების აბსტრაქციები (C++), პროგრამირების მეთოდოლოგია (Java)).\n' +
            'შემიძლია სწრაფად ავითვისო ახალი უნარები და მოვერგო ახალ გარემოს. ვარ პუნქტუალური და საქმის მიმართ ენთუზიასტურად განწყობილი. მიყვარს კარგი სტილის და დიზაინის მქონე, მაქსიმალურად მოქნილი კოდის წერა, არსებულის გაუმჯობესება, ახალი ტექნოლოგიების შესწავლა და ახალ ამოცანებთან გამკლავება. \n' +
            'ასევე, საუნივერსიტეტო განათლების ფარგლებში, მაქვს გუნდთან ერთად მუშაობის გამოცდილებაც (მიმუშავია github-ის გამოყენებით). ამჟამად, ჩემი დაინტერესების სფეროს წარმოადგენს ვებ დეველოპმენტი. საწყის დონეზე ვიცი Java EE, ASP.NET Core MVC, PHP, Laravel Framework და მაქვს სურვილი ეს ცოდნა პრაქტიკით გავაღრმავო. \n'
    },
    'methodology': {'en': 'Programming Methodology', 'ge': 'პროგრამირების მეთოდოლოგა', 'small': true},
    'abstractions': {'en': 'Programming Abstractions', 'ge': 'პროგრამირების აბსტრაქციები', 'small': true},
    'paradigms': {
        'en': 'Programming Paradigms (Computer Organization & Systems)',
        'ge': 'პროგრამირების პარადიგმები / კომპიუტერების წყობა და სისტემები ', 'small': true
    },
    'rdbms': {
        'en': 'Relational Database Management Systems',
        'ge': 'მონაცემთა ბაზების მართვის რელაციური სისტემები',
        'small': true
    },
    'algo': {'en': 'Algorithms and Data Structures', 'ge': 'მონაცემთა სტრუქტურები და ალგორითმები', 'small': true},
    'oop': {
        'en': 'Object Oriented Programming (Software Engineering)',
        'ge': 'ობიექტზე ორიენტირებული პროგრამირება / პროგრამული უზრუნველყოფის ინჟინერია',
        'small': true
    },
    'coursework': {'en': 'Related Coursework:', 'ge': 'გავლილი კურსები:'},
    'seclead': {'en': 'Teaching Assistant (Section Leader)', 'ge': 'ლექტორის ასისტენტი (სექციის ლიდერი)'},
    'seclead_date': {
        'en': 'March 2017 - July 2017 | October 2017 - January 2018',
        'ge': 'მარტი 2017 - ივლისი 2017 | ოქტომბერი 2017 - იანვარი 2018',
        'small': true
    },
    'seclead_description': {
        'small': true,
        'en': 'Picked by the teacher, after being at the top of the class,' +
            ' section leaders are responsible for grading programming homework of 10-15 students ' +
            '(functionality, efficiency, codestyling and documenting), ' +
            'explaining their mistakes and providing consultations if necessary.',
        'ge': 'სექციის ლიდერებს ევალებათ კონსულტაციები  გაუწიონ სტუდენტებს კომპიუტერული მეცნიერებების\n' +
            'ძირითად კურსებში და შეაფასონ მათ მიერ შესრულებული დავალებები აღნიშნულ კურსებში' +
            ' ფუნქციონალურობის, ეფექტურობის, სტილის და დოკუმენტაციის მიხედვით.'
    },
    'address': {
        'small': true, 'en': '\n' +
            '              10a Demetre Tavdadebuli Street, Apt &numero;12,<br>\n' +
            '              Tbilisi, 0131, Georgia<br>', 'ge': '\n' +
            '              10ა დემეტრე თავდადებულის ქუჩა, ბ. &numero;12,<br>\n' +
            '              თბილისი, 0131, საქართველო<br>'
    },
    'phone_number': {'en': 'Phone Number', 'ge': 'საკონტაქტო ნომერი', 'small': true},
    'gifts': {'en': 'Send me cool gadgets at', 'ge': 'ამავსეთ საჩუქრებით: '},
    'skills': {'en': 'Skills', 'ge': 'უნარები'},
    'soft': {'en': 'Software', 'ge': 'პროგრამები'},
    'code_framework': {'en': 'Programming Language/Frameworks', 'ge': 'პროგრამირების ენები/ფრეიმვორკები'},
    'around_web': {'en': 'Around the Web', 'ge': 'მიპოვეთ ინტერნეტში'},
    'email_me': {'small': true, 'en': 'Email me at', 'ge': 'მომწერეთ ელ-ფოსტაზე '},
    'jundev': {'en': 'Junior Web Developer', 'ge': 'უმცროსი ვებ დეველოპერი'},
    'designge': {
        'small': true,
        'en': 'Responsible for fixing bugs or adding new features to already deployed or almost complete web\n' +
            '                  projects.', 'ge': 'პასუხისმგებელი დასრულებულ ან თითქმის დასრულებულ ვებ პროექტებში ' +
            'ბაგების გასწორებასა და ახალი ფუნქციონალის დამატებაზე.'
    }, 'designge_date': {
        'en': 'November 2017 - February 2018',
        'ge': 'ნოემბერი 2017 - თებერვალი 2018',
        'small': true
    },
    fina_intern: {ge: 'სტაჟიორი ჯავა დეველოპერი', en: 'Intern Java Developer', small: true}
};

function translate(lang) {
    function removeLanguages($, args) {
        for (var i in args) {

            jQuery(this).removeClass('lang-' + args[i]);

            jQuery(this).removeClass('lang-' + args[i] + '-small');
        }
    }

    $('.lang').each(function (index, element) {

        var key = $(this).attr('key');
        removeLanguages($(this), AVAILABLE_LANGUAGES);
        try {
            $(this).fadeOut(500);
            setTimeout(function () {
                $(element).html(DICTIONARY[key][lang]);

                $(element).addClass('lang-' + lang + (DICTIONARY[key]['small'] === true ? '-small' : ''));
            }, 500);
            $(this).fadeIn();
        } catch (e) {
            console.error(key)
        }

    });

}

function initTranslation() {

    $('.translate').click(function () {
        var lang = $(this).attr('id');
        translate(lang);
    });
    var currentLang = document.getElementsByTagName('html')[0].getAttribute('lang');
    if (AVAILABLE_LANGUAGES.indexOf(currentLang.toLowerCase()) !== -1) {
        translate(currentLang);
    }
}
