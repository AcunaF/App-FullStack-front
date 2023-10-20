import React from "react";
import "./HomeScreen.css";

const articles = [
  {
    id: 1,
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://ilcanallarubens.files.wordpress.com/2011/03/youtube_logo1-150x150.png",
  },
  {
    id: 2,
    title: "Amet Consectetur",
    description:
      "Amet consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTU4gnZ_IAmuAQL1jo2bRCkQKgzFsZvtp8bmrV_I3aLZvOE5B0ueTjv_rLrCMI7xK8jjc&usqp=CAU",
  },
  {
    id: 3,
    title: "Adipiscing Elit",
    description:
      "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 4,
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://image.similarpng.com/thumbnail/2020/06/Logo-Instagram-transparent-PNG.png",
  },
  {
    id: 5,
    title: "Amet Consectetur",
    description:
      "Amet consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/150px-LinkedIn_icon.svg.png",
  },
  {
    id: 6,
    title: "Adipiscing Elit",
    description:
      "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://www.sarahmcculloch.com/wp-content/uploads/2015/06/twitter1-150x150.png",
  },
  {
    id: 7,
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f4bd7a6-f763-4518-9b81-bdfd40ce3fc9/d26yer1-421bb5b8-9fc2-4d5a-b2d1-1e1f81b26b82.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVmNGJkN2E2LWY3NjMtNDUxOC05YjgxLWJkZmQ0MGNlM2ZjOVwvZDI2eWVyMS00MjFiYjViOC05ZmMyLTRkNWEtYjJkMS0xZTFmODFiMjZiODIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.p5vfqGmq9kIylfG3glHGa20CAPUtoWlAxKEGpIvGOi8",
  },
  {
    id: 8,
    title: "Amet Consectetur",
    description:
      "Amet consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    image: "https://allods.my.games/forum/wcf/images/avatars/avatar-5034.png",
  },
  {
    id: 9,
    title: "Adipiscing Elit",
    description:
      "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://zetaglobal.com/wp-content/uploads/2023/03/BMW-150x150.png",
  },
  {
    id: 10,
    title: "Adipiscing Elit",
    description:
      "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://schooltheatre.org/wp-content/uploads/2021/11/EdTA_Icon_FC_RGB_WEB_NoMark-150x150.png",
  },
];

const HomeScreen = () => {
  return (
    <div className="article-list">
      {articles.map((article) => (
        <div className="article-card" key={article.id}>
          <img src={article.image} alt={article.title} />
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HomeScreen;
