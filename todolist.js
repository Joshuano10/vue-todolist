window.onload = function() {
    var add = new Vue({
        el: "#add",
        data: {
            newThing: {},
            time: "",
            content: "",
        },
        methods: {
            addThing: function() {
                if (this.time == "" && this.content == "") {
                    return false;
                }
                this.newThing = {
                    time: this.time,
                    content: this.content,
                }
                show.$emit("add", this.newThing);
                this.time = "";
                this.content = "";
            }
        }
    });

    var show = new Vue({
        el: "#show",
        data: {
            things: []
        },
        methods: {
            deleteThing: function(index) {
                this.things.splice(index,1);
            },
            deleteAll: function() {
                this.things = [];
            },
            editThing: function(thing) {
                thing.editable = !thing.editable;
                this.things.push("");
                this.things.pop();
            }
        }
    });

    show.$on("add", function(newThing) {
        newThing.editable = false;
        this.things.push(newThing);
    });
}
