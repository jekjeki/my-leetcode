/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let store = []
    for(let i=0; i<s.length; i++){
        if(s[i] == '(' || s[i] == '[' || s[i] == '{'){
            store.push(s[i])
        }else{
            if(!store.length || (s[i] == ')' && store[store.length-1] != '(') ||
                (s[i] == ']' && store[store.length-1] != '[') || 
                (s[i] == '}' && store[store.length-1] != '{')){
                return false 
            }

            store.pop()
        }
    }

    return store.length==0
};