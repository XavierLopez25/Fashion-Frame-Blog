import React, { useState } from 'react'

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('INTERESTS')

  const content = {
    INTERESTS: [
      {
        title: 'Warframe',
        description:
          'Passionate about exploring the expansive universe of Warframe, delving into its complex lore and mastering its dynamic combat system.',
        img: 'https://cdn.videogamesblogger.com/wp-content/uploads/2020/11/Warframe-PS5-Key-Art.jpg'
      },
      {
        title: 'Metal Gear Solid Saga',
        description:
          'A fan of the Metal Gear Solid series, appreciating its deep storytelling, intricate gameplay mechanics, and innovative stealth action.',
        img: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/08/saga-metal-gear-solid-3101960.jpg'
      },
      {
        title: 'Fighting Games',
        description:
          'Enthusiastic about fighting games including classics like Darkstalkers, King of Fighters, Tekken, Street Fighter, and Mortal Kombat 11, 1, and 3 (Trilogy). Keen on both competitive play and the genre’s rich history.',
        img: 'https://www.gamespot.com/a/uploads/screen_kubrick/1601/16018044/4027937-fighting-games.jpg'
      },
      {
        title: 'Rhythm Games',
        description:
          'Engaged in rhythm games such as Geometry Dash and Osu, enjoying the challenge of precise timing and quick reflexes.',
        img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/2db45484194999.5d54ae5e7c5e8.jpg'
      },
      {
        title: 'Music',
        description:
          'Deeply passionate about music, with a particular love for Breakcore, Garage, Future Garage, Drum n Bass and Liquid DnB. I enjoy exploring the evolving landscapes of these genres, discovering underground tracks, and experiencing the profound impact of their rhythmic complexities and rich textures on modern music culture.',
        img: 'https://images.sonicacademy.com/courses/thumbnails/000/000/597/large/liquid_dnb.jpg?1529070782'
      }
    ],
    HOBBIES: [
      {
        title: 'Playing Video Games',
        description:
          'Dedicated gamer with a broad interest in various video game genres, focusing on immersive gameplay and strategic challenges.',
        img: 'https://ceinaseg.com/wp-content/uploads/2021/09/videogames-controller-1920x1080-1.jpg'
      },
      {
        title: 'Listening to Music',
        description:
          'Exploring diverse musical genres, particularly Garage, Future Garage, and Drum n Bass, appreciating the deep bass and rhythmic innovations.',
        img: 'https://w0.peakpx.com/wallpaper/166/113/HD-wallpaper-a-way-of-life-drum-and-bass-dnb-music-drum-and-bass-entertainment.jpg'
      },
      {
        title: 'Cooking',
        description:
          'Passionate about culinary arts with a special focus on discovering and creating new pasta dishes, exploring every type and variation of pasta from around the world.',
        img: 'https://www.simplyrecipes.com/thmb/DJp2s4GDwu1W-ZZKAD_uyYQMzew=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-A-A-guide-cooking-terms-11451db934b94e66852c335e5d240539.jpg'
      },
      {
        title: 'Eating Pasta',
        description:
          'Enthusiastic about tasting and enjoying various kinds of pasta, from traditional recipes to innovative culinary creations.',
        img: 'https://i2.wp.com/snappygourmet.com/wp-content/uploads/2019/10/Spicy-Alfredo-4a-txt.jpg'
      }
    ],
    FAV_FOODS: [
      {
        title: 'Kakiage Sushi Roll',
        description:
          'A unique sushi roll featuring cream cheese, crab, avocado, and nori, combining rich flavors and creamy texture with traditional Japanese elements.',
        img: 'https://img.freepik.com/foto-gratis/rollo-sushi-california_74190-2901.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1711756800&semt=ais'
      },
      {
        title: 'Alfredo Pasta with Bacon and Chicken',
        description:
          'Creamy Alfredo sauce mixed with succulent pieces of chicken and crispy bacon over pasta, offering a comforting and hearty meal.',
        img: 'https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/47/18/14/BHHGjix4Q8Q5U9BZ1sIg_chicken-alfredo-3.jpg'
      },
      {
        title: 'Inferno Bianca Pizza',
        description:
          'A spicy twist on traditional pizza with capocollo italiano (cured ham), spicy Alfredo sauce, crispy onions, and melted mozzarella on a crispy crust.',
        img: 'src/assets/pizza.png'
      },
      {
        title: 'Birria Tacos',
        description:
          'Tender, slow-cooked meat in a rich and flavorful sauce, served in a soft taco shell and perfect for dipping into consomé.',
        img: 'https://www.goya.com/media/7912/birria-tacos.jpg?quality=80'
      },
      {
        title: 'Milanesa with Mashed Potatoes',
        description:
          'Breaded and fried cutlet, typically served with creamy mashed potatoes, combining textures of crispiness and smoothness for a satisfying dish.',
        img: 'https://www.indega.com.py/primicia/wp-content/uploads/2022/04/pure-de-papa-con-pollo-broaster-large-qlJiPE4lyS.jpeg'
      }
    ],
    FAV_CHARACTERS: [
      {
        title: 'Venom Snake',
        description:
          'A complex character known for his tactical prowess and moral ambiguity, central to the Metal Gear Solid series.',
        img: 'https://i.pinimg.com/originals/37/23/81/3723810f17bcc21ced811f67d9b43d77.gif'
      },
      {
        title: 'Noob Saibot',
        description:
          'A mysterious and powerful fighter from the Mortal Kombat series, renowned for his dark abilities and ruthless fighting style.',
        img: 'https://steamuserimages-a.akamaihd.net/ugc/802115169405876821/50CE8A4208E0C8523737A9300D1A62BE01CD5AAB/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
      },
      {
        title: 'Depths',
        description:
          'A Vtuber and multi-talented digital artist with a rich background in esports, game streaming, and artistic creation. Inspired by her color palette, she is a former competitive gamer and active Warframe creator known for her engaging streams with her bunny, Luca.',
        img: 'src/assets/bg1.jpg'
      },
      {
        title: 'Selesia Upitiria',
        description:
          "A fierce and honorable character from the anime Re:Creators, admired for her bravery and determination in fighting for her creator's vision.",
        img: 'https://giffiles.alphacoders.com/109/109687.gif'
      },
      {
        title: 'Mordekaiser',
        description:
          'From League of Legends, a formidable champion known for his ability to dominate in battle with his necromantic powers and imposing armor.',
        img: 'https://steamuserimages-a.akamaihd.net/ugc/1330201629063018397/79ED471F9DD1AF1F54713205E3BDC600B046467B/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
      }
    ]
  }

  const renderContent = (category) =>
    content[category].map((item, index) => (
      <div key={index} className="item">
        <img src={item.img} alt={item.title} className="item-image" />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    ))

  return (
    <div className="about-me">
      <div className="tab-nav">
        {Object.keys(content).map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab.replace('_', ' ')}
          </button>
        ))}
      </div>
      <div className="content">{renderContent(activeTab)}</div>
    </div>
  )
}

export default AboutMe
