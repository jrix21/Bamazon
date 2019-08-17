var mysql = require("mysql");
var prompt = require("prompt");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password,m 
    password: "",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
});

transaction();

function transaction() {

	connection.query("SELECT * FROM products", function(err, res) {
            if (err) throw err;

            console.log("\n");

            console.log("||||||||||||||| TOOLS CATALOG |||||||||||||||");
            console.log("---------------------------------------------");

            var inventoryCount = res.length;

            for (var i = 0; i < res.length; i++) {

                console.log("#" + res[i].item_id + 
                            " " + res[i].product_name +
                            " (Ct:" + res[i].stock_quantity + ") " + 
                            " Cost: $" + res[i].price );
            }
            console.log("---------------------------------------------");
            console.log("|||||||||||||||||||||||||||||||||||||||||||||" );
            console.log("\n");

              prompt.start();
 
					prompt.get([{

				      name: 'id',
				      description:'Please enter an item ID',
				      message: 'Please enter a valid item ID.',
				      type: 'integer',
				      required: true
				    },

				    {
				      name: 'amount',
				      description: 'How many units would you like to purchase?',
				      message: 'You need to select an amount using a number.',
				      type: 'integer',
				      required: true
				    } 
				    ], function (err, result) {
				    
				    if (err) throw err;
				 	
				 	if (result.id > res.length) throw err;

		            for (var i = 0; i < res.length; i++) {

		            	if (result.id === res[i].item_id) {

		                console.log("\nYou requested to buy " + result.amount + " unit(s) of " + res[i].product_name + ".");

			                if (result.amount < res[i].stock_quantity || result.amount === res[i].stock_quantity) {

			                	console.log("\nThat will be $" + (res[i].price * result.amount) + ". Thank you for your purchase!");

			                	var inventoryNew = (res[i].stock_quantity - result.amount);
			                	var purchased = res[i].product_name;

				                            connection.query("UPDATE products SET ? WHERE ?", [
				                                {
				                                    stock_quantity: inventoryNew,
				                                },
				                                {
				                                    item_id: result.id
				                                }
				                            ], function(err, res) {});
				                       	
                                console.log("\nUnits in Stock: " + purchased + ": " + inventoryNew);
                                
			                }

			                else {

                                console.log("\nUnfortunately we have sold out of that tool, one second...");
                                console.log("\nHey Jimmy, order us some more " + res[i].product_name + "(s).");

			                	connection.end();

			                }


		            	}
		            }
			});
	});
};