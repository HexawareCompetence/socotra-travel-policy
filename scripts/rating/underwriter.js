"use strict";

const getUnderWritingResult = (data) => {
    console.log(" Underwriting Logic processing ", JSON.stringify(data));
    let decision = "accept";
    let notes = ["No issues"];

    return  {
        "decision": decision,
        "notes": notes
    };
}

exports.getUnderWritingResult = getUnderWritingResult
