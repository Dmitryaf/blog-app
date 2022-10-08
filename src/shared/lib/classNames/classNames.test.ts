import classNames from './classNames';

describe('classNames', () => {
  test('With only first param', () => {
    expect(classNames('mainClass')).toBe('mainClass');
  });

  test('With mods', () => {
    const expected = 'mainClass hovered disabled';
    expect(classNames('mainClass', { hovered: true, disabled: true }))
      .toBe(expected);
  });

  test('With additional classes', () => {
    const expected = 'mainClass class1 class2';
    expect(classNames('mainClass', {}, ['class1', 'class2']))
      .toBe(expected);
  });

  test('With additional classes and mods', () => {
    const expected = 'mainClass class1 class2 hovered disabled';
    expect(classNames(
      'mainClass',
      { hovered: true, disabled: true },
      ['class1', 'class2'],
    ))
      .toBe(expected);
  });

  test('With undefined and false mod', () => {
    expect(classNames(
      'mainClass',
      { hovered: undefined, disabled: true, scrollable: false },
      [],
    ))
      .toBe('mainClass disabled');
  });
});
