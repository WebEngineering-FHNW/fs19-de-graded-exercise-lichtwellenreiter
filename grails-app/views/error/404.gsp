<%--
  Created by IntelliJ IDEA.
  User: florian
  Date: 2019-04-24
  Time: 13:50
--%>

<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title></title>
    <asset:stylesheet src="error.css"/>
</head>

<body>

<div class="error-box">
    <h1>404</h1>
    <h4>Path: ${request.forwardURI} was not found</h4>
    <div class="footer-info">
        <a href="${createLink(uri: '/')}">back to start</a>
    </div>
</div>

</body>
</html>