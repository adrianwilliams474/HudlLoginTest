This suite requires node.js LTS to operate and a compatible version of Firefox (102.0.1)

There needs to be a config.json file created in the main directory with the below syntax:

{
	"username": "insert username here",
	"password": "insert pw here"
}

Without the config.json some tests in the suite will not work. Please use valid credentials. 

In order to launch the test suite please open a terminal window in main directory and enter "npm test"