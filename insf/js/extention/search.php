<?php
$conn=mysql_connect(localhost","fb","");
mysql_select_dp('foodbowl',$conn);
$s=$_GET['usearch'];
$sql="SELECT*FROM user WHERE name like'%$s%';
$rs mysql_query($sql);
while($row=mysql_fetch_array($rs)){
	echo $row['name']."<br>";
}
