const solution = (num_list) => {
    return num_list.length >= 11 
        ? num_list.reduce((acc, val) => acc + val) 
        : num_list.reduce((acc, val) => acc * val);
};