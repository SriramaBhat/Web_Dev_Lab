<!DOCTYPE html>
<html>

<head>
  <title>Date Display</title>
  <style>
    h1 {
      text-align: center;
    }

    date {
      color: blue;
    }
  </style>
</head>

<body>
  <?php
  $today_date = getdate();
  echo "<h1>Today's Date is <date>$today_date[mday]/$today_date[mon]/$today_date[year]</date></h1>";
  ?>
</body>

</html>
