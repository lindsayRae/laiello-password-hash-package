import { hashPassword, verifyHash } from './password-hash';

const controlPass = hashPassword('testPassword');

describe('hashPassword basic functionality', () => {  
  test('verifyHash is true when I pass "testPassword" as the password', () => {
    expect(verifyHash('testPassword', controlPass)).toBe(true);
  });

  test('verifyHash is false when I pass "badPassword" as the password', () => {
    expect(verifyHash('badPassword', controlPass)).toBe(false);
  });

  test('verifyHash is false when I pass "" as the password', () => {
    expect(verifyHash('', controlPass)).toBe(false);
  });

  test('verifyHash is false when I pass null as the password', () => {
    expect(verifyHash(null, controlPass)).toBe(false);
  });
});
