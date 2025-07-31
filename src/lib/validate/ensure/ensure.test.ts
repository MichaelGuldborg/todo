import {ensure} from './ensure';

type Person = {
  name?: string;
};
describe('ensure', () => {
  it('should throw an error if value is missing', () => {
    const person: Person = {};
    expect(() => ensure(person.name), 'name is missing').toThrow();
  });

  it('should be able to assign optional value to typed variable after running ensure', () => {
    const person: Person = {name: 'Rollo'};

    ensure(person.name);
    const name: string = person.name;
    expect(name).toBe('Rollo');
  });
});
