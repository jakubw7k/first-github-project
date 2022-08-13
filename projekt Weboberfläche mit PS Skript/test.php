<?php
if ($_SERVER['REQUEST_METHOD'] == "POST" and isset($_POST['startPHPTestScript'])) {
    startPowershellScript();
}

function startPowershellScript()
{
    echo "<pre>";
    echo Shell_Exec('powershell -InputFormat none -ExecutionPolicy ByPass -NoProfile -Command "& { . \"C:/Users/jakub/Desktop/Programmieren/_Github/first-github-project/projekt Weboberfläche mit PS Skript/Projekt.ps1\"; }"');
    echo "</pre>";
}
?>