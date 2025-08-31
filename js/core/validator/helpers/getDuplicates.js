// Finds and returns all duplicate characters in string as array
export const getDuplicates = str => {
    const charArr = str.split('');
    const seen = new Set();
    const duplicates = new Set();
    
    for(const char of charArr) {
        if(seen.has(char)) {
            duplicates.add(char);
        }
        
        seen.add(char);
    }
    
    return [...duplicates];
}