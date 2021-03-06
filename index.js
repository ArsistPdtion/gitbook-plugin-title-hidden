module.exports = {
    website: {
        assets: "./book",
        js: [
            "hidden.js"
        ],
        css: [
            "hidden.css"
        ],
        html: {
            "html:start": function () {
                return "<!-- Start book "+this.options.title+" -->"
            },
            "html:end": function() {
                return "<!-- End of book "+this.options.title+" -->"
            },
            "head:start": "<!-- head:start -->",
            "head:end": "<!-- head:end -->",

            "body:start": "<!-- body:start -->",
            "body:end": "<!-- body:end -->"
        }
    },

    // Map of hooks
    hooks: {
        "init": function () {
            
        },
        "finish": function () {
            
        }
        
    }

};