import { UserFactory } from './user.factory';

describe('UserFactory', () => {
  it('should be defined', () => {
    expect(new UserFactory()).toBeDefined();
  });
});
