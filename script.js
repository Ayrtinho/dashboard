// Gráfico de Receita Total
const revenueCtx = document.getElementById('revenueChart').getContext('2d');
new Chart(revenueCtx, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Online Sales',
            data: [12, 19, 3, 5, 2, 3, 9],
            backgroundColor: 'rgba(54, 162, 235, 0.6)'
        }, {
            label: 'Offline Sales',
            data: [5, 10, 8, 4, 7, 6, 11],
            backgroundColor: 'rgba(255, 99, 132, 0.6)'
        }]
    }
});

// Gráfico de Visitantes
const visitorCtx = document.getElementById('visitorChart').getContext('2d');
new Chart(visitorCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Unique Visitors',
            data: [120, 150, 180, 200, 220, 250, 270],
            borderColor: 'green',
            borderWidth: 2
        }, {
            label: 'Returning Visitors',
            data: [80, 100, 140, 160, 180, 190, 210],
            borderColor: 'red',
            borderWidth: 2
        }]
    }
});

// Troca de Idioma
document.getElementById('language-selector').addEventListener('change', function () {
    alert("Idioma alterado para: " + this.value);
});