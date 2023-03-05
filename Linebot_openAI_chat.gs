/*
Author : ChungYi Fu (Kaohsiung, Taiwan)   2023/3/2 20:00
https://www.facebook.com/francefu
*/

let channel_access_TOKEN = "";
let openAI_api_KEY = "";

let userMessage = "";
let userId = "";
let eventType = "";
let replyToken = "";
  
function doPost(e) {

  if (e.postData) {

    let msg = JSON.parse(e.postData.contents);
    userMessage = msg.events[0].message.text.trim();
    userId = msg.events[0].source.userId;
    eventType = msg.events[0].source.type;
    replyToken = msg.events[0].replyToken;  

    let url = "https://api.openai.com/v1/chat/completions";

    let data = {
      "model": "gpt-3.5-turbo-0301",   //或 gpt-3.5-turbo
      "messages": [{"role": "user", "content": userMessage}]
    };    

    const authHeader = "Bearer "+openAI_api_KEY;
    const options = {
      headers: {Authorization: authHeader},
      method: 'POST',
      contentType: 'application/json',
      payload: JSON.stringify(data)
    }
    let response = UrlFetchApp.fetch(url, options);
    let json = JSON.parse(response.getContentText());
    let openAI_response = json["choices"][0]["message"]["content"].replace("？\n\n","").replace("？\n","").replace(/？\n/g,"").replace(/\n/g,"");    

    let replyMessage = [{
      "type":"text",
      "text": openAI_response
    }]
    sendMessageToLineBot(channel_access_TOKEN, replyToken, replyMessage);
  }

  return  ContentService.createTextOutput("Return = Finish");  
}

function sendMessageToLineBot(accessToken, replyToken, reply_message) {

  let url = 'https://api.line.me/v2/bot/message/reply';
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
