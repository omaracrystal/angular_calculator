var expect = chai.expect;

describe('calculatorTests', function(){

  it('Test', function(){
    expect(2 + 2).to.equal(4);
  });

describe('calcFunction', function(){
  it('should correctly handle multiple integers', function(){
     expect(calculate(['10','+','10'])).to.eql([20]);
     expect(calculate(['10','x','10'])).to.eql([100]);
     expect(calculate(['10','+','11'])).to.not.eql([20]);
     expect(calculate(['15','/','3'])).to.eql([5]);
  });
});


  describe('Order of Operations', function(){
  it('should correctly handle order of operations', function(){
     expect(calculate(['10','+','10', 'x', '2'])).to.eql(15)
  });
});

});
