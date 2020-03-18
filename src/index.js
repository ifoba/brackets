module.exports = function check(str, bracketsConfig) {
    let config = bracketsConfig.flat();
    let result;
    for ( let i= 0; i < config.length;) {
        if (str.includes(config[i]+config[i+1])== false)
        i+=2;
        else{
        str = str.replace(config[i]+config[i+1], '');
        i = 0;
        }
    }
    if (str.length==0) result = true;
    else result = false;
    return result;
}
