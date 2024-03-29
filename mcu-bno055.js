module.exports = function(RED) {
    function MCU_BNO055_Node(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = msg.payload.toLowerCase();
            node.send(msg);
        });
    }
    RED.nodes.registerType("mcu-bno055",MCU_BNO055_Node);
}
