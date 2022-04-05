function doPost(e) {

  var BOT_ACCESS_TOKEN = 'Nwyfihc0pKey868MefCc9Er028u7E33OPJuRwdLEi/mmyjBSh0jFOJKvS3AMaFvKUKAp1k7JKdj2tpd8nr8/aJVF45aQajMY0anwVABxPkvJk3oPUeGlmdDWBiQt6qKBLzGhYimXU377SkcT03hhBwdB04t89/1O/w1cDnyilFU=123';
  var APPS_SCRIPT_ID = "AKfycbwjXH4ahYN8xiVGcU5k4Dbu-Fjx95Q9O4gCvLMU19OghCfD6dd2DEDKGPpqT8pxYjh-123";

  var scriptProperties = PropertiesService.getScriptProperties();

  if (e.postData) {

    var msg = JSON.parse(e.postData.contents);
    const userMessage = msg.events[0].message.text.trim();
    const user_id = msg.events[0].source.userId;
    const event_type = msg.events[0].source.type;
    const replyToken = msg.events[0].replyToken;
      
    var reply_message;

    if (userMessage=="mqtt") {
      reply_message = [{
            "type": "text",
            "text": "MQTT",
            "quickReply": {
                "items": [
                    {
                        "type": "action",
                        "action": {
                            "type": "uri",
                            "label": "on",
                            "uri": "https://script.google.com/macros/s/"+APPS_SCRIPT_ID+"/exec?command=on"
                        }
                    },
                    {
                        "type": "action",
                        "action": {
                            "type": "uri",
                            "label": "off",
                            "uri": "https://script.google.com/macros/s/"+APPS_SCRIPT_ID+"/exec?command=off"
                        }
                    }
                ]
            }
      }] 

      sendMessageToLineBot(BOT_ACCESS_TOKEN,replyToken,reply_message);       
    }
  } 

  scriptProperties.setProperty('command', userMessage);
  //return HtmlService.createHtmlOutputFromFile('linebot');
  return  ContentService.createTextOutput("Return = OK");

}

function sendMessageToLineBot(accessToken, replyToken, reply_message) {
  var url = 'https://api.line.me/v2/bot/message/reply';
  UrlFetchApp.fetch(url, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + accessToken,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'replyToken': replyToken,
      'messages': reply_message
    }),
  });
} 

function doGet(e) {
  var command = e.parameter.command;
  var scriptProperties = PropertiesService.getScriptProperties();
  scriptProperties.setProperty('command', command); 
  return HtmlService.createHtmlOutputFromFile('linebot');
}

function getCommand() {
  var scriptProperties = PropertiesService.getScriptProperties();
  var command = scriptProperties.getProperty('command');
  scriptProperties.setProperty('command', '');
  return command;
}













<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
    <script src="https://unpkg.com/mqtt/dist/mqtt.min.js"></script>
  </head>
  <body>
  <div id="result" style="font-size: 40px;color: red;"></div>

  <script>
    var mqtt_command = "";
    var mqtt_server = "wss://broker.emqx.io:8084/mqtt";
    var mqtt_username = "";
    var mqtt_password = "";
    var mqtt_topic_command = "yourtopic/data";
    var mqtt_topic_result = "yourtopic/result";

      const clientId = "mqtt_" + Math.random().toString(16).substr(2, 8);
      const options = {
        username: mqtt_username,
        password: mqtt_password,
        keepalive: 60,
        clientId: clientId,
        protocolId: "MQTT",
        protocolVersion: 4,
        clean: true,
        reconnectPeriod: 1000,
        connectTimeout: 30 * 1000
      }

      var mqtt_client = mqtt.connect(mqtt_server, options);
      mqtt_client.on("connect", () => {
        //console.log("connected");
        mqtt_client.subscribe(mqtt_topic_command);
        mqtt_client.subscribe(mqtt_topic_result);
        mqtt_client.on("message", function(topic, payload) {
          if (topic == mqtt_topic_command&&mqtt_command==payload) {
            mqtt_command = "";
            document.getElementById("result").innerHTML = "<br>"+"MQTT指令："+payload+" 傳送成功";
          }
          else if (topic == mqtt_topic_result) {
            document.getElementById("result").innerHTML += "<br>"+payload;
          }
        })
      })
  </script>

  <script>
    window.onload = function() {
      google.script.run.withSuccessHandler(
        function(command){
          mqtt_command = command;
          document.getElementById("result").innerHTML = "<br>"+"MQTT指令："+command+" 已傳送...";
          mqtt_client.publish(mqtt_topic_command, command);
        }
      ).getCommand();
    }
  </script>
 
  </body>
</html>


