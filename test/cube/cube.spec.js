describe('Cube', function () {
  beforeEach(function () {
  });
  it('Should be defined in the app when it starts', function () {
    app.start('cube');
    expect(app.cube).not.to.be(undefined);
  });
});
