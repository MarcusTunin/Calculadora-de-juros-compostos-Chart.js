document.getElementById('btn').addEventListener('click', function(){
    const inicial = document.getElementById('inicial').value;
    const juros = (document.getElementById('juros').value) /100;
    const anos = (document.getElementById('anos').value);

    const total = inicial * (1 + juros)**anos;
    const proventos = total - inicial;


    document.getElementById('Total').innerHTML = ("R$:" + total.toFixed(2));
    document.getElementById('Investido').innerHTML = ("R$:" + inicial)
    document.getElementById('Proventos').innerHTML = ("R$:" + proventos.toFixed(2))


    var newData = {
      labels: ['Investido', 'Proventos'],
      datasets: [{
          data: [inicial, proventos],
          backgroundColor: [
            'rgb(255, 255, 255)',
            'rgb(13, 212, 13)'
        ],
          borderWidth: 1
      }]
  };

  // Atualiza os dados do gráfico
  myChart.data = newData;
  myChart.update();
    
  });

  // Dados iniciais do gráfico
  var initialData = {
    labels: ['Investido', 'Proventos'],
    datasets: [{
        label: 'Grafico',
        data: [12, 10],
        backgroundColor: [
          'rgb(255, 255, 255)',
          'rgb(13, 212, 13)'
          
      ],
        borderWidth: 1
    }]
};

// Criação do gráfico
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: initialData
});


