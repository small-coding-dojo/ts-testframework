try
{
    assert(false, false);
    console.log("Test succeeded.");
}
catch (err){
    console.log("Test failed.");
}

function assert(expected: boolean, actual: boolean) {
    if(expected !== actual){
        throw new Error();
    }
}
