/* eslint-disable react/no-unknown-property */
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReview: 0,
  }

  nextReview = () => {
    const {activeReview} = this.state

    if (activeReview === 3) {
      this.setState({
        activeReview: 3,
      })
    } else {
      this.setState(prevReview => ({
        activeReview: prevReview.activeReview + 1,
      }))
    }
  }

  previousReview = () => {
    const {activeReview} = this.state

    if (activeReview === 0) {
      this.setState({
        activeReview: 0,
      })
    } else {
      this.setState(prevReview => ({
        activeReview: prevReview.activeReview - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReview} = this.state
    console.log(activeReview)
    const {imgUrl, companyName, username, description} = reviewsList[
      activeReview
    ]

    return (
      <div className="bg-container">
        <h1 className="reviews">Reviews</h1>
        <div className="total-content">
          <button
            type="button"
            testid="leftArrow"
            onClick={this.previousReview}
          >
            <img
              className="arrow"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="content-container">
            <img src={imgUrl} alt={username} />
            <p>{username}</p>
            <p>{companyName}</p>
            <p>{description}</p>
          </div>
          <button type="button" testid="rightArrow" onClick={this.nextReview}>
            <img
              className="arrow"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
