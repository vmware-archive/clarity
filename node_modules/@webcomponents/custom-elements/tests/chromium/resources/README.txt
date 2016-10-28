The following files are used to run W3C testharness.js-style tests,
either authored for Blink or imported from W3C's web-platform-tests.
These files should not be modified locally, as they are imported.

* testharness.js         from testharness.js
* testharness.css        from testharness.js
* idlharness.js          from testharness.js
* WebIDLParser.js        from webidl2.js
* vendor-prefix.js       from web-platform-tests

NOTE: The 'WebIDLParser.js' file is developed as 'webidl2.js' but
web-platform-tests's wpt-tools server is configured to serve the
resource under a different name, which is matched here.

The following files are native to Blink and can be modified:

* testharnessreport.js    integration with Blink's test runner

See also:
* https://www.chromium.org/blink/importing-the-w3c-tests
* LayoutTests/imported/README

References:
* web-platform-tests  https://github.com/w3c/web-platform-tests
* testharness.js      https://github.com/w3c/testharness.js
* webidl2.js          https://github.com/darobin/webidl2.js
