const mongoose = require('mongoose');
const Plan = require('../models/plan');


require("dotenv").config()

mongoose.connect(process.env.MONGODB_URI);

const plans = [
  { topic: 'Reading',
    title: 'title',
    description: '這本書，是本非常可愛的書。適合於學生們共讀。網上找到了電子版，給老師們參考。http://videbouteilleprimaryschool.weebly.com/…/tikki_tikki_…',
    duration: 5,
    image: 'https://images.unsplash.com/photo-1534620783980-fa96320b0ce6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' 
  },
  { topic: 'Reading',
    title: 'title',
    description: '這本書，是本非常可愛的書。適合於學生們共讀。網上找到了電子版，給老師們參考。',
    duration: 5,
    image: 'https://images.unsplash.com/photo-1534620783980-fa96320b0ce6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' 
  },
  { topic: 'Writing',
    title: 'title',
    description: '五歲以下的孩子還沒有寫字的能力，所以可以使用棉花棒和字卡,加深對數字的印象。',
    duration:  5,
    image: 'https://images.unsplash.com/photo-1534620783980-fa96320b0ce6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' 
  },
  { topic: 'Writing',
    title: 'title',
    description: '五歲以下的孩子還沒有寫字的能力，所以可以使用棉花棒和字卡,加深對數字的印象。',
    duration:  5,
    image: 'https://images.unsplash.com/photo-1534620783980-fa96320b0ce6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' 
  },
  { topic: 'Festival',
    title: 'title',
    description: '這本書，是本非常可愛的書。適合於學生們共讀。網上找到了電子版，給老師們參考。',
    duration: 5,
    image: 'https://images.unsplash.com/photo-1534620783980-fa96320b0ce6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' 
  },
  { topic: 'Festival',
    title: 'title',
    description: '這本書，是本非常可愛的書。適合於學生們共讀。網上找到了電子版，給老師們參考。',
    duration: 5,
    image: 'https://images.unsplash.com/photo-1534620783980-fa96320b0ce6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' 
  },
  { topic: 'Warm up activities',
    title: 'title',
    description: '這本書，是本非常可愛的書。適合於學生們共讀。網上找到了電子版，給老師們參考。',
    duration: 5,
    image: 'https://images.unsplash.com/photo-1534620783980-fa96320b0ce6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' 
  },
  { topic: 'Warm up activities',
    title: 'title',
    description: '這本書，是本非常可愛的書。適合於學生們共讀。網上找到了電子版，給老師們參考。',
    duration: 5,
    image: 'https://images.unsplash.com/photo-1534620783980-fa96320b0ce6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' 
  },
  { topic: 'HSK',
    title: 'title',
    description: '這本書，是本非常可愛的書。適合於學生們共讀。網上找到了電子版，給老師們參考。',
    duration: 5,
    image: 'https://images.unsplash.com/photo-1534620783980-fa96320b0ce6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' 
  },
  { topic: 'HSK',
    title: 'title',
    description: '這本書，是本非常可愛的書。適合於學生們共讀。網上找到了電子版，給老師們參考。',
    duration: 5,
    image: 'https://images.unsplash.com/photo-1534620783980-fa96320b0ce6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' 
  },
  { topic: 'Tool Books',
    title: 'title',
    description: '這本書，是本非常可愛的書。適合於學生們共讀。網上找到了電子版，給老師們參考。',
    duration: 5,
    image: 'https://images.unsplash.com/photo-1534620783980-fa96320b0ce6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' 
  },
  { topic: 'Tool Books',
    title: 'title',
    description: '這本書，是本非常可愛的書。適合於學生們共讀。網上找到了電子版，給老師們參考。',
    duration: 5,
    image: 'https://images.unsplash.com/photo-1534620783980-fa96320b0ce6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' 
},
]

Plan.deleteMany()
.then(() => {
  Plan.create(plans, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${plans.length} plans`)
    mongoose.connection.close();
  });
})