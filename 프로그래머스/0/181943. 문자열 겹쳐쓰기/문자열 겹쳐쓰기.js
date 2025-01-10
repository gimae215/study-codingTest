function solution(my_string, overwrite_string, s){
    let my_string_array = my_string.split('');
    for (let i = 0; i < overwrite_string.length; i++) {
        my_string_array[s + i] = overwrite_string[i];
    }
    return my_string_array.join('');
}