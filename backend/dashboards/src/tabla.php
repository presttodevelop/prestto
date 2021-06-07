<?php

$data=[
      ["id"=>1,"name"=>"maksud","mobile"=>"0187","address"=>"chandpur"],
      ["id"=>2,"name"=>"tonmoy","mobile"=>"0177","address"=>"dhaka"],
      ["id"=>3,"name"=>"abir","mobile"=>"0155","address"=>"khulna"]];
    
echo '<table><tbody>'; 
foreach(['id','name','mobile'] as $attribute) {
    echo '<tr><td>'.$attribute.'</td>';
    foreach($data as $row) {
        echo '<td>'.$row[$attribute].'</td>';
    }
    echo '</tr>';
}
echo '</tbody></table>';