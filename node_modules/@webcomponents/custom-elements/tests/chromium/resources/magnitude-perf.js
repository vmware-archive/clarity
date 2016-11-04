// Magnitude verifies time complexity of a function.
// Magnitude.run can be called multiple times in a single script if desired,
// optionally with different parameters each time.
//
// Usage:
// <script src="../resources/magnitude-perf.js"></script>
// <script>
// function setup(magnitude)
// {
//     ...
// }
//
// function test(magnitude)
// {
//     ...
// }
// ...
// Magnitude.description('Test that foo is linear in number of nodes.');
// Magnitude.run(setup, test, expected);
// </script>
//
// setup: function to run once before the test-loop. Takes a magnitude
//        argument that is the value of 'n'.
// test: function whose runtime is being tested. Also takes a magnitude
//       argument.
// expected: one of the run-time constants listed below, e.g.:
//           Magnitude.CONSTANT, Magnitude.LINEAR, etc.

if (window.testRunner)
    testRunner.dumpAsText();

// Namespace
var Magnitude = {};

// Description of test; prepended to the dumped markup
Magnitude.description = function(description)
{
    Magnitude._log(description);
};

// Parameters (customize per test)
// See "Time Complexity Tests" document for details:
// http://dev.chromium.org/developers/testing/time-complexity-tests
// Specify over which range the growth rate should hold:
//   2^n ... 2^(n+k-1)  where n = initialExponent, k = numPoints
Magnitude.initialExponent = 0;
Magnitude.numPoints = 8;
// Number of trials to run
// (Trial = compute times for all magnitudes, compute statistical test,
//  decide if for this dataset, the data fits the model)
Magnitude.numTrials = 3;
// Fraction of trials that must succeed for test overall to PASS
// (Default 50% means 2 out of 3 must succeed)
Magnitude.successThreshold = 0.50;
// Run = for each magnitude, run test function until pass this time limit,
// then stop and compute average time
Magnitude.millisecondsPerRun = 25;
// Strict tolerance, so noisy tests explicitly state noisiness
// Ok to relax for noisy tests;
// try tolerance = 0.10 or 0.20, and/or trim = 1 or 2 to relax slightly
// tolerance is "max (trimmed) deviation from expected",
// where "expected" is:
// * expected slope (linear, polynomial),
// * median value (constant),
// * predicted value in linear regression (logarithmic).
// For log this often needs to be very large (due to scaling), and 1.00 is ok.
Magnitude.trim = 0; // trim = 1 useful if unusual value on initial run
Magnitude.tolerance = 0.05;

Magnitude.CONSTANT = 'O(1)';
Magnitude.LINEAR = 'O(n)';
Magnitude.POLYNOMIAL = '>=O(n^2)';

// Utility functions
Magnitude._max = function(array) {
    return Math.max.apply(null, array);
};

Magnitude._min = function(array) {
    return Math.min.apply(null, array);
};

Magnitude._sortTrimArray = function(array, trim) {
    // sort array, then trim both ends
    // used for computing trimmed maximum absolute deviation
    var sorted_array = array.map(Math.abs).sort(function(a, b) { return a - b; });
    if (!trim)
        return sorted_array;
    else
        return sorted_array.slice(trim, -trim);
};

Magnitude._relativeDeviations = function(array, ref)
{
    return array.map(function(x) { return (x - ref) / ref; });
};

Magnitude._absSortDownTrimTop = function(array, trim) {
    // only trim the top of array
    // used for computing trimmed maximum absolute deviation
    if (trim === undefined)
        trim = 0;
    return array.map(Math.abs).sort(
        function(a, b) { return b - a; }).slice(trim);
};

Magnitude._median = function(array) {
    array.sort(function(a, b) { return a - b; });
    var len = array.length;
    if (!len)
        return;
    var half = Math.floor(len / 2);
    if (len % 2)
        return array[half];
    return (array[half - 1] + array[half]) / 2;
};

