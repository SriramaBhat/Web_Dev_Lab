<!DOCTYPE html>
<html>

<head>
  <title>Prime Number Checker</title>
  <style>
    body {
      background-color: cornflowerblue;
      font-family: sans-serif;
    }

    h1 {
      text-align: center;
    }

    form {
      margin: 0 8rem;
      padding: 1.5rem 4rem;
      background-color: skyblue;
      border-radius: 8px;
    }

    label {
      font-weight: bold;
      font-size: 1.2rem;
    }

    input {
      display: block;
      margin: 10px 0px;
      border: none;
      width: 75%;
      border-bottom: solid black 1px;
      background-color: rgb(253, 233, 255);
      padding: 5px;
      border-radius: 4px;
    }

    p {
      text-align: center;
      font-weight: bold;
    }

    div {
      text-align: center;
    }

    button {
      display: inline-block;
      padding: 0.5rem 2rem;
      background-color: cornsilk;
      border: solid 1px cornsilk;
      border-radius: 8px;
    }

    button:hover {
      background-color: coral;
    }
  </style>
</head>

<body>
  <h1>Prime Number Checker</h1>
  <form action="prime_number.php" method="POST">
    <label for="num">Number</label>
    <input id="num" name="num" required min="2" />
    <div>
      <button type="submit">Check!</button>
    </div>
  </form>

  <?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $num = $_POST["num"];
    if ($num == 1 || $num == 0) {
      $res_string = "The number $num is neither prime nor not prime";
    } else {
      $flag = 0;
      $res_string = "";
      for ($i = 2; $i <= sqrt($num); $i++) {
        if ($num % $i == 0) {
          $flag = 1;
          break;
        }
      }

      if ($flag == 1) {
        $res_string = "The number $num is not a prime number";
      } else {
        $res_string = "The number $num is a prime number";
      }
    }

    echo "<p>$res_string</p>";
  }
  ?>
</body>

</html>
