const mongoose = require('mongoose');
const Topic = require('../models/topics');
const Plan = require('../models/plan');

const dbName = 'allTopic';
mongoose.connect(`mongodb://localhost/${dbName}`);

const topics = [
  { topic: 'Reading',
    image: 'reading.jpg' 
  },
  { topic: 'Writing',
    image: 'writing.jpg'
  },
  { topic: 'Festival',
    image: 'Festival.jpg'
  },
  { topic: 'Warm up activities',
    image: 'warmup.jpg'
  },
  { topic: 'HSK',
    image: 'HSK.jpg'
  },
  { topic: 'Tool Books',
    image: 'tool-books.jpg'
  },
]

Topic.create(topics, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${topics.length} topics`)
  mongoose.connection.close();
});