// Logging functions
Magnitude._log = function(msg)
{
    if (!Magnitude._container)
        Magnitude._container = document.createElement('pre');
    Magnitude._container.appendChild(document.createTextNode(msg + '\n'));
};

Magnitude._debug = function(msg)
{
    Magnitude._debugLog += msg + '\n';
};

Magnitude._logRunTimes = function()
{
    // Print out the magnitudes and times in CSV
    // to afford easy copy-paste to a charting application.
    Magnitude._debug('magnitudes: ' + Magnitude._magnitudes.join(','));
    Magnitude._debug('times: ' + Magnitude._times.join(','));
};

Magnitude._for = function(n, body, callback)
{
    var i = 0;
    var results = [];

    function iteration(result) {
        results.push(result);
        if (++i === n)
            callback(results);
        else
            body(i, iteration);
    }

    if (Magnitude._async) {
        body(i, iteration);
    } else {
        for (; i < n; ++i) {
            body(i, function(result) {
                results.push(result);
            });
        }
        callback(results);
    }
};

Magnitude._while = function(condition, body, callback)
{
    function iteration() {
        if (condition())
            body(iteration);
        else
            callback();
    }

    if (Magnitude._async) {
        iteration();
    } else {
        while (condition()) {
            body(function() {});
        }
        callback();
    }
};

// Main
Magnitude.run = function(setup, test, expected)
{
    function runTest(magnitude, callback) {
        test(magnitude);
        callback();
    }
    Magnitude._run(setup, runTest, expected, false);
};

Magnitude.runAsync = function(setup, test, expected)
{
    if (window.testRunner)
        testRunner.waitUntilDone();
    window.addEventListener('load', function() {
        Magnitude._run(setup, test, expected, true);
    }, false);
};

Magnitude._run = function(setup, test, expected, async)
{
    Magnitude._async = async;
    Magnitude._debugLog = '\nDEBUG LOG:\n';
    Magnitude._debug('Expected complexity: ' + expected);

    Magnitude._exponents = [];
    Magnitude._magnitudes = [];
    var maxExponent = Magnitude.initialExponent + Magnitude.numPoints;
    for (var i = Magnitude.initialExponent; i < maxExponent; i++) {
        Magnitude._exponents.push(i);
        Magnitude._magnitudes.push(Math.pow(2, i));
    }

    Magnitude._numSuccesses = 0;
    function runTrial(trialNumber, nextTrial)
    {
        Magnitude._trialNumber = trialNumber;
        Magnitude._debug('\nTrial #' + trialNumber);
        Magnitude._for(Magnitude.numPoints, Magnitude._runTime.bind(null, setup, test), completeTrial.bind(null, nextTrial));
    }
    function completeTrial(nextTrial, times)
    {
        Magnitude._times = times;
        Magnitude._logRunTimes();
        switch (expected) {
            case Magnitude.CONSTANT:
                passed = Magnitude._isConstant();
                break;
            case Magnitude.LINEAR:
                passed = Magnitude._isLinear();
                break;
            case Magnitude.POLYNOMIAL:
                passed = Magnitude._isPolynomial();
                break;
            default:
                Magnitude._log('FAIL: unrecognized order of growth: ' + expected);
                passed = false;
                break;
        }
        Magnitude._debug('Trial #' + Magnitude._trialNumber + ': ' +
            (passed ? 'SUCCESS' : 'FAILURE'));
        if (passed)
          Magnitude._numSuccesses++;
        nextTrial();
    }
    Magnitude._for(Magnitude.numTrials, runTrial, Magnitude._finish);
};

Magnitude._finish = function()
{
    var neededToPass = Magnitude.numTrials * Magnitude.successThreshold;
    Magnitude._debug('Successes: ' + Magnitude._numSuccesses + ', need ' +
        neededToPass + ' (' + (100 * Magnitude.successThreshold) + '%) ' +
        'to pass');
    var passedOverall = (Magnitude._numSuccesses >= neededToPass);
    Magnitude._log(passedOverall ? 'PASS' : 'FAIL');

    // By default don't log detailed information to layout test results,
    // in order to keep expected results consistent from run to run.
    if (!window.testRunner || !passedOverall)
        Magnitude._log(Magnitude._debugLog);

    if (Magnitude._async && window.testRunner)
        testRunner.notifyDone();
};

