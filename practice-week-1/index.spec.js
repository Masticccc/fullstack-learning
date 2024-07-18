describe('Practice Week 1 - JS basic', function () {
  it('add function return x + y', function () {
    let test1 = add(5, 5);
    expect(test1).toEqual(10);

    let test2 = add(998, 1);
    expect(test2).toEqual(999);
  });

  it('minus function  return x - y', function () {
    expect(minus(10, 5)).toEqual(5);
    expect(minus(10, 20)).toEqual(-10);
  });

  it('checkExamResult return "Pass" or "Fail" based on their score', function () {
    expect(checkExamResult(69)).toEqual('Pass');
    expect(checkExamResult(50)).toEqual('Pass');
    expect(checkExamResult(16)).toEqual('Fail');
  });

  it('divide function return  x / y', function () {
    expect(divide(8, 5)).toEqual(1.6);
  });

  it('getAverage function return (x + y) / 2', function () {
    expect(getAverage(10, 5)).toEqual(7.5);
  });

  it('getGrade function should return the right grade A, B, C, D, E, F based on their score', function () {
    expect(getGrade(96)).toEqual('A');
    expect(getGrade(86)).toEqual('B');
    expect(getGrade(77)).toEqual('C');
    expect(getGrade(66)).toEqual('D');
    expect(getGrade(54)).toEqual('E');
    expect(getGrade(22)).toEqual('F');
  });

  it('getNumbersLargerThanTen return an array containing all numbers larger than 10 from previous one', function () {
    expect(getNumbersLargerThanTen([6, 13, 2, 17, 9])).toEqual([13, 17]);
    expect(getNumbersLargerThanTen([1, 2, 3, 4, 5])).toEqual([]);
  });

  it('sum return total of all numbers in the array', function () {
    expect(sum([1, 3, -1, -3])).toEqual(0);
  });

  it('getArrayAverage return average of all numbers in the array', function () {
    expect(getArrayAverage([1, 3, 5, 7])).toEqual(4);
  });

  it('uniqueItems return the array with only the unique item', function () {
    expect(uniqueItems([1, 6, 1, 'Lion', 'Lion', 5, true])).toEqual([
      1,
      6,
      'Lion',
      5,
      true,
    ]);
  });

  it('reverse return the array with items in the reversed order', function () {
    expect(reverse([1, 3, 1, 'Lion', 'Lion', 5, false])).toEqual([
      false,
      5,
      'Lion',
      'Lion',
      1,
      3,
      1,
    ]);
  });

  it('reverseSetence return the same string in reversed order', function () {
    expect(reverseSetence('Lion is the cage!')).toEqual('!egac eht si noiL');
  });

  it('uniqueInOrder return the array contains no duplicate item next to each other', function () {
    expect(uniqueInOrder([1, 2, 2, 3, 3, 2, 2, 5])).toEqual([1, 2, 3, 2, 5]);
  });

  it('addFromOneUntil return total starting from 1 to the provided number', function () {
    expect(addFromOneUntil(9)).toEqual(45);
    expect(addFromOneUntil(-69)).toEqual(-69);
    expect(addFromOneUntil('a ruler')).toEqual(false);
  });

  it('countCharacters count the number of repeated character in given sentence', function () {
    expect(countCharacters('is just', 'a string is just a string')).toEqual(
      false
    );
    expect(countCharacters('i', 'a string is just a string')).toEqual(3);
  });

  it('removeItem return an array without the given item', function () {
    expect(removeItem(7, [3, 5, 7, 9, 5, 10])).toEqual([3, 5, 9, 5, 10]);
  });

  it('getLargestNumber return largest number in the array', function () {
    expect(getLargestNumber([5, 12, 8, 15, 3])).toEqual(15);
  });

  it('getSecondLargestNumber should return the 2nd largest number in the array', function () {
    expect(getSecondLargestNumber([5, 14, 8, 15, 3])).toEqual(14);
    expect(getSecondLargestNumber([10])).toEqual(false);
  });
});
