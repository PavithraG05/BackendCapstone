'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Authors', [
    {
      name: 'Nancy Bond',
      biography:'Nancy Bond is a prolific fantasy writer known for her richly imagined worlds, complex characters, and epic narratives that captivate readers of all ages. Her ability to blend elements of magic and adventure has made her a favorite among fantasy enthusiasts worldwide.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'AK Gandhi',
      biography:'A.K. Gandhi, born in Meerut (U.P.), took retirement from the Indian Air Force in 1995 at a young age and engaged himself as full-time freelance writer and translator. He has written a number of books—his areas of interest being history, social study and grammar, which have been published by prestigious publications. He has written several books for academic purposes, which are taught in several CBSE-medium schools across the country. His articles keep appearing in different newspapers and magazines, including the Janvani and Readers’ Digest, as he writes off and on in them.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'John Smith',
      biography:'John Smith is a prolific fantasy writer known for his richly imagined worlds, complex characters, and epic narratives that captivate readers of all ages. His ability to blend elements of magic and adventure has made him a favorite among fantasy enthusiasts worldwide.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sarah Johnson',
      biography:'Sarah Johnson writes poignant historical fiction that vividly portrays the past through meticulously researched details and emotionally resonant storytelling. Her novels transport readers to different eras, offering insights into human nature and societal change.,',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Michael Andrews',
      biography:'Michael Andrews explores the intersection of science, technology, and humanity in his thought-provoking science fiction works. Known for his innovative ideas and compelling narratives, Andrews pushes the boundaries of imagination while addressing profound questions about the future.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Emily Chen',
      biography:'Emily Chens thrillers are known for their gripping plots, complex characters, and unpredictable twists that keep readers on the edge of their seats until the final page. Her ability to create suspenseful narratives filled with psychological depth has garnered critical acclaim in the thriller genre.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'David Rodriguez',
      biography:"David Rodriguez's novels delve into philosophical themes with lyrical prose and introspective storytelling that challenges readers to contemplate life's complexities. His explorations of human emotions and existential questions resonate deeply, making his literary fiction a compelling read for those seeking profound insights.",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Alice Thompson',
      biography:'Alice Thompson writes enchanting tales of magic and adventure that transport readers to fantastical realms filled with wonder and danger. Her ability to weave intricate plots and create vivid settings has earned her a dedicated following among fans of fantasy literature',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Mark Davis',
      biography:'Mark Davis is a master of suspense and thriller, crafting stories that blend heart-pounding action with intricate plot twists. His ability to create tension and suspenseful atmospheres has made him a favorite among readers who enjoy thrillers that keep them guessing until the very end.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sophie White',
      biography:"Sophie White's historical novels bring to life forgotten tales from the past, illuminating lesser-known events and characters with compassion and historical accuracy. Her meticulous research and evocative prose make her novels a captivating journey into different epochs",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Thomas Brown',
      biography:"Thomas Brown's science fiction explores complex themes of identity, technology, and the nature of reality with a blend of intellectual rigor and imaginative storytelling. His speculative visions of future societies and technological advancements provoke thought and reflection",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Emma Wilson',
      biography:"Emma Wilson's stories are filled with hope and resilience, portraying characters who face adversity with courage and grace. Her uplifting narratives and heartfelt storytelling resonate with readers seeking stories of human strength and the power of optimism.",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Matthew Lee',
      biography:"Matthew Lee's horror novels keep readers on the edge of their seats with chilling suspense, supernatural phenomena, and spine-tingling plot twists. His atmospheric settings and vivid descriptions create an immersive reading experience for fans of horror and suspense fiction.",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Olivia Green',
      biography:"Olivia Green writes gripping mysteries set in exotic locations, blending suspenseful plots with rich cultural details and compelling characters. Her ability to create atmospheric settings and intricate puzzles has earned her a reputation as a master of the mystery genre.",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Daniel Moore',
      biography:"Daniel Moore's novels blend adventure with profound explorations of human nature and the mysteries of existence. His gripping narratives and multifaceted characters take readers on thrilling journeys that delve into the depths of the human psyche.",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Lucy Hall',
      biography:"Lucy Hall's fantasy worlds are intricate and imaginative, filled with magic, mythical creatures, and quests that challenge characters to discover their true strengths. Her ability to create enchanting realms and compelling characters makes her a beloved author in the fantasy genre.",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'James Taylor',
      biography:"James Taylor's historical fiction transports readers to pivotal moments in history, weaving together personal stories with larger historical events to create a vivid tapestry of the past. His meticulous attention to historical detail and evocative storytelling bring history to life for readers.",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sophia Clark',
      biography:"Sophia Clark explores the mysteries of quantum physics and the implications of scientific discovery on humanity's understanding of reality. Her speculative fiction challenges readers to ponder the philosophical and ethical implications of technological advancements.",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
},

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Authors', null, {});
  }
};

//npx sequelize-cli db:seed --seed 20240701113252-authors.js
