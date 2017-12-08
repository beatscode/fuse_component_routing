var Observable = require("FuseJS/Observable");
var observableObj = Observable({

    "_physicians": null,

});

// List observables

var _physicians = observableObj.map(function(x) {
    return x.physicians;
});


function selectedPhysicianHandler(arg) {
    var phys = arg.data.firstname
    console.log(JSON.stringify(arg.data), typeof arg.data);
    router.goto("Appointment");
}

function init() {
    console.log("Loading Physicians")
    _physicians.replaceAll([
        {
            "firstname": "Edna ",
            "lastname": "Akoto",
            "title": "MD",
            "medicalschool": "Albert Einstein College of\nMedicine",
            "specialty": "Pediatrician",
            "ryanlocation": "Ryan Women & Children’s Center",
            "bio": "",
            "photourl": "http://ryanhealth.org/wp-content/uploads/2016/07/E.Akoto_3crop.jpg"
      },
        {
            "firstname": "Daniel ",
            "lastname": "Baxter",
            "title": "MD",
            "medicalschool": "University of Pennsylvania",
            "specialty": "Internist/HIV Specialist",
            "ryanlocation": "William F. Ryan",
            "bio": "",
            "photourl": "http://ryanhealth.org/wp-content/uploads/2016/07/D.Baxter_2crop.jpg"
      },
        {
            "firstname": "Joe ",
            "lastname": "Brewster",
            "title": "MD",
            "medicalschool": "Harvard Medical School",
            "specialty": "Psychiatrist",
            "ryanlocation": "Ryan-NENA",
            "bio": "",
            "photourl": "http://ryanhealth.org/wp-content/uploads/2016/07/Joe-Brewster-MDcrop.jpg"
      },
        {
            "firstname": "Takyan ",
            "lastname": "Chan",
            "title": "DDS",
            "medicalschool": "New York University College of Dentistry",
            "specialty": "Dentist",
            "ryanlocation": "William F. Ryan",
            "bio": "",
            "photourl": "http://ryanhealth.org/wp-content/uploads/2016/07/T.Chan_1crop.jpg"
      },
        {
            "firstname": "Kathleen ",
            "lastname": "Corrigan",
            "title": "MD",
            "medicalschool": "St. George’s University",
            "specialty": "Pediatrician",
            "ryanlocation": "Ryan-NENA",
            "bio": "",
            "photourl": "http://ryanhealth.org/wp-content/uploads/2016/07/K.Corrigancrop.jpg"
      },
        {
            "firstname": "Yasmin ",
            "lastname": "Hassan",
            "title": "MD",
            "medicalschool": "Fatima Jinna Medical College for Women",
            "specialty": "Pediatrician",
            "ryanlocation": "Ryan/Chelsea-Clinton",
            "bio": "",
            "photourl": "http://ryanhealth.org/wp-content/uploads/2016/07/Y.Hassan_1crop.jpg"
      },
        {
            "firstname": "Angela ",
            "lastname": "Hon",
            "title": "MD",
            "medicalschool": "Universidad de Costa Rica",
            "specialty": "Family Practitioner",
            "ryanlocation": "Ryan/Chelsea-Clinton",
            "bio": "",
            "photourl": "http://ryanhealth.org/wp-content/uploads/2016/07/Angela-Hon-2crop.jpg"
      },
        {
            "firstname": "Kendra ",
            "lastname": "Joseph-Rogers",
            "title": "WHNP",
            "medicalschool": "Columbia University School of Nursing",
            "specialty": "Nurse Practitioner",
            "ryanlocation": "Ryan Women & Children’s Center",
            "bio": "",
            "photourl": ""
      },
        {
            "firstname": "Andrew ",
            "lastname": "Lam",
            "title": "DDS",
            "medicalschool": "New York University",
            "specialty": "Dentist",
            "ryanlocation": "Ryan-NENA",
            "bio": "",
            "photourl": "http://ryanhealth.org/wp-content/uploads/2016/07/A.Lamcrop.jpg"
      },
        {
            "firstname": "Richard ",
            "lastname": "Lee",
            "title": "DDS",
            "medicalschool": "Columbia University College of Dental Medicine",
            "specialty": "Dentist",
            "ryanlocation": "William F. Ryan",
            "bio": "",
            "photourl": "http://ryanhealth.org/wp-content/uploads/2016/07/R.Lee_2crop.jpg"
      },
        {
            "firstname": "Anya ",
            "lastname": "Maddow-Zimet",
            "title": "WHNP",
            "medicalschool": "University of Pennsylvania School of Nursing",
            "specialty": "Nurse Practitioner",
            "ryanlocation": "Ryan Women & Children’s Center",
            "bio": "",
            "photourl": "http://ryanhealth.org/wp-content/uploads/2016/07/A.MaddowZimet_2crop.jpg"
      },
        {
            "firstname": "Karen ",
            "lastname": "Rhoden",
            "title": "DMD",
            "medicalschool": "Tufts University School of Dental Medicine",
            "specialty": "Dentist",
            "ryanlocation": "Ryan-NENA",
            "bio": "",
            "photourl": "http://ryanhealth.org/wp-content/uploads/2016/07/K.Rhodencrop.jpg"
      },
        {
            "firstname": "Marc ",
            "lastname": "Rubenstein",
            "title": "MD",
            "medicalschool": "Albert Einstein College of Medicine",
            "specialty": "Internist, Adult Medicine",
            "ryanlocation": "William F. Ryan",
            "bio": "",
            "photourl": "http://ryanhealth.org/wp-content/uploads/2016/07/M.Rubensteincrop.jpg"
      },
        {
            "firstname": "Jonathan ",
            "lastname": "Swartz",
            "title": "MD",
            "medicalschool": "University of Connecticut Health Center",
            "specialty": "Chief Medical Officer/Family Physician",
            "ryanlocation": "William F. Ryan",
            "bio": "",
            "photourl": "http://ryanhealth.org/wp-content/uploads/2016/07/J.Swartzcrop.jpg"
      },
        {
            "firstname": "Brooke ",
            "lastname": "Trenton",
            "title": "MD",
            "medicalschool": "West Virginia University School of Medicine",
            "specialty": "Pediatrician",
            "ryanlocation": "Ryan Women & Children’s Center",
            "bio": "",
            "photourl": "http://ryanhealth.org/wp-content/uploads/2016/07/B.Trenton_2crop.jpg"
      },
        {
            "firstname": "Khin S. ",
            "lastname": "Win",
            "title": "MD",
            "medicalschool": "Institute of Medicine",
            "specialty": "Internist",
            "ryanlocation": "Ryan-NENA",
            "bio": "",
            "photourl": "http://ryanhealth.org/wp-content/uploads/2016/07/K.Wincrop.jpg"
      },
        {
            "firstname": "Patricia ",
            "lastname": "Hailey",
            "title": "MD",
            "medicalschool": "University of Michigan Medical School",
            "specialty": "Pediatrician",
            "ryanlocation": "Ryan Women & Children’s Center",
            "bio": "",
            "photourl": ""
      },
        {
            "firstname": "Rochelle ",
            "lastname": "Lipshutz",
            "title": "CNM",
            "medicalschool": "SUNY at Stony Brook",
            "specialty": "Certified Nurse Midwife",
            "ryanlocation": "Ryan-NENA",
            "bio": "",
            "photourl": ""
      },
        {
            "firstname": "Sejal ",
            "lastname": "Majmudar",
            "title": "MD",
            "medicalschool": "Mt. Sinai School of Medicine",
            "specialty": "Pediatrician",
            "ryanlocation": "Ryan Women & Children’s Center",
            "bio": "",
            "photourl": ""
      },
        {
            "firstname": "Adelaide ",
            "lastname": "Nardone",
            "title": "MD",
            "medicalschool": "New York Medical School",
            "specialty": "GYN Practitioner",
            "ryanlocation": "Ryan-NENA",
            "bio": "",
            "photourl": ""
      },
        {
            "firstname": "Lydia ",
            "lastname": "Yeager",
            "title": "PNP",
            "medicalschool": "Vanderbilt University School of Nursing",
            "specialty": "Pediatric Nurse Practitioner",
            "ryanlocation": "School Based Health",
            "bio": "",
            "photourl": ""
      }
     ]);
}

module.exports = {
    "init": init,
    "selectedPhysicianHandler": selectedPhysicianHandler,
    "physicians": _physicians,

}