<!-- Program Statement:
  Create HTML page that contain textbox, submit / reset button. Write PHP 
  script to display this information and also store into a text file.
-->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thoughts</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Enter your thoughts</h1>
  <form action="thoughts.php" method="POST">
    <label for="thoughts">Thoughts:</label>
    <div id="text-con">
      <textarea rows="25" cols="100" id="thoughts" name="thoughts"></textarea>      
    </div>
    <div id="btn-div">
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </div>
  </form>

  <?php 
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $thoughts = $_POST["thoughts"];
      $thought_file = fopen("My_thoughts.txt", "w");
      fwrite($thought_file, $thoughts);
      fclose($thought_file);
      echo "<p>The thought is: </p>";
      echo "<p class='bold'>$thoughts</p>";
      $file_path = realpath("My_thoughts.txt");
      echo "<p>The thought file path is: <span class='bold'>$file_path</span></p>";
    }
  ?>
</body>
</html>
