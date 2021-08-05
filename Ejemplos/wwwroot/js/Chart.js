const ctx = document.getElementById("MiGrafica").getContext('2d');
const myChart = new Chart(ctx, {
        type: 'bar',
data:
{
        labels: ['Capitan America', 'Capitana Marvel', 'Iron Man', 'Avengers', 'Doctor Strange'],
    datasets:
    [{
        label: 'Pelicula Favorita',
        data: [112, 155, 136, 335, 165],
        backgroundColor:
        [
            'rgba(3, 0, 42, 0.9)',
            'rgba(5, 1, 63, 0.9)',
            'rgba(3, 0, 42, 0.9)',
            'rgba(5, 1, 63, 0.9)',
            'rgba(3, 0, 42, 0.9)'
        ],
        borderColor:
        [
            'rgba(13, 75, 86, 1)',
            'rgba(0, 121, 126, 1)',
            'rgba(65, 164, 143, 1)',
            'rgba(65, 164, 143, 1)',
            'rgba(65, 164, 143, 1)'
        ],
        borderWidth: 1
    }]
},
options: {
        scales: {
        yAxes: [{
        ticks: {
        beginAtZero: true
            }
        }]
    }
}
});