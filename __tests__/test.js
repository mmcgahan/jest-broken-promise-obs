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
	it('Timeout for failing expect', (done) => {

		Observable.fromPromise(Promise.resolve(1))
			.do(() => expect(true).toBe(false))  // timeout instead of fail !!!
			.subscribe(null, null, done);

	});

});

