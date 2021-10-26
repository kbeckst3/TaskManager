const mongoose = require('mongoose');

const connectString = 'mongodb+srv://Keller:Amelia4Me@nodeexpressprojects.b41fg.mongodb.net/NodeExpressProjects?retryWrites=true&w=majority'

mongoose.connect(connectString, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Connected to the database'))
.catch((err) => console.log(err))