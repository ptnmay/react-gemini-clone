FROM alpine:3.21.2

RUN mkdir /var/run/react_gemini
RUN apk update && apk add bash nodejs npm 

EXPOSE 5173

ENTRYPOINT [ "./entry.sh" ]