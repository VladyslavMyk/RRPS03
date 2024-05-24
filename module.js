const Module = (function() {
    let privateVariable = 'I am private';

    function privateMethod() {
        console.log(privateVariable);
    }

    return {
        publicMethod: function() {
            privateMethod();
        }
    };
})();

module.exports = Module;