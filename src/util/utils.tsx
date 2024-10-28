export const initialItems = new Array(29_999_999).fill(0).map((_, i) => {
    return {
        id: i,
        isSelected: i == 29_999_998
    }
});

export const shuffle = (array: string[]) => {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle
    while (currentIndex !== 0) {
        // Pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
};