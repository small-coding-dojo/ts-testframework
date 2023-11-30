try
{
    assertTrue(true);
    console.log("Test succeeded.");
}
catch (err){
    throw new Error("basic boolean assertion should be true");
}

try
{
    assertTrue(false);
    // noinspection ExceptionCaughtLocallyJS because we intentionally throw the error.
    throw new Error("Test failed.");
}
catch (err){
    if ((err as Error).message.indexOf("Test failed") > -1) {
        throw new Error ("basic boolean assertion should be false")
    }
    console.log("Test succeeded.")
}


function assertTrue(actual: boolean) {
    if(!actual){
        throw new Error("actual should be true, but was false");
    }
}
