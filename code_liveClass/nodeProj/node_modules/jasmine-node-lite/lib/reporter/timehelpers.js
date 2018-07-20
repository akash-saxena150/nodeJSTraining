/**
 *  This file is subject to the terms and conditions defined in the file
 *  'LICENCE.md', which is part of this source code package.
 *  @author Ralf Mueller
 */

'use strict';

// Requires

// Implementation

function now() {
    return new Date().getTime();
}

function timeDelta(time1, time2) {
    return Math.abs(time2 - time1);
}

function timeDeltaInSek(time1, time2){
    return timeDelta(time1, time2)/1000;
}
// Module exports

module.exports.now = now;
module.exports.timeDelta = timeDelta;
module.exports.timeDeltaInSek = timeDeltaInSek;