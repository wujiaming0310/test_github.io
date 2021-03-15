Blockly.Blocks.webbit_mooncar_pin={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.MOONCAR_PIN);
  this.appendValueInput("R1")
      .setCheck("Number")
	  .appendField(Blockly.Msg.MOONCAR_PIN_R1);
  this.appendValueInput("R2")
      .setCheck("Number")
	  .appendField(Blockly.Msg.MOONCAR_PIN_R2);
  this.appendValueInput("L1")
      .setCheck("Number")
	  .appendField(Blockly.Msg.MOONCAR_PIN_L1);
  this.appendValueInput("L2")
      .setCheck("Number")
	  .appendField(Blockly.Msg.MOONCAR_PIN_L2);
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
}
};
Blockly.Blocks.webbit_mooncar_move_car={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.MOVE_CAR)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.FORWARD,"FORWARD"],[Blockly.Msg.BACKWARD,"BACKWARD"],[Blockly.Msg.TURNLEFT,"LEFT"],[Blockly.Msg.TURNRIGHT,"RIGHT"],[Blockly.Msg.STOP,"STOP"]]),"STAT");
  this.appendDummyInput()
      .appendField(Blockly.Msg.MOVE_MOTOR_R);
  this.appendValueInput("RSPEED")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.MOVE_MOTOR_L);
  this.appendValueInput("LSPEED")
      .setCheck("Number");	  
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
}
};
Blockly.Blocks.webbit_mooncar_tracker_pin={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.MOONCAR_TRACKER_PIN);
  this.appendValueInput("PINR")
      .setCheck("Number")
	  .appendField(Blockly.Msg.MOONCAR_TRACKER_PIN_R);
  this.appendValueInput("PINL")
      .setCheck("Number")
	  .appendField(Blockly.Msg.MOONCAR_TRACKER_PIN_L);
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
}
};
Blockly.Blocks.webbit_mooncar_tracker={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.TRACKER);
  this.setInputsInline(!0);
  this.setOutput(!0,"Number");
}
};
Blockly.Blocks.webbit_mooncar_sonar_pin={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.MOONCAR_SONAR_PIN);
  this.appendValueInput("TRIG")
      .setCheck("Number")
	  .appendField(Blockly.Msg.MOONCAR_SONAR_PIN_TRIG);
  this.appendValueInput("ECHO")
      .setCheck("Number")
	  .appendField(Blockly.Msg.MOONCAR_SONAR_PIN_ECHO);
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
}
};
Blockly.Blocks.webbit_mooncar_sonar={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.SONAR);
  this.setInputsInline(!0);
  this.setOutput(!0,"Number");
}
};
Blockly.Blocks.webbit_mooncar_button_pin={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.MOONCAR_BUTTON_PIN);
  this.appendValueInput("PINA")
      .setCheck("Number")
	  .appendField(Blockly.Msg.MOONCAR_BUTTON_PIN_A);
  this.appendValueInput("PINB")
      .setCheck("Number")
	  .appendField(Blockly.Msg.MOONCAR_BUTTON_PIN_B);
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
}
};
Blockly.Blocks.webbit_mooncar_button={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.BUTTON)
      .appendField(new Blockly.FieldDropdown([["A","A_"],["B","B_"],["AB","AB_"]]),"AB_BUTTON");
  this.appendDummyInput()
      .appendField(Blockly.Msg.BUTTON_CHECK);
  this.setInputsInline(!0);
  this.setOutput(!0,"Boolean");
}
};
Blockly.Blocks.webbit_mooncar_init_tcs={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.INIT_TCS);
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
}
};
Blockly.Blocks.webbit_mooncar_read_tcs={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.READ_TCS)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.RED,"RED"],[Blockly.Msg.GREEN,"GREEN"],[Blockly.Msg.BLUE,"BLUE"]]),"TCS");
  this.appendDummyInput()
      .appendField(Blockly.Msg.READ_VALUE);
  this.setInputsInline(!0);
  this.setOutput(!0,"Number");
}
};
Blockly.Blocks.webbit_mooncar_flash_light={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FLASH_LIGHT)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ON,"ON"],[Blockly.Msg.OFF,"OFF"]]),"TCS_LIGHT");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
}
};
Blockly.Blocks.webbit_mooncar_record_tcs={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.RECORD_TCS)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.RED,"RED"],[Blockly.Msg.GREEN,"GREEN"],[Blockly.Msg.BLUE,"BLUE"],[Blockly.Msg.YELLO,"YELLO"],[Blockly.Msg.AZURE,"AZURE"],[Blockly.Msg.PURPLE,"PURPLE"],[Blockly.Msg.C1,"C1"],[Blockly.Msg.C2,"C2"],[Blockly.Msg.C3,"C3"]]),"RECORD_TCS");
  this.appendDummyInput()
      .appendField(Blockly.Msg.RECORD_VALUE);
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
}
};
Blockly.Blocks.webbit_mooncar_chack_tcs={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.CHACK_TCS)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.RED,"RED"],[Blockly.Msg.GREEN,"GREEN"],[Blockly.Msg.BLUE,"BLUE"],[Blockly.Msg.YELLO,"YELLO"],[Blockly.Msg.AZURE,"AZURE"],[Blockly.Msg.PURPLE,"PURPLE"],[Blockly.Msg.C1,"C1"],[Blockly.Msg.C2,"C2"],[Blockly.Msg.C3,"C3"]]),"RECORD_TCS");
  this.appendDummyInput()
      .appendField(Blockly.Msg.CHACK_VALUE);
  this.setInputsInline(!0);
  this.setOutput(!0,"Boolean");
}
};
Blockly.Blocks.webbit_mooncar_ir_remote_read={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.IR_REMOTE_READ);
  this.setInputsInline(!0);
  this.appendStatementInput("IR_READ");
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
}
};
Blockly.Blocks.webbit_mooncar_ir_remote_read_value={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.IR_REMOTE_READ_VALUE);
  this.setInputsInline(!0);
  this.setOutput(!0,"String");
}
};
Blockly.Blocks.webbit_mooncar_ir_remote_read_type={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.IR_REMOTE_READ_TYPE);
  this.setInputsInline(!0);
  this.setOutput(!0,"String");
}
};
Blockly.Blocks.webbit_mooncar_ir_remote_send={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.IR_REMOTE_TYPE)
      .appendField(new Blockly.FieldDropdown([["NEC","NEC"],["Sony","SONY"],["RC5","RC5"],["RC6","RC6"]]),"IR_TYPE");
  this.appendDummyInput()
      .appendField(Blockly.Msg.IR_REMOTE_SEND);
  this.appendValueInput("IR_SEND")
      .setCheck("String");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
}
};