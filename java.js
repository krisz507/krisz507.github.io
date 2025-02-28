function countNucleobases() {
    const input = document.getElementById('dataInput').value;
    const resultDiv = document.getElementById('result');

    const count = (str, char) => (str.split(char).length - 1);


    const counts = {
        A: count(input, 'A'),
        C: count(input, 'C'),
        G: count(input, 'G'),
        T: count(input, 'T')
    };

    resultDiv.innerHTML = `
        A: ${counts.A},
        C: ${counts.C},
        G: ${counts.G},
        T: ${counts.T}`;

}