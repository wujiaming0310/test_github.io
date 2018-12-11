// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

Blockly.Blocks['dropdown'] = {
  init: function () {
    this.appendDummyInput()
        .appendField("List1")
        .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"]]), "Dropdown")
        .appendField("List2")
        .appendField(new Blockly.FieldDropdown([["A1","A1"], ["A2","A2"]]), "DropdownA")
        .appendField(new Blockly.FieldDropdown([["B1","B1"], ["B2","B2"]]), "DropdownB");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(340);
    this.changelist([],['DropdownB']);
  },
  mutationToDom: function (workspace) {
    var container = document.createElement('mutation');
    container.setAttribute('d', this.getFieldValue('Dropdown'));
    container.setAttribute('da', this.getFieldValue('DropdownA'));
    container.setAttribute('db', this.getFieldValue('DropdownB'));
    return container;
  },
  domToMutation: function (xmlElement) {
    this.getField('Dropdown').setValue(xmlElement.getAttribute('d'));
    this.getField('DropdownA').setValue(xmlElement.getAttribute('da'));
    this.getField('DropdownB').setValue(xmlElement.getAttribute('db'));
    this.updateShape_("refresh",xmlElement);
  },
  onchange: function (event) {
    if (event.element=="field") {
      if ((this.id==event.blockId)&&(event.name.indexOf("Dropdown")!=-1)) {
        this.updateShape_(event.name,"");
      }
    }
  },
  updateShape_: function(name,xmlElement) {  
    if ((name=='Dropdown')&&(this.getFieldValue('Dropdown')=='A')) 
      this.changelist(['DropdownA'],['DropdownB']);
    else if ((name=='Dropdown')&&(this.getFieldValue('Dropdown')=='B')) 
      this.changelist(['DropdownB'],['DropdownA']);
    
    if (name=='refresh') {
      this.getField('DropdownA').setVisible(xmlElement.getAttribute('da')!="");
      this.getField('DropdownB').setVisible(xmlElement.getAttribute('db')!="");
      if ((xmlElement.getAttribute('da')=="")&&(xmlElement.getAttribute('db')==""))
        this.updateShape_('Dropdown',""); 
    } 
    this.setNextStatement(true);
  },
    changelist: function (id_display,id_hide) {
    for (var i=0;i<id_display.length;i++) {
      this.getField(id_display[i]).setValue("");
      this.getField(id_display[i]).setVisible(true);
    }
    for (var j=0;j<id_hide.length;j++) {
      this.getField(id_hide[j]).setValue("");
      this.getField(id_hide[j]).setVisible(false);
    }
  }
};
