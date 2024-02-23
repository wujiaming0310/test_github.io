Blockly.JavaScript['gemini_chat_initial'] = function (block) {
  var token = Blockly.JavaScript.valueToCode(block, 'token', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var tokens = Blockly.JavaScript.valueToCode(block, 'tokens', Blockly.JavaScript.ORDER_ATOMIC)||100;   
  var model = block.getFieldValue('model');

  var code = 'gemini_chat_initial('+token+', "'+model+'", '+tokens+');\nawait delay(0.5);\n';
  return code; 
};

Blockly.JavaScript['gemini_chat_request'] = function (block) {
  var words = Blockly.JavaScript.valueToCode(block, 'words', Blockly.JavaScript.ORDER_ATOMIC)||"";	
  
  var code = 'gemini_run('+words+');\n';
  return code; 
};

Blockly.JavaScript['gemini_chat_response'] = function (block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do'); 
  
  var code = 'function gemini_chat_respsonse(gemini_chat_data) {\n  '+statements_do+'\n}\nwindow.gemini_chat_respsonse = gemini_chat_respsonse;\n';
  return code; 
};

Blockly.JavaScript['gemini_chat_response_data'] = function (block) {
  var br = block.getFieldValue('br');
  var code = 'gemini_chat_respsonse_br(gemini_chat_data, \''+br+'\')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['gemini_chat_clear'] = function (block) {
  var code = 'gemini_clear();\n';
  return code; 
};
