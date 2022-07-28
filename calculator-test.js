
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({ amount: 25000, years: 10, rate: 6.0 }))
    .toEqual('277.55');
  expect(calculateMonthlyPayment({ amount: 25000, years: 10, rate: 6.0 }))
    .toBeInstanceOf(String);
});


it("should return a result with 2 decimal places", function () {
  expect(calculateMonthlyPayment({ amount: 400000, years: 10, rate: 5.0224 })).toEqual('4247.00');
});

it('should reject (NaN) not A Number', () => {
  expect(() => getCurrentUIValues({ amount: 25000, years: 'ten', rate: 6.0 })).toThrowError();
})

/// etc
