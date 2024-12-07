var m = [1, "hello", null, 5];
if (!m[2]) {
    // This block will be executed because m[2] is null, which is falsy
    console.log("m at index 2 is falsy");
} else {
    console.log("m at index 2 is truthy");
}
