// This is the js for the default/index.html view.

var app = function() {

    var self = {};

    Vue.config.silent = false; // show all warnings

    // Extends an array
    self.extend = function(a, b) {
        for (var i = 0; i < b.length; i++) {
            a.push(b[i]);
        }
    };

    self.addMemoButton = function(){
        self.vue.isAddingMemo = true;
    };

    self.cancelAddButton = function(){
        self.vue.form_title = "";
        self.vue.form_text  = "";
        self.vue.isAddingMemo = false;
    };

    self.addMemo = function(){
        $.post(addMemo_url,
            {
                title: self.vue.form_title,
                text:  self.vue.form_text,
                insetion_id: self.insertion_id
            },
            function (data){
                self.vue.isAddingMemo = false;
                self.vue.form_title = "";
                self.vue.form_text = "";
            }
        );
    };


    // Complete as needed.
    self.vue = new Vue({
        el: "#vue-div",
        delimiters: ['${', '}'],
        unsafeDelimiters: ['!{', '}'],
        data: {
            isAddingMemo: false,
            form_title: null,
            form_text: null
        },
        methods: {
            addMemoButton: self.addMemoButton,
            cancelAddButton: self.cancelAddButton,
            addMemo: self.addMemo,

        }

    });


    return self;
};

var APP = null;

// This will make everything accessible from the js console;
// for instance, self.x above would be accessible as APP.x
jQuery(function(){APP = app();});
