import Cart from '../Cart';
import Movie from '../Movie';


test('фильм добавляется в корзину', () => {
  const movie = new Movie(
1,
'The Avengers',
true,
    'Мстители',
    2012,
    'США',
    'Avengers Assemble!',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    137,
    1000,
    'avengers_img.png',
);
  const cart = new Cart();
    cart.add(movie);
  expect(cart.getAll().includes(movie)).toBeTruthy();
});


test('каждый фильм добавляется в корзину только 1 раз', () => {
  const movie = new Movie(
1,
'The Avengers',
true,
    'Мстители',
    2012,
    'США',
    'Avengers Assemble!',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    137,
    1000,
    'avengers_img.png',
);
  const cart = new Cart();
    cart.add(movie);
  expect(cart.getAll().length).toBe(1);
});





