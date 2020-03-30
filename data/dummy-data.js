import Category from '../models/category';
import {Meal, Filters} from '../models/meal';

export const CATEGORIES = [
  new Category('גיל', '#f5428d'),
  new Category( 'אפי', '#f54242'),
  new Category('אמא מיכל', '#f5a442'),
  new Category('אמא טלי', '#f5d142'),
  new Category('איתי', '#368dff'),
  new Category('ניצן', '#368dff'),

];

export const MEALS = [
  new Meal(
    'm1',
    'גיל',
    'מרק כרובית',
    'פשוט',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    60,
    [
      'כרובית שלמה',
      '3 תפוחי אדמה',
      '1 פחית קרם קוקוס',
      'מלח, פלפל, חוויאג'
    ],
    [
      'שלב 1',
      'שלב 2',
      'שלב 3',
      'שלב 4',
      'שלב 5',
      'שלב 6'
    ],
    new Filters(true,
        true,
        true,
        true,
        false,
        false,
        false)
  ),
  new Meal(
    'm2',
    'אפי',
    'קציצות ברוקולי',
    'בינוני',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    90,
    [
      'ברוקולי',
      'ברוקולי',
      'ברוקולי',
      'ברוקולי'
    ],
    [
      'שלב 1',
      'שלב 2',
      'שלב 3',
      'שלב 4',
      'שלב 5',
    ],
    new Filters(false,
        false,
        true,
        false,
        true,
        false,
        false)
  )
]