Magnitude._runTime = function(setup, test, pointIndex, callback)
{
    var magnitude = Magnitude._magnitudes[pointIndex];
    setup(magnitude);

    var debugStr = 'run for magnitude ' + magnitude;
    if (window.GCController) {
        if (GCController.getJSObjectCount)
            debugStr += ' jsObjectCountBefore ' + GCController.getJSObjectCount();

        GCController.collectAll();

        if (GCController.getJSObjectCount)
            debugStr += ' jsObjectCountAfter ' + GCController.getJSObjectCount();
    }

    Magnitude._debug(debugStr);

    var nowFunction = window.performance && window.performance.now ?
        window.performance.now.bind(window.performance) : Date.now;

    // Possibly run multiple times, to deal with delays at end
    var runOk = false;
    var attempt = 0;
    var maxAttempts = 5;
    var millisecondsPerIteration;
    var totalTimeMilliseconds;
    var iterations;

    function iteration(nextIteration)
    {
        var start = nowFunction();
        iterations = 0;
        totalTimeMilliseconds = 0;
        function completeRun(nextRun)
        {
             iterations++;
             totalTimeMilliseconds = nowFunction() - start;
             nextRun();
        }
        Magnitude._while(function() { return totalTimeMilliseconds < Magnitude.millisecondsPerRun; }, function(nextRun) { test(magnitude, completeRun.bind(null, nextRun)); }, completeIteration.bind(null, nextIteration));
    }

    function completeIteration(nextIteration)
    {
        millisecondsPerIteration = totalTimeMilliseconds / iterations;
        Magnitude._debug(iterations + ' iterations in ' +
            totalTimeMilliseconds + ' milliseconds, ' +
            'average ' + millisecondsPerIteration +
            ' milliseconds per iteration');

        var overTime = totalTimeMilliseconds - Magnitude.millisecondsPerRun;
        var relativeOverTimeTolerance = 0.001;
        var overTimeTolerance = Magnitude.millisecondsPerRun *
            relativeOverTimeTolerance;
        // If overTime is more than the duration of a run,
        // there was some delay, which introduces noise.
        // Allow a small amount of tolerance.
        if (overTime < (millisecondsPerIteration + overTimeTolerance))
            runOk = true;
        else {
            Magnitude._debug('over-time: ' + overTime +
                ' exceeds average run-time ' + millisecondsPerIteration +
                ' by more than tolerance of ' + overTimeTolerance +
                ' assuming delay');
            attempt++;
            if (attempt < maxAttempts)
                Magnitude._debug('Retrying to reduce delay noise');
            else {
                Magnitude._debug('Failed to reduce delay noise after ' +
                    maxAttempts + ' attempts, proceeding with noisy data');
                runOk = true;
            }
        }
        nextIteration();
    }
    Magnitude._while(function() { return !runOk; }, iteration, function() { callback(millisecondsPerIteration); });
};

// Auxiliary computations
Magnitude._log2Ratios = function()
{
    // Compute base-2 logarithm of ratios of times,
    // equivalently the difference of the base-2 logarithms:
    // log_2(t[i+1]/t[i]) = log_2(t[i+1]) - log_2(t[i])
    // Since times are exponentially spaced (base 2),
    // this is the slope of the step on the log-log scale,
    // and hence for O(n^k) growth should be k (the exponent).
    var ratioArray = [];
    var log2RatioArray = [];
    for (var i = 0; i < Magnitude.numPoints - 1; i++) {
        var ratio = Magnitude._times[i + 1] / Magnitude._times[i];
        var log2Ratio = Math.log(ratio) / Math.log(2);
        ratioArray.push(ratio);
        log2RatioArray.push(log2Ratio);
    }
    Magnitude._debug('ratios: ' + ratioArray.join(','));
    Magnitude._debug('log-ratios (base 2): ' + log2RatioArray.join(','));
    return log2RatioArray;
};

