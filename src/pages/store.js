import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/seo';
import Banner from '../components/banner';
import StarRatingComponent from 'react-star-rating-component';
import { graphql } from 'gatsby';
import { processSizeAndPrice } from '../utils/process-size-and-price';

class IndexPost extends React.Component {
    state = {
      NoOfPost: 6
  };
 
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
   const lastScrollY = window.pageYOffset + 1100;

    if (lastScrollY > window.outerHeight) {
     const count = this.state.NoOfPost + 3;
      this.setState({
        NoOfPost: count
      });
    }
  };

  render() {

    const { clothing } = this.props;
    const { NoOfPost } = this.state;

    return (
      <React.Fragment>
      <div className="row product-main">
        {clothing.edges.slice(0, NoOfPost).map(items => {
          const {5: minPrice, 4: maxPrice }  = processSizeAndPrice(items.node.sizesAndPrices);
          return (
          <Link key={items.node.id} className="Catalogue__item col-sm-12 col-md-6 col-lg-4" to={`/${items.node.slug}`}>
          <div>
            <div className="details_List">
              {items.node.image === null ? <div className="no-image">No Image</div> : <Img sizes={items.node.image.fixed} />}
              <div className="details_inner">
                  {
                    items.node.name.length >= 30 
                    ? <h2>{items.node.name.split(' ').slice(0, 4).join(' ')}...</h2> 
                    : <h2>{items.node.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
                  }
                <StarRatingComponent
                  name="rate1"
                  starCount={5}
                  value={items.node.rating}
                />
                <p>{items.node.description.childMarkdownRemark.excerpt.substr(0, 50)}...</p>
                <div className="row">
                  <div className="col-sm-7 align-self-center">
                    <small>{`$${minPrice} - $${maxPrice}`}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Link>
      )})}
      </div>
    </React.Fragment>
    );
  }
}

const IndexPage = ({ location, data: { clothing, bannerData }}) => { 
  return (
  <>
    <SEO 
      title="Store" 
      keywords={[`current inventory`, `jackets`, `vests`, `sewing`]} 
      description="Check out our current inventory of t-shirts and hoodies"
      location={location}
    />
    <Banner isIndex={false} bannerData={bannerData} /> *
    <div className="container store-page mb-5">
      <div className="text-left mt-5">
          <h1 className="with-underline">All Apparel</h1>
      </div>
      <IndexPost clothing={clothing}></IndexPost>
    </div> 
  </>
  );
}

export default IndexPage;

export const query = graphql`
  query StoreQuery {
    clothing: allContentfulClothing {
      edges{
        node{
          id
          name
          slug
          rating
          discount
          image {
            fixed(width: 1000, height: 500) {
              width
              height
              src
              srcSet
            }
          }
          sizesAndPrices
          description {
            childMarkdownRemark {
              excerpt(pruneLength: 140)
            }
          }
      }
    }
  }
  bannerData: contentfulHeaderBanner(page: {eq: "store"}) {
    title
    subHeading
    buttonLink
    images {
        fluid(maxWidth: 1800) {
            tracedSVG
            srcWebp
            srcSetWebp
            srcSet
            src
            sizes
            base64
            aspectRatio
        }
    }
}
}`;

