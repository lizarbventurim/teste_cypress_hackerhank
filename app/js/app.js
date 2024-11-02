$(document).ready(function () {
  $.getJSON('./data/report.json', function (jdata) {
    for (const transaction of jdata.data) {
      $('#tile-container').append(function() {
        const color = transaction.txnType === "debit" ? 'debit' : 'credit';

        return `<div class="tile">
                  <p class="tile-amount ${color}">${transaction.amount}</p>
                  <p class="tile-content">${transaction.userName}</p>
                  <div class="icon"></div>
                </div>`
      })
    }
  })

$('#tile-container').on("click", ".tile", function () {
  const index = $(this).index();
  $.getJSON('./data/report.json', function (jdata) {
    console.log(jdata.data[index]);
    $('.modal').show();
    $('.modal-body').empty();
    $('.modal-body').append(function() {
      return `<strong>${formatDate(jdata.data[index].timestamp)}</strong>
              <p><strong>Transaction: </strong>${jdata.data[index].txnType} </p>
              <p><strong>User: </strong>${jdata.data[index].userName}</p> 
              <p><strong>Amount: </strong>${jdata.data[index].amount} </p>`;
              
    });
  });
});

$('.close').on("click", function () {
  $('.modal').hide();
});

function formatDate(timestamp) {
  const date = new Date(timestamp);
  return `${date.toDateString()} ${date.getHours()}:${date.getMinutes()} `;
}

});
