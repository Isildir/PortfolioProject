import React, { Component } from "react";
import ".././style/css/style.css";

const imgUrls = [
  {
    id: 1,
    url:
      "https://images.unsplash.com/photo-1522013009900-d26e20045ba9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7ee96fd115e56e5f8b4c3c3ddb57da56&auto=format&fit=crop&w=701&q=80",
    category: "Mobile"
  },
  {
    id: 2,
    url:
      "https://images.unsplash.com/photo-1510166089176-b57564a542b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=befea110acdbc00f7b94c872cf76f37b&auto=format&fit=crop&w=1010&q=80",
    category: "Mobile"
  },
  {
    id: 3,
    url:
      "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1053a3cdbabdd85102b762b3a05966ae&auto=format&fit=crop&w=1051&q=80",
    category: "Web"
  },
  {
    id: 4,
    url:
      "https://images.unsplash.com/photo-1511344506912-a2a2d4916354?ixlib=rb-0.3.5&s=d93560c3d6236aaab8ff13fe96d1460b&auto=format&fit=crop&w=1050&q=80",
    category: "Branding"
  },
  {
    id: 5,
    url:
      "https://images.unsplash.com/photo-1464380573004-8ca85a08751a?ixlib=rb-0.3.5&s=53ef4ca1a33c5d228280ff26dc6445e2&auto=format&fit=crop&w=1050&q=80",
    category: "Mobile"
  },
  {
    id: 6,
    url:
      "https://images.unsplash.com/photo-1528029320621-f02197f47774?ixlib=rb-0.3.5&s=8f5f6237cebe57aef9c17aef222d0be6&auto=format&fit=crop&w=675&q=80",
    category: "Branding"
  },
  {
    id: 7,
    url:
      "https://images.unsplash.com/photo-1489769002049-ccd828976a6c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=df87546bf05fef76cc185276ad0d884c&auto=format&fit=crop&w=1214&q=80",
    category: "Branding"
  },
  {
    id: 8,
    url:
      "https://images.unsplash.com/photo-1496334404997-50dbe38ea130?ixlib=rb-0.3.5&s=1ec444c89b339ce71433fb4d73a9fac4&auto=format&fit=crop&w=800&q=80",
    category: "Mobile"
  },
  {
    id: 9,
    url:
      "https://images.unsplash.com/photo-1540242908484-50aa09aea5a7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5bb1acbd469983332ce0702a2afda604&auto=format&fit=crop&w=1050&q=80",
    category: "Web"
  },
  {
    id: 10,
    url:
      "https://images.unsplash.com/photo-1494426383302-7b9d36a1a028?ixlib=rb-0.3.5&s=a8d165d68aff32a479e348b499599275&auto=format&fit=crop&w=1050&q=80",
    category: "Web"
  }
];

const activeList = [];

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedItem: null,
      dimension: {}
    };

    this.onImgLoad = this.onImgLoad.bind(this);
  }

  addClass(keyId) {
    this.setState({
      clickedItem: keyId
    });

    if (this.state.clickedItem === keyId) {
      this.setState({
        clickedItem: null
      });
    }
  }

  onImgLoad({ target: img }) {
    this.setState({
      dimensions: { height: img.offsetHeight, width: img.offsetWidth }
    });
    console.log(this.state.dimensions);
  }

  render() {
    return (
      <div className="o-gallery-container">
        {this.props.images.map(images => (
          <div id={images.id} className="o-gallery-item">
            <img
              alt=""
              category={images.category}
              src={images.url}
              onLoad={this.onImgLoad}
            />
          </div>
        ))}
      </div>
    );
  }
}

const CheckCategory = ({ activeCategory }) => {
  const activeList = [];
  for (var i = 0; i < imgUrls.length; i++) {
    if (activeCategory === "All") {
      activeList.push(imgUrls[i]);
    }
  }

  for (var j = 0; j < imgUrls.length; j++) {
    if (imgUrls[j].category === activeCategory) {
      activeList.push(imgUrls[j]);
    }
  }

  return <Photo images={activeList} category={activeCategory} />;
};

const ButtonCategories = ({ setCategory, activeCategory }) => {
  const uniqueTags = [];
  uniqueTags.push("All");
  imgUrls.map(img => {
    if (uniqueTags.indexOf(img.category) === -1) {
      uniqueTags.push(img.category);
    }
  });

  return (
    <ul>
      {uniqueTags.map(item => {
        return (
          <li
            key={item.id}
            onClick={() => setCategory(item)}
            className={activeCategory === item ? "active" : ""}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      images: activeList,
      activeCategory: "All",
      open: false
    };
    this.setCategory = this.setCategory.bind(this);
  }

  setCategory(item) {
    this.setState({
      images: activeList,
      activeCategory: item
    });
  }

  render() {
    return (
      <div className="c-gallery">
        <ButtonCategories
          setCategory={this.setCategory}
          activeCategory={this.state.activeCategory}
        />
        <CheckCategory
          activeCategory={this.state.activeCategory}
          open={this.state.open}
        />
      </div>
    );
  }
}

export default Gallery;
