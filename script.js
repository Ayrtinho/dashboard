// Gráfico de Receita
var revenueCtx = document.getElementById('revenueChart').getContext('2d');
var revenueChart = new Chart(revenueCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Revenue',
            data: [1000, 1500, 1200, 1800, 2200, 2500],
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false
        }]
    }
});

// Gráfico de Visitantes
var visitorCtx = document.getElementById('visitorChart').getContext('2d');
var visitorChart = new Chart(visitorCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Visitors',
            data: [500, 800, 650, 700, 900, 1100],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    }
});


// Gráfico de Novos Clientes
var customerCtx = document.getElementById('customerChart').getContext('2d');
var customerChart = new Chart(customerCtx, {
    type: 'radar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'New Customers',
            data: [10, 20, 15, 25, 30, 35],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    }
});

// Troca de Idioma
document.getElementById('language-selector').addEventListener('change', function () {
    alert("Idioma alterado para: " + this.value);
});


