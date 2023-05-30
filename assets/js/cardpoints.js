document.getElementById("redeemBtn").addEventListener("click", function() {
    var redeemAmount = parseInt(document.getElementById("amount").value);
    var totalPoints = parseInt(document.getElementById("totalPoints").innerText);
  
    if (redeemAmount <= totalPoints) {
      var remainingPoints = totalPoints - redeemAmount;
      document.getElementById("totalPoints").innerText = remainingPoints;
      document.getElementById("result").innerText = "Redemption successful!";
    } else {
      document.getElementById("result").innerText = "Insufficient points for redemption.";
    }
  });
  