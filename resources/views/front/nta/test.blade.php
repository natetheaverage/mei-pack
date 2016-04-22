<html>
<head>
</head>
<body>
    <h3><?php echo $m['sender']; ?></h3>
    <h3><?php echo $m['from']; ?></h3>
    <p>Thank you for your message, we will get back to you very soon.
    This is the message we recieved:</p>
    <br />
    <h3><?php echo $m['subject']; ?></h3>
    <p><?php echo $m['body-html']; ?></p>
</body>
</html>

