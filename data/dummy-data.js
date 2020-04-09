import Chef from "../models/chef";
import Meal from "../models/meal";
import Filters from "../models/filters";

export const CHEFS = [
  new Chef("גיל רותם", "#f5428d", require("../assets/chefsPics/gil-rotem.jpg")),
  new Chef(
    "אפרת רותם",
    "#f54242",
    require("../assets/chefsPics/efi-rotem.jpg")
  ),
  new Chef(
    "מיכל צדוק",
    "#f5a442",
    require("../assets/chefsPics/michal-zadok.png")
  ),
  new Chef("טלי רותם", "#f5d142", require("../assets/chefsPics/tal-rotem.png")),
  new Chef(
    "איתי צדוק",
    "#368dff",
    require("../assets/chefsPics/itay-zadok.png")
  ),
  new Chef(
    "ניצן רותם",
    "#368dff",
    require("../assets/chefsPics/nitzan-rotem.png")
  ),
  new Chef(
    "אלון פרי",
    "#f5a442",
    require("../assets/chefsPics/alon-perry.png")
  ),
  new Chef(
    "צליל סבירו",
    "#f5d142",
    require("../assets/chefsPics/tslil-saviro.png")
  ),
  new Chef(
    "הילה שפיץ",
    "#368dff",
    require("../assets/chefsPics/hila-spitz.png")
  ),
  new Chef(
    "מעין גפן",
    "#368dff",
    require("../assets/chefsPics/maayan-geffen.png")
  ),
];

export const MEALS = [
  new Meal(
    "m1",
    "גיל",
    "מרק כרובית",
    "פשוט",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
    60,
    [
      "כרובית שלמה",
      "2-3 תפוחי אדמה",
      "1 פחית קרם קוקוס",
      "אבקת מרק, פלפל, חוויאג",
    ],
    [
      "חותכים 2-3 תפוחי אדמה בינוניים לקוביות",
      "חותכים ראש כרובית לפרחים",
      "מבשלים יחד את תפוחי האדמה והכרובית עם מלח עד שמוכן",
      "מועכים בעזרת בלנד מוט",
      "מוסיפים פלפל שחור, אבקת מרק וחוואיג'",
      "שלב מבשלים כ-5 דקות ומוסיפים פחית קרם קוקוס ומשלימים בעוד כ-5 דקות בישול",
    ],
    new Filters(true, true, true, true, false, false, false)
  ),
  new Meal(
    "m2",
    "אפי",
    "קציצות ברוקולי",
    "בינוני",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
    90,
    ["ברוקולי", "ברוקולי", "ברוקולי", "ברוקולי"],
    ["שלב 1", "שלב 2", "שלב 3", "שלב 4", "שלב 5"],
    new Filters(false, false, true, false, true, false, false)
  ),
];
