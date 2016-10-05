describe('from "of"', () => {

	it('normal success using "done"', (done) => {
		Promise.resolve(1)
			.then(x => {
				expect(true).toBe(true);
			})
			.then(done);
	});

	it('Timeout for failing "expect" using "done"', (done) => {
		Promise.resolve(1)
			.then(x => {
				expect(true).toBe(false);
			})
			.then(done);
	});

	it('fails as expected when returning promise directly', () =>
		Promise.resolve(1)
			.then(x => {
				expect(true).toBe(false);
			})
	);

});

