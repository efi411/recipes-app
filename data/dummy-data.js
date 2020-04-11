import Chef from "../models/chef";
import Meal from "../models/meal";
import Filters from "../models/filters";

export const CHEFS = [
  new Chef(
    "c1",
    "גיל רותם",
    "#f5428d",
    require("../assets/chefsPics/gil-rotem.jpg")
  ),
  new Chef(
    "c2",
    "אפרת רותם",
    "#f54242",
    require("../assets/chefsPics/efi-rotem.jpg")
  ),
  new Chef(
    "c3",
    "מיכל צדוק",
    "#f5a442",
    require("../assets/chefsPics/michal-zadok.png")
  ),
  new Chef(
    "c4",
    "טלי רותם",
    "#f5d142",
    require("../assets/chefsPics/tal-rotem.png")
  ),
  new Chef(
    "c5",
    "איתי צדוק",
    "#368dff",
    require("../assets/chefsPics/itay-zadok.png")
  ),
  new Chef(
    "c5",
    "ניצן רותם",
    "#368dff",
    require("../assets/chefsPics/nitzan-rotem.png")
  ),
  new Chef(
    "c6",
    "אלון פרי",
    "#f5a442",
    require("../assets/chefsPics/alon-perry.png")
  ),
  new Chef(
    "c7",
    "צליל סבירו",
    "#f5d142",
    require("../assets/chefsPics/tslil-saviro.png")
  ),
  new Chef(
    "c8",
    "הילה שפיץ",
    "#368dff",
    require("../assets/chefsPics/hila-spitz.png")
  ),
  new Chef(
    "c9",
    "מעין גפן",
    "#368dff",
    require("../assets/chefsPics/maayan-geffen.png")
  ),
];

export const MEALS = [
  new Meal(
    "m1",
    "c1",
    "מרק כרובית",
    "פשוט",
    require("../assets/chefsPics/maayan-geffen.png"),
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
    "c2",
    "קציצות ברוקולי",
    "בינוני",
    require("../assets/chefsPics/tslil-saviro.png"),
    90,
    ["ברוקולי4", "ברוקולי3", "ברוקולי2", "ברוקולי"],
    ["שלב 1", "שלב 2", "שלב 3", "שלב 4", "שלב 5"],
    new Filters(false, false, true, false, true, false, false)
  ),
  new Meal(
    "m3",
    "c7",
    "מרק עדשים כתומות",
    "פשוט",
    require("../assets/chefsPics/itay-zadok.png"),
    60,
    [
      "2-3 כפות שמן זית",
      "1 בצל מקולף וחתוך לקוביות",
      "3 קישואים בגודל בינוני, חתוכים לקוביות קטנות",
      "1 כוס  עדשים אדומות",
      "1/2 כפית כורכום",
      "מלח, פלפל שחור",
      "5 כוסות ציר ירקות",
    ],
    [
      "מלהיטים סיר מעל להבה גבוהה ויוצקים שמן זית. מנמיכים את האש ללהבה בינונית-נמוכה ומטגנים בצל וקישואים תוך כדי ערבוב במשך 3 דקות.",
      "מגביהים את הלהבה, מוסיפים עדשים ומערבבים. מוסיפים תבלינים ואת הנוזלים, מכסים את הסיר ומביאים לרתיחה.",
      "מנמיכים את הלהבה וממשיכים לבשל כ-15 דקות, עד שהעדשים מתרככות לחלוטין. אם המרק מסמיך מאוד, מוסיפים עוד נוזלים. יוצקים לקעריות הגשה ומגישים.",
    ],
    new Filters(true, true, true, true, false, false, false)
  ),
  new Meal(
    "m4",
    "c1",
    "חומוס אפונה",
    "פשוט",
    require("../assets/chefsPics/itay-zadok.png"),
    60,
    [
      "1/2 1 ליטר מים",
      "500 גרם  אפונה צהובה",
      "6 שיני שום",
      "1 בצל לבן מקולף",
      "1/4 לימון (עם הקליפה)",
      "1/2 כוס טחינה גולמית איכותית",
      "1/4 כוס שמן זית",
    ],
    [
      "חותכים 2-3 תפוחי אדמה בינוניים לקוביות",
      "מגביהים את הלהבה, מוסיפים עדשים ומערבבים. מוסיפים תבלינים ואת הנוזלים, מכסים את הסיר ומביאים לרתיחה.",
      "מלהיטים סיר מעל להבה גבוהה ויוצקים שמן זית. מנמיכים את האש ללהבה בינונית-נמוכה ומטגנים בצל וקישואים תוך כדי ערבוב במשך 3 דקות.",
    ],
    new Filters(true, true, true, true, false, false, false)
  ),
  new Meal(
    "m5",
    "c4",
    "אורז בסמטי עם גרגירי חומוס וירקות",
    "פשוט",
    require("../assets/chefsPics/itay-zadok.png"),
    60,
    ["כרובית ", "2-3 תפוחי אדמה", "1 פחית קרם קוקוס", "אבקת מרק, פלפל, חוויאג"],
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
    "m6",
    "c1",
    "חמין עשיר",
    "פשוט",
    require("../assets/chefsPics/tal-rotem.png"),
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
];
