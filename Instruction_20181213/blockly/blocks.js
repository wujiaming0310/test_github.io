Blockly.Blocks['cmd1'] = {
  init: function() {
  this.appendValueInput("cmd1_0")
      .setCheck("String")
      .appendField("Javascript: ");    
  this.setOutput(true, null);
  this.setInputsInline(true);
  this.setTooltip('');
  this.setColour(80);
  }
};

Blockly.Blocks['cmd2'] = {
  init: function() {
  this.appendValueInput("cmd2_0")
      .setCheck("String")
      .appendField("Javascript: ");   
  this.appendDummyInput()
      .appendField("( ");      
  this.appendValueInput("cmd2_1")
      .setCheck(null);  
  this.appendDummyInput()
      .appendField(" )");      
  this.setOutput(true, null);
  this.setInputsInline(true);
  this.setTooltip('');
  this.setColour(80);
  }
};

Blockly.Blocks['cmd3'] = {
  init: function() {
  this.appendValueInput("cmd2_0")
      .setCheck("String")
      .appendField("Javascript: ");
  this.appendDummyInput()
      .appendField("( ");    
  this.appendValueInput("cmd2_1")
      .setCheck(null);  
  this.appendDummyInput()
      .appendField(", ");       
  this.appendValueInput("cmd2_2")
      .setCheck(null);     
  this.appendDummyInput()
      .appendField(" )");      
  this.setOutput(true, null);
  this.setInputsInline(true);
  this.setTooltip('');
  this.setColour(80);
  }
};
