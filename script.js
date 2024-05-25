let sortAscending = true; // Global Boolean variable

// Function to generate an array of 10 random numbers
const generateRandomArray = () => {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random() * 100));
    }
    return array;
};

// Arrow function to sort the array based on the global Boolean variable
const sortArray = (arr) => {
    let sortedArray = [];
    while (arr.length > 0) {
        let extremeIndex = 0;
        for (let i = 1; i < arr.length; i++) {
            if ((sortAscending && arr[i] < arr[extremeIndex]) || (!sortAscending && arr[i] > arr[extremeIndex])) {
                extremeIndex = i;
            }
        }
        sortedArray.push(arr.splice(extremeIndex, 1)[0]);
    }
    return sortedArray;
};

// Function to toggle the sort order and re-sort the array
const toggleSortOrder = () => {
    sortAscending = !sortAscending;
    displaySortedArray();
};

// Function to display the sorted array
const displaySortedArray = () => {
    const arrayContainer = document.getElementById('array-container');
    const randomArray = generateRandomArray();
    const sortedArray = sortArray([...randomArray]); // Use a copy of the random array
    arrayContainer.innerHTML = `
        <p>Original Array: [${randomArray.join(', ')}]</p>
        <p>Sorted Array (${sortAscending ? 'Ascending' : 'Descending'}): [${sortedArray.join(', ')}]</p>
    `;
};

// Initial display of the sorted array
displaySortedArray();