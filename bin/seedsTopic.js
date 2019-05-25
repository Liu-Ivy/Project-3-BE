const mongoose = require('mongoose');
const Topic = require('../models/topics');

const dbName = 'allTopic';
mongoose.connect(`mongodb://localhost/${dbName}`);

const topics = [
  { title: 'Reading',
    image: '../images/reading.jpg' 
  },
  { title: 'Writing',
    image: '../images/writing.jpg'
  },
  { title: 'Festival',
    image: '../images/Festival.jpg'
  },
  { title: 'Warm up activities',
    image: '../images/warmup.jpg'
  },
  { title: 'HSK',
    image: '../images/HSK.jpg'
  },
  { title: 'Tool Books',
    image: '../images/tool books.jpg'
  },
]

Topic.create(topics, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${topics.length} topics`)
  mongoose.connection.close();
});
