<html>
<head>
</head>
<body>
    <h3><?php echo $msg->name; ?></h3>
    <p>Someone from <?php echo $company->name; ?> will get back to you right away.
    <br /><br />
    This is the message we recieved:</p>
    <br />
    <h3><?php echo $msg->subject; ?></h3>
    <p><?php echo $msg->body_message; ?></p>
</body>
</html>

