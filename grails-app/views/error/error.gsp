<!doctype html>
<html>
    <head>
        <title><g:if env="development">Grails Runtime Exception</g:if><g:else>Error</g:else></title>
        <asset:stylesheet src="error.css"/>
    </head>
    <body>
    <div class="error-box-wide">
        <g:if env="development">
            <g:if test="${Throwable.isInstance(exception)}">
                <g:renderException exception="${exception}" />
            </g:if>
            <g:elseif test="${request.getAttribute('javax.servlet.error.exception')}">
                <g:renderException exception="${request.getAttribute('javax.servlet.error.exception')}" />
            </g:elseif>
            <g:else>
                <ul class="errors">
                    <li>An error has occurred</li>
                    <li>Exception: ${exception}</li>
                    <li>Message: ${message}</li>
                    <li>Path: ${path}</li>
                </ul>
            </g:else>
        </g:if>
        <g:else>
            <div class="error-box">
                <h1>Error :/</h1>
                <h4>An Error has occured</h4>
                <div class="footer-info">
                    <a href="${createLink(uri: '/')}">back to start</a>
                </div>
            </div>
        </g:else>
    </div>
    </body>
</html>
