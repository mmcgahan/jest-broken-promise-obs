const { Observable } = require('rxjs');

describe('from "of"', () => {
	it('succeeds for passing expect', (done) => {

		Observable.of(1)
			.do(() => expect(true).toBe(true))  // run the test
			.subscribe(null, null, done);  // on complete, call done

	});
	it('fails normally for failing expect', (done) => {

		Observable.of(1)
			.do(() => expect(true).toBe(false))  // fails normally
			.subscribe(null, null, done);

	});

});

describe('fromPromise$', () => {
	it('succeeds for passing expect', (done) => {

		Observable.fromPromise(Promise.resolve(1))
			.do(() => expect(true).toBe(true))  // passes normally
			.subscribe(null, null, done);

	});

	it('Timeout for failing expect in ".do"', (done) => {

		Observable.fromPromise(Promise.resolve(1))
			.do(x => console.log('Promise resolved:', x))
			.do(() => expect(true).toBe(false))  // timeout instead of fail !!!
			.do(() => console.log('Test complete'))  // never reached
			.subscribe(null, null, done);

	});

	it('Timeout for failing expect in "completed" handler', (done) => {

		Observable.fromPromise(Promise.resolve(2))
			.subscribe(
				x => console.log('Promise resolved:', x),
				null,
				() => {
					expect(true).toBe(false);  // timeout instead of fail !!!
					console.log('Test complete');  // never reached
					done();
			});

	});

});

