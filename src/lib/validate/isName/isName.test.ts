import {isName} from './isName';

describe('isName', () => {
  describe('valid names', () => {
    test.each([
      'John',
      'Mary Jane',
      'Jean-Claude',
      "O'Brien",
      'Renée',
      'Hans Runehåv',
      'Zoë',
      'Søren Kierkegaard',
      'Günter',
      'François',
      'Björk',
      'Александр',
      '李小龙',
      'سلمان خان',
      "Mary-Jane O'Connor",
      'J. K. Rowling',
      'Mary-Anne',
      "D'Angelo",
      'Anne Marie',
      "O'Connor-Smith",
      'Niña López',
      'André-Paul',
      'Hans Østergaard',
      'José María',
      'Łukasz Woźniak',
      'Márta Szőcs',
      'Kęstutis Žemaitis',
      'İsmail Küçükkaya',
      'Françoise Dupont',
      'Νικόλαος Παπαδόπουλος',
    ])('it should return true for valid name: %s', (name) => {
      expect(isName(name)).toBe(true);
    });
  });

  describe('invalid names', () => {
    test.each([
      '',
      ' ',
      'John123',
      'John!',
      'John.',
      'John,',
      'John@Doe',
      'John/Doe',
      'John\nDoe',
      'John\\Doe',
      ' John',
      'John ',
      "'John",
      "John'",
      '-John',
      'John-',
      'John  Doe',
      "John''Doe",
      'John--Doe',
      '   John   ',
      'John\tDoe',
      'John\rDoe',
      'John\u00A0Doe',
      'John\u2003Doe',
      'John\u3000Doe',
      'Mary-Jane-',
      '-Jean-Luc',
      "O'Connor'",
      '\tJohn',
      'Jean\nClaude',
      'Søren\rKierkegaard',
      'Günter\\Müller',
      'Anne Marie ',
      ' Pierre',
      '--Jean-Luc',
      "O''Brien",
      'John  Doe',
      'John- -Doe',
      'Jean--Claude',
    ])('it should return false for invalid name: %s', (name) => {
      expect(isName(name)).toBe(false);
    });
  });

  describe('special characters', () => {
    const characters = '@¯"$¢‰˜\\{}&';
    test.each(characters.split(''))(
      'it should return false for special char: %s',
      (char) => {
        expect(isName(`John Doe ${char}`)).toBe(false);
      },
    );
  });
});
