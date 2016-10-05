## Usage

This repo shows how an `Observable.fromPromise` fails to resolve _only_ when
the `expect` test fails

- `npm install`
- `npm test`

## Output

```
 FAIL  __tests__/test.js (5.453s)
  ● from "of" › fails normally for failing expect

    expect(received).toBe(expected)

    Expected value to be (using ===):
      false
    Received:
      true

      at SafeSubscriber.Observable.of.do [as _next] (__tests__/test.js:14:25)
      at Object.done (__tests__/test.js:15:4)
      at Object.done (__tests__/test.js:8:4)

  ● fromPromise$ › Timeout for failing expect

    Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.

      at Timeout.e [as _onTimeout] (node_modules/jsdom/lib/jsdom/browser/Window.js:477:19)
      at tryOnTimeout (timers.js:232:11)
      at Timer.listOnTimeout (timers.js:202:5)

  from "of"
    ✓ succeeds for passing expect (5ms)
    ✕ fails normally for failing expect (5ms)
  fromPromise$
    ✓ succeeds for passing expect (2ms)
    ✕ Timeout for failing expect (5002ms)

Test Suites: 1 failed, 1 total
Tests:       2 failed, 2 passed, 4 total
Snapshots:   0 total
Time:        6.007s
Ran all test suites.
npm ERR! Test failed.  See above for more details.
```