// Statistical tests
Magnitude._isConstant = function()
{
    // Time should be approximately constant.
    // To deal with noise, instead of constant, check that
    // (trimmed) abs relative deviation from median is within tolerance of 0.
    var times = Magnitude._times;
    var median = Magnitude._median(times);
    var relativeDeviations = Magnitude._relativeDeviations(times, median);
    Magnitude._debug('Median time: ' + median);
    Magnitude._debug('Relative deviations: ' + relativeDeviations.join(','));
    var trimmedAbsRelativeDeviations = Magnitude._absSortDownTrimTop(relativeDeviations, Magnitude.trim);
    Magnitude._debug('Trimmed sorted absolute relative deviations: ' +
        trimmedAbsRelativeDeviations.join(','));
    var maxAbsDeviation = trimmedAbsRelativeDeviations[0];
    Magnitude._debug('Maximum Absolute Relative Deviation: ' + maxAbsDeviation);
    return maxAbsDeviation <= Magnitude.tolerance;
};

Magnitude._isLinear = function()
{
    // Exponent of a monomial is the slope on the log-log scale.
    // Magnitudes are exponentially stepped, so log ratio is slope
    // of secant on log-log scale.
    // In linear growth, (trimmed) log2Ratio should equal 1, to within tolerance
    // (Special case of polynomial; see below for why this is separate.)
    //
    // Can do better by removing outlying points (and then computing the
    // slope between the neighboring points) instead of trimming ratios,
    // so we retain the data of the slope of that double step, but since we are
    // only looking at the Maximum (Absolute) Deviation, in practice these
    // generally amount to the same: given an outlier, the slope coming into
    // the point and the slope going out will generally be high/low or low/high,
    // and thus both be trimmed, while the slope of the double step will
    // generally not be extreme, so not informative.
    var logRatios = Magnitude._log2Ratios();
    var trimmedLogRatios = Magnitude._sortTrimArray(logRatios, Magnitude.trim);
    var minLogRatio = Magnitude._min(trimmedLogRatios);
    var maxLogRatio = Magnitude._max(trimmedLogRatios);
    var maxAbsDeviation = Math.max(Math.abs(1 - minLogRatio),
                                   Math.abs(maxLogRatio - 1));
    Magnitude._debug('Maximum Absolute Deviation: ' + maxAbsDeviation);
    Magnitude._debug('Tolerance: ' + Magnitude.tolerance);
    return maxAbsDeviation <= Magnitude.tolerance;
};

Magnitude._isPolynomial = function()
{
    // Exponent of a monomial is the slope on the log-log scale.
    // Magnitudes are exponentially stepped, so log ratio is slope
    // of secant on log-log scale.
    // Polynomial growth is expected to be O(n^2) or greater,
    // so logRatio should be at least 2: check (trimmed) min with tolerance
    //
    // Linear is fundamentally a special case of polynomial,
    // but here not specifying a specific exponent, and instead testing
    // that it grows *at least* quadratically (>= 2, rather than = 2 or = 3).
    // Thus we have separate functions.
    var logRatios = Magnitude._log2Ratios();
    var trimmedLogRatios = Magnitude._sortTrimArray(logRatios, Magnitude.trim);
    var minLogRatio = Magnitude._min(trimmedLogRatios);
    var absDeviationMin = Math.abs(2 - minLogRatio);
    Magnitude._debug('Absolute Deviation of Minimum: ' + absDeviationMin);
    Magnitude._debug('Tolerance: ' + Magnitude.tolerance);
    return absDeviationMin <= Magnitude.tolerance;
};

// Register listener
window.addEventListener('load', function() {
    // FIXME: Add Magnitude.waitUntilDone/notifyDone for tests that need to
    // operate after the load event has fired.
    if (window.testRunner)
        document.body.innerHTML = '';
    document.body.appendChild(Magnitude._container);
}, false);
