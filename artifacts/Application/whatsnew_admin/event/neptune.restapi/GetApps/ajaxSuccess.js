
let item = new sap.ui.core.Item()

oSelectApp.addItem(item);

for ( const line of xhr.responseJSON){
    item = new sap.ui.core.Item({ key: line.property , text: line.property2});
    oSelectApp.addItem(item);
}