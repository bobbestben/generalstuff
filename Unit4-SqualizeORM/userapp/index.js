const db = require("./models");
// by default - ID = Primary key (PK)

async function init() {
    console.log('haha')

    // // adding into DB
    // // const user = await db.user.create({
    // //     firstName: 'Brian',
    // //     lastName: 'Hague',
    // //     age: 99
    // //   });

    // // findOne from DB
    // const user = await db.user.findOne({
    //     where: { firstName: 'Brian' }
    // })

    // console.log('user', user.get())

    // const [user2, created] = await db.user.findOrCreate({
    //     where: {
    //       firstName: 'Brian',
    //       lastName: 'Smith'
    //     },
    //     defaults: { age: 88 }
    //   });

    //   console.log('user2', user2.get())
    //   console.log('created: ', created); // true = created, false = not created, data found in DB

    // const users = await db.user.findAll();
    // // where: { firstName: 'Brian' }
    // // cannot do users.get() here because get() only work for object
    // // findAll() returns array
    // console.log('users', users)
    // console.log('users', users[0].get())

    // // this is updateAll
    // const userIds = await db.user.update({
    //     lastName: 'Taco'
    //   }, {
    //     where: {
    //       firstName: 'Brian'
    //     }
    //   });


    // // Delete
    // const userId = await db.user.destroy({
    // where: { firstName: 'Brian' }
    // });

    const [post, postCreated] = await db.post.findOrCreate({
      where: {
        title: "taco",
        body: "burrito",
        authorName: "Brian"
      }
    });
    const [tag, tagCreated] = await db.tag.findOrCreate({
      where: {name: "food"}
    })
    
    await post.addTag(tag)
    
    console.log('tag: ', tag.get());

    const tag1 = await db.tag.findOne({
      where: {name: "food"}
    })
    
  

    const tag2 = await db.tag.findOne({
      where: {name: "food"}
    });
    const posts = tag2.getPosts();
    console.log("These posts are tagged with " + tag2.name + ":");
    posts.forEach((post) => {
      console.log("Post title: " + post.title);
    });

}

init();
